import { access, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'
import { globbyStream } from 'globby'
import JSON5 from 'json5'
import { IconTypes } from '../modules/icon-types'


const docs: Docs = {}

const messageCount = { error: 0, warn: 0 }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(type: 'error' | 'warn', ...message: any) {
  messageCount[type]++
  console[type](...message)
}

(async () => {
  await generateComponentDocs()
  await writeFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), JSON.stringify(docs), { encoding: 'utf8' })
  console.warn(`\nDocs generation completed with ${messageCount.error} errors, ${messageCount.warn} warnings\n`)
})()

function findInterface(name: string, script: string): string[] {
  const definition = new RegExp(`interface\\s*?${name}\\s*?\\{(?<definition>.*?)\\}`, 'gisu').exec(script)?.groups?.definition ?? ''
  return definition.split('\n').map(line => line.trim()).filter(line => line.length > 0)
}

export interface Component {
  category: string
  description: string
  emit: {
    description: string
    name: string
    payload: string
    type: string
  }[]
  example: string[]
  icon: IconTypes | undefined
  name: string
  note: string
  property: {
    default?: string
    description: string
    name: string
    required: boolean
    type: string
  }[]
  renderedExample: string[]
  require: string[]
  see: string[]
  tag: string[]
  usage: string
  version: string
}

export type Docs = Record<string, Component>

export async function generateComponentDocs() {
  for await (const file of globbyStream([ 'components/*.vue', 'components/**/*.vue' ])) {
    const fileName = file.toString()
    delete docs[fileName]
    try {
      await access(file)
    } catch {
      return
    }

    const buffer = await readFile(file, 'utf8')
    const text = buffer.toString()
    const doc: [keyof Component, string][] = [ ...text.matchAll(/<!--!(?<value>.*?)-->/gisu) ]
      .map(match => match.groups?.value)
      .join('\n')
      .split(/^( {2})?@/gm)
      .map(entry => entry.trimEnd())
      .map(entry => entry.replace(/^\s{2}/gm, ''))
      .map(entry => entry.replace(/^_+/gm, underscore => ' '.repeat(underscore.length)))
      .filter(entry => entry.length > 0)
      .map(entry => entry.replace(/(^\n|\n$)/g, ''))
      .map(entry => {
        if (entry.includes('\n')) {
          const lines = entry.split('\n')
          return [ lines[0] as keyof Component, lines.slice(1).join('\n') ]
        }
        const lines = entry.split(' ')
        return [ lines[0] as keyof Component, lines.slice(1).join(' ') ]
      })
    const scriptSetup = [ ...text.matchAll(/<script(?<attrs>.*?)>(?<value>.*?)<\/script>/gisu) ]
      .filter(match => match && match.groups && /\blang\s*=\s*('ts'|"ts")/.test(match.groups?.attrs) || log('warn', `${fileName} Only ts scripts are supprted`))
      .filter(match => match && match.groups && /\bsetup\b/.test(match.groups?.attrs) || log('warn', `${fileName} Only setup scripts are supported`))
      .join('\n')

    const emits = /defineEmits<(?<interface>.*?)>\(\)\s*$/gmisu.exec(scriptSetup)
    let props = /withDefaults\(defineProps<(?<interface>.*?)>\(\),\s*(?<defaults>.*?)\s{0,4}(?<=\})\)\s*$/gmisu.exec(scriptSetup)
    if (!props) {
      props = /defineProps<(?<interface>.*?)>\(\)\s*$/gmisu.exec(scriptSetup)
    }

    const componentData: Component = {
      category: '',
      description: '',
      emit: [],
      example: [],
      icon: undefined,
      name: '',
      note: '',
      property: [],
      renderedExample: [],
      require: [],
      see: [],
      tag: [],
      usage: '',
      version: ''
    }

    for (const entry of doc) {
      if (entry[0] === 'emit' || entry[0] === 'name' || entry[0] === 'property') {
        log('warn', `Overriding ${fileName}: @${entry[0]} is generated from source`)
        continue
      }
      if (!Object.hasOwn(componentData, entry[0])) {
        log('warn', `Unknown property @${entry[0]} in '${fileName}' docs, skipping`)
        continue
      }
      if (Array.isArray(componentData[entry[0]])) {
        (componentData[entry[0]] as string[]).push(entry[1])
      } else {
        (componentData[entry[0]] as string) = entry[1]
      }
    }

    if (emits) {
      const emitInterface = findInterface(emits?.groups?.interface ?? '', scriptSetup)
      for (const emit of emitInterface) {
        const emitData = /\(e:\s*'(?<name>.*?)',\s*(?<payload>\w+):\s*(?<type>.*)\): void\s*?(\/\/\s*(?<description>.*))\s*$/su.exec(emit)
        if (!emitData) {
          log('warn', `Unable to parse emit interface: ${fileName}/'${emit}'`)
          continue
        }
        componentData.emit.push({
          description: emitData?.groups?.description ?? '',
          name: emitData?.groups?.name ?? '',
          payload: emitData?.groups?.payload ?? '',
          type: emitData?.groups?.type ?? ''
        })
      }
    }

    if (props) {
      const propInterface = findInterface(props?.groups?.interface ?? '', scriptSetup)
      const defaultString = props?.groups?.defaults
        ?.replaceAll(': undefined', ': \'undefined\'')
        .replace(/\(\) => \((.*?)\)/gims, '$1')
        .replace(/\(\) => (\[.*?])/gims, '$1') ?? '{}'
      let defaults: Record<string, string> = {}
      try {
        defaults = JSON5.parse(defaultString ?? '{}')
      } catch {
        log('warn', `Unable to parse prop defaults: ${fileName} '${defaultString}'`)
      }
      for (const prop of propInterface) {
        const propData = /(?<name>\w+)(?<optional>\?)?:\s*(?<type>.+)\s*?(\/\/\s*(?<description>.*))\s*$/su.exec(prop)
        if (!propData) {
          log('error', `Unable to parse prop: ${fileName} '${prop}'`)
          continue
        }
        componentData.property.push({
          default: defaults[propData?.groups?.name ?? ''] ?? '',
          description: propData?.groups?.description ?? '',
          name: propData?.groups?.name ?? '',
          required: propData?.groups?.optional?.length === 0 ?? false,
          type: propData?.groups?.type ?? ''
        })
      }
    }

    componentData.name = fileName.replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '')


    if (componentData.version === '') {
      log('warn', `Component ${fileName} has no @version, defaulting to 0.0.1`)
      componentData.version = '0.0.1'
    }
    if (componentData.icon === undefined) {
      log('warn', `Component ${fileName} has no @icon`)
    }
    if (componentData.description === '') {
      log('warn', `Component ${fileName} has no @description`)
    }
    if (componentData.usage === '') {
      log('warn', `Component ${fileName} has no @usage`)
    }

    docs[fileName] = componentData
  }

  for (const component of Object.values(docs)) {
    for (const see of component.see) {
      if (!docs[see]) {
        log('warn', `Component ${component} has invalid @see ${see}`)
      }
    }
  }

  return docs
}
