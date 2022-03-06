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
      if (Array.isArray(componentData[entry[0]])) {
        (componentData[entry[0]] as string[]).push(entry[1])
      } else {
        (componentData[entry[0]] as string) = entry[1]
      }
    }

    components[fileName] = componentData
    if (componentData.name === '') {
      console.warn(`Component ${fileName} has no name`)
    }
  }

  const target = fileURLToPath(new URL('../public/docs.json', import.meta.url))
  await writeFile(target, JSON.stringify(components), 'utf8')
}
