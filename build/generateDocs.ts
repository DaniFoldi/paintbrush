import fs from 'fs/promises'
import glob from 'glob'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

export default async () => {
  const files = await promisify(glob)(new URL(`./components/**/*.vue`, import.meta.url).href)
  const components = {}

  await Promise.all(
    files.map(async file => {
      try {
        await fs.access(file)
      } catch (e) {
        return
      }

      const buffer = await fs.readFile(file, 'utf8')
      const text = buffer.toString()
      const doc = [...text.matchAll(/<!--!(?<value>.*?)-->/gisu)]
        .map(match => match.groups.value)
        .join('\n')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .filter(line => line.startsWith('@'))

      const componentData = {}

      // TODO extract most of this information automatically from component description

      for (const entry of doc) {
        switch (entry.split(' ')[0]) {
          case '@name':
            componentData.name = entry.match(/^@\w+ (?<value>.*)$/imu).groups.value
            break
          case '@description':
            componentData.description = entry.match(/^@\w+ (?<value>.*)$/imu).groups.value
            break
          case '@version':
            componentData.version = entry.match(/^@\w+ (?<value>.*)$/imu).groups.value
            break
          case '@usage':
            componentData.usage = entry.match(/^@\w+ (?<value>.*)$/imu).groups.value
            break
          case '@note':
            componentData.note = entry.match(/^@\w+ (?<value>.*)$/imu).groups.value
            break
          case '@tag':
            if (!componentData.tags) {
              componentData.tags = []
            }
            componentData.tags.push(entry.match(/^@\w+ (?<value>.*)$/imu).groups.value)
            break
          case '@see':
            if (!componentData.see) {
              componentData.see = []
            }
            componentData.see.push(entry.match(/^@\w+ (?<value>.*)$/imu).groups.value)
            break
          case '@example':
            if (!componentData.examples) {
              componentData.examples = []
            }
            componentData.examples.push(entry.match(/^@\w+ (?<value>.*)$/imu).groups.value)
            break
          case '@property':
            if (!componentData.properties) {
              componentData.properties = []
            }
            componentData.properties.push(entry.match(/^@\w+ (?<value>.*)$/imu).groups.value)
            break
          default:
            console.warn(`File ${file} Line ${entry} could not be parsed into documentation`)
        }
      }

      components[file.replace(this.components, '').replace(/^\//, '')] = componentData
    })
  )

  await fs.writeFile(this.output, JSON.stringify(components), 'utf8')
}