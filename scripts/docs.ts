import { access, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'
import { globbyStream } from 'globby'
import { IconTypes } from '../modules/icon-types'


const docs: Docs = {}

// eslint-disable-next-line no-extra-parens
;(async () => {
  await generateComponentDocs()
  await writeFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), JSON.stringify(docs), { encoding: 'utf8' })
})

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
    // TODO change includes to regex word match
    const scriptSetup = [ ...text.matchAll(/<script(?<attrs>.*?)>(?<value>.*?)<\/script>/gisu) ]
      .filter(match => match.groups?.attrs.includes('lang="ts"' || console.warn(`${fileName} Only ts scripts are supprted`)))
      .filter(match => match.groups?.attrs.includes('setup') || console.warn(`${fileName} Only setup scripts are supported`))
      .join('\n')

    const emits = /defineEmits<(?<interface>.*?)>\(\)/gisu.exec(scriptSetup)
    // TODO find no default definitions
    const props = /withDefaults\(defineProps<(?<interface>.*?)>\(\),(?<defaults>.*?)\)/gisu.exec(scriptSetup)

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
      see: [],
      tag: [],
      usage: '',
      version: ''
    }

    for (const entry of doc) {
      if (entry[0] === 'emit' || entry[0] === 'name' || entry[0] === 'property') {
        console.warn(`component ${fileName}: @${entry[0]} is deprecated`)
        continue
      }
      /* if (entry[0] === 'property') {
        const regex = /^\s*(?<name>[\w-]+)\s*(?<optional>\?)?:\s*(?<type>[\w"'-]+)\s*(\[\s*(?<default>.*?)\s*])?\s*(\((?<desc>.*?)\))?\s*$/
        for (const line of entry[1].split('\n')) {
          const data = regex.exec(line)?.groups
          if (data) {
            componentData.property.push({
              default: data.default,
              description: data.desc,
              name: data.name,
              required: !data.optional,
              type: data.type
            })
          } else {
            console.warn(`Unable to parse @property line: ${line}`)
          }
        }
        continue
      }*/
      if (!Object.hasOwn(componentData, entry[0])) {
        console.warn(`Unknown property @${entry[0]} in '${fileName}' docs, skipping`)
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
      console.log(emitInterface)
      for (const emit of emitInterface) {
        componentData.emit.push({
          description: emit,
          name: emit,
          payload: emit
        })
      }
    }

    if (props) {
      const propInterface = findInterface(props?.groups?.interface ?? '', scriptSetup)
      for (const prop of propInterface) {
        componentData.property.push({
          default: prop,
          description: prop,
          name: prop,
          required: !!prop,
          type: prop
        })
      }
    }

    componentData.name = fileName.replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '')


    if (componentData.version === '') {
      console.info(`Component ${fileName} has no @version, defaulting to 0.0.1`)
      componentData.version = '0.0.1'
    }
    if (componentData.icon === undefined) {
      console.info(`Component ${fileName} has no @icon`)
    }
    if (componentData.description === '') {
      console.warn(`Component ${fileName} has no @description`)
    }
    if (componentData.usage === '') {
      console.warn(`Component ${fileName} has no @usage`)
    }

    docs[fileName] = componentData
  }

  for (const component of Object.values(docs)) {
    for (const see of component.see) {
      if (!docs[see]) {
        console.warn(`Component ${component} has invalid @see ${see}`)
      }
    }
  }

  return docs
}
