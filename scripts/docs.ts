import { access, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'
import { globbyStream } from 'globby'
import JSON5 from 'json5'
import consola from 'consola'
import { dedent } from 'ts-dedent'
import { IconTypes } from '../modules/icon-types'


const docs: Docs = {}

const messageCount = { error: 0, warn: 0 }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(type: 'error' | 'warn', ...message: any) {
  messageCount[type]++
  consola[type](message.shift(), ...message)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  /* eslint-env node */
  await (process.argv[2] !== undefined && process.argv[2].startsWith('components/') ? updateComponentDocs(process.argv[2]) : generateComponentDocs())
  await writeFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), JSON.stringify(docs), { encoding: 'utf8' })
  await (process.argv[2] !== undefined && process.argv[2].startsWith('components/') ? updateExamples(process.argv[2]) : writeExamples())
  consola.info(`Paintbrush docs ${process.argv[2] !== undefined && process.argv[2].startsWith('components/') ? 'update' : 'generation'} completed with ${messageCount.error} errors, ${messageCount.warn} warnings`)
})()

function findInterface(name: string, script: string): string[] {
  const definition = new RegExp(`interface\\s*?${name}\\s*?\\{(?<definition>.*?)\\}\n`, 'gisu').exec(script)?.groups?.definition ?? ''
  return definition.replace(/\/\/ eslint-disable-next-line (.*?)\n/g, '').split('\n').map(line => line.trim()).filter(line => line.length > 0)
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
  example: {
    content: string
    render: boolean
  }[]
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
  require: string[]
  see: string[]
  tag: string[]
  version: string
}

export type Docs = Record<string, Component>

