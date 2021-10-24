const fse = require('fs-extra')
const glob = require('glob')
const path = require('path')
const util = require('util')

module.exports = class {
  constructor({ components, output }) {
    this.components = components
    this.output = output
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap('GenDocumentation', async () => {
      const files = await util.promisify(glob)(`${this.components}/**/*.vue`)

      await Promise.all(
        files.map(async file => {
          try {
            await fse.ensureFile(path.join(__dirname, '..', file))
          } catch (e) {
            return
          }

          const buffer = await fse.readFile(file, 'utf8')
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
                console.warn(`File ${path} Line ${entry} could not be parsed into documentation`)
            }
          }

          if (Object.keys(componentData).length > 0) console.log(componentData)
        })
      )
    })
  }
}
