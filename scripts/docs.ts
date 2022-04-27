import { access, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'
import { globbyStream } from 'globby'


const docs: Docs = {}

// eslint-disable-next-line no-extra-parens
;(async () => {

  await generateComponentDocs()

  await writeFile(fileURLToPath(new URL('../public/docs.json', import.meta.url)), JSON.stringify(docs), { encoding: 'utf8' })

})

export interface Component {
  category: string
  description: string
  example: string[]
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
  tags: string[]
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
      .map(entry => entry.replace(/^_+/gm, (underscore, ...args) => {
        console.log(underscore)
        console.log(args)
        return ' '.repeat(underscore.length)
      }))
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

    const componentData: Component = {
      category: '',
      description: '',
      example: [],
      name: '',
      note: '',
      property: [],
      renderedExample: [],
      see: [],
      tags: [],
      usage: '',
      version: ''
    }
    for (const entry of doc) {
      if (entry[0] === 'property') {
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
      }
      if (typeof componentData[entry[0]] === 'undefined') {
        console.warn(`Unknown property @'${entry[0]}' in '${fileName}' docs, skipping`)
        continue
      }
      if (Array.isArray(componentData[entry[0]])) {
        (componentData[entry[0]] as string[]).push(entry[1])
      } else {
        (componentData[entry[0]] as string) = entry[1]
      }
    }

    if (componentData.name === '') {
      console.warn(`Component ${fileName} has no @name, excluding`)
      continue
    } else if (componentData.name.toLowerCase() !== fileName.toLowerCase().replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '')) {
      console.warn(`Component ${fileName} has incorrect @name '${componentData.name}' which does not match the file name '${fileName.toLowerCase().replace(/^components\//, '').replace(/\.vue$/, '').replaceAll('/', '')}'`)
    } else {
      const duplicates = Object.entries(docs).filter(component => component[1].name === componentData.name)
      if (duplicates.length > 0) {
        console.warn(`Component ${fileName} has duplicate @name (${duplicates.map(component => component[0]).join(', ')})`)
      }
    }
    if (componentData.version === '') {
      console.info(`Component ${fileName} has no @version, defaulting to 0.0.1`)
      componentData.version = '0.0.1'
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
