import { access, readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { globbyStream } from 'globby'

export default async () => {
  const components: Record<string, object> = {}

  for await (const file of globbyStream('components/**.vue')) {
    const fileName = file.toString()
    try {
      await access(file)
    } catch (e) {
      return
    }

    const buffer = await readFile(file, 'utf8')
    const text = buffer.toString()
    const doc = [ ...text.matchAll(/<!--!(?<value>.*?)-->/gisu) ]
      .map(match => match.groups?.value)
      .join('\n')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .filter(line => line.startsWith('@'))
      .map(line => line.split(' '))
      .map(words => [ words[0].replace('@', ''), words.slice(1).join(' ') ])

    const componentData: Record<string, string | string[]> = {
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
        componentData[entry[0]] = entry[1]
      }
    }

    components[fileName] = componentData
  }

  const target = fileURLToPath(new URL('../public/docs.json', import.meta.url))
  await writeFile(target, JSON.stringify(components), 'utf8')
}