export async function generateComponentDocs() {
  for await (const file of globbyStream('components/**.vue')) {
    docs[file.toString()] = await readComponentData(file.toString())
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

export async function readComponentData(file: string): Promise<Component> {
  delete docs[file]
  try {
    await access(file)
  } catch {
    throw new Error(`Cannot access file ${file}`)
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

  const examples = [ ...text.matchAll(/<!--#(?<value>.*?)-->/gisu) ]
    .map(match => match.groups?.value)
    .map(entry => entry ?? '')
    .map(entry => entry.trimEnd())
    .map(entry => entry.replace(/^\s{2}/gm, ''))
    .map(entry => entry.replace(/^_+/gm, underscore => ' '.repeat(underscore.length)))
    .map(entry => (entry.startsWith('#') ? [ true, entry.slice(1) ] : [ false, entry ]) as [ boolean, string ])
    .filter(example => example[1].length > 0)
    .map(example => [ example[0], example[1].replace(/(^\n|\n$)/g, '') ] as [ boolean, string ])  as [ boolean, string ][]

  const scriptSetup = [ ...text.matchAll(/<script(?<attrs>.*?)>(?<value>.*?)<\/script>/gisu) ]
    .filter(match => match && match.groups && /\blang\s*=\s*('ts'|"ts")/.test(match.groups?.attrs) || log('warn', `${file} Only ts scripts are supprted`))
    .filter(match => match && match.groups && /\bsetup\b/.test(match.groups?.attrs) || log('warn', `${file} Only setup scripts are supported`))
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
    require: [],
    see: [],
    tag: [],
    version: ''
  }

  const generated = new Set([ 'emit', 'name', 'property' ])

  for (const entry of doc) {
    if (generated.has(entry[0])) {
      log('warn', `Overriding ${file}: @${entry[0]} is generated from source`)
      continue
    }
    if (entry[0] === 'example') {
      log('warn', `Overriding ${file}: @${entry[0]} is read from <!--# comments -->`)
      continue
    }
    if (!Object.hasOwn(componentData, entry[0])) {
      log('warn', `Unknown property @${entry[0]} in '${file}' docs, skipping`)
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
      const emitData = /\(e:\s*'(?<name>.*?)'(,\s*(?<payload>\w+):\s*(?<type>.*))?\): void\s*?(\/\/\s*(?<description>.*))\s*$/su.exec(emit)
      if (!emitData) {
        log('warn', `Unable to parse emit interface: ${file} '${emit}'`)
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
      .replaceAll('new Date().getFullYear()', '\'<current year>\'')
      .replace(/\(\) => \((.*?)\)/gims, '$1')
      .replace(/\(\) => (\[.*?])/gims, '$1') ?? '{}'
    let defaults: Record<string, string> = {}
    try {
      defaults = JSON5.parse(defaultString ?? '{}')
    } catch {
      log('warn', `Unable to parse prop defaults: ${file} '${defaultString}'`)
    }
    for (const prop of propInterface) {
      const propData = /(?<name>\w+)(?<optional>\?)?:\s*(?<type>.+)\s\s*?(\/\/\s*(?<description>.*))\s*$/su.exec(prop)
      if (!propData) {
        log('error', `Unable to parse prop: ${file} '${prop}'`)
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

  if (examples) {
    for (const example of examples) {
      let refs = ''
      let i = 1
      while (example[1].includes(`rb${i}`)) {
        refs += `const rb${i} = ref<boolean>(false)\n`
        i++
      }
      i = 1
      while (example[1].includes(`rn${i}`)) {
        refs += `const rn${i} = ref<number>(0)\n`
        i++
      }
      i = 1
      while (example[1].includes(`rs${i}`)) {
        refs += `const rs${i} = ref<string>('')\n`
        i++
      }
      /* eslint-disable prefer-template */
      const content = example[1].trimStart().startsWith('<template>') ? (example[1].endsWith('\n') ? example[1] : `${example[1]}\n`) : dedent`
        <template>
          ${example[1]}
        </template>
      ` + (refs ? '\n\n' + dedent`
        <script lang="ts" setup>
          import { ref } from '#imports'


          ${refs.trimEnd()}
        </script>
      ` : '')
      /* eslint-enable prefer-template */
      componentData.example.push({ content, render: example[0] })
    }
  }

  componentData.name = file.replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '')


  if (componentData.version === '') {
    log('warn', `Component ${file} has no @version, defaulting to 0.0.1`)
    componentData.version = '0.0.1'
  }
  if (componentData.icon === undefined) {
    log('warn', `Component ${file} has no @icon`)
  }
  if (componentData.description === '') {
    log('warn', `Component ${file} has no @description`)
  }
  return componentData
}

export async function updateComponentDocs(file: string) {
  const oldDocs = await readFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), 'utf8')
  if (!oldDocs) {
    log('warn', 'Docs file missing')
    return
  }
  Object.assign(docs, JSON.parse(oldDocs))
  docs[file] = await readComponentData(file)
  const docsApi = await readFile(fileURLToPath(new URL('../server/api/docs.ts', import.meta.url)), 'utf8')
  const docsServed = docsApi.replace(/ {4}\/\/ MARK-BEGIN.* {4}\/\/ MARK-END/gmus, `    // MARK-BEGIN
    .end('${JSON.stringify(docs).replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}')
    // MARK-END`)
  await writeFile(fileURLToPath(new URL('../server/api/docs.ts', import.meta.url)), docsServed)
  await writeFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), JSON.stringify(docs).replace(/\\/g, '\\\\').replace(/'/g, '\\\''), { encoding: 'utf8' })
}

export async function updateExamples(file: string) {
  for await (const example of globbyStream(`pages/docs/examples/${file.replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '').toLocaleLowerCase()}-*.vue`)) {
    await rm(example.toString())
  }
  await writeExamplesFor(file)
}

export async function writeExamples() {
  await rm(fileURLToPath(new URL('../pages/docs/examples', import.meta.url)), { recursive: true })
  await mkdir(fileURLToPath(new URL('../pages/docs/examples', import.meta.url)))

  for (const file in docs) {
    await writeExamplesFor(file)
  }
}

export async function writeExamplesFor(file: string) {
  const component = docs[file]
  for (let i = 0; i < component.example.length; i++) {
    const example = component.example[i]
    if (!example.render) {
      continue
    }
    await writeFile(fileURLToPath(new URL(`../pages/docs/examples/${component.name.toLocaleLowerCase()}-${i}.vue`, import.meta.url)), `${example.content}\n`, { encoding: 'utf8' })
  }
}
