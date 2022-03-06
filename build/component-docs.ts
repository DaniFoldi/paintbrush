import { access, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { globbyStream } from 'globby'


export interface ComponentDocs {
  description: string
  example: string[]
  name: string
  note: string
  properties: string[]
  see: string[]
  tags: string[]
  usage: string
  version: string
}

export default async () => {
  const components: Record<string, ComponentDocs> = {}

  for await (const file of globbyStream('components/**.vue')) {
    const fileName = file.toString()
    try {
      await access(file)
    } catch {
      return
    }

    const buffer = await readFile(file, 'utf8')
    const text = buffer.toString()
    const doc: [keyof ComponentDocs, string][] = [ ...text.matchAll(/<!--!(?<value>.*?)-->/gisu) ]
      .map(match => match.groups?.value)
      .join('\n')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .filter(line => line.startsWith('@'))
      .map(line => line.split(' '))
      .map(words => [ words[0].replace('@', '') as keyof ComponentDocs, words.slice(1).join(' ') ])

    const componentData: ComponentDocs = {
      description: '',
      example: [],
      name: '',
      note: '',
      properties: [],
      see: [],
      tags: [],
      usage: '',
      version: ''
    }
    for (const entry of doc) {
      if (typeof componentData[entry[0]] === 'undefined') {
        console.warn(`Unknown property @'${entry[0]}' in '${fileName}' docs, skipping`)
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

  const target = fileURLToPath(new URL('../public/docs.json', import.meta.url))
  await writeFile(target, JSON.stringify(components), 'utf8')
}
