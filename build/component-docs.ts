import { access, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { globbyStream } from 'globby'


export interface Component {
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

export default async () => {
  await generateComponentDocs()
}

export async function generateComponentDocs(componentFiles = 'components/**.vue', output = '../public/docs.json') {
  const components: Docs = {}

  for await (const file of globbyStream(componentFiles)) {
    const fileName = file.toString()
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
      .split(/^@/gm)
      .map(entry => entry.trim())
      .filter(entry => entry.length > 0)
      .map(entry => entry.replace(/(^\n|\n$)/g, ''))
      .map(entry => {
        if (entry.includes('\n')) {
          const lines = entry.split('\n')
          return [ lines[0] as keyof Component, lines.slice(1).join('\n').replace(/^ {2}/gm, '') ]
        }
        const lines = entry.split(' ')
        return [ lines[0] as keyof Component, lines.slice(1).join(' ').replace(/^ {2}/gm, '') ]
      })

    const componentData: Component = {
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
      console.warn(`Component ${fileName} has no @name`)
    } else {
      const duplicates = Object.entries(components).filter(component => component[1].name === componentData.name)
      if (duplicates.length > 0) {
        console.warn(`Component ${fileName} has duplicate @name (${duplicates.map(component => component[0]).join(', ')})`)
      }
    }
    if (componentData.version === '') {
      console.info(`Component ${fileName} has no @version, defaulting to 0.0.1`)
      componentData.version = '0.0.1'
    }
    components[fileName] = componentData
  }

  for (const component of Object.values(components)) {
    for (const see of component.see) {
      if (!components[see]) {
        console.warn(`Component ${component} has invalid @see ${see}`)
      }
    }
  }

  const target = fileURLToPath(new URL(output, import.meta.url))
  await writeFile(target, JSON.stringify(components), 'utf8')
}
