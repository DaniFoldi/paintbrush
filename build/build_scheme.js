const fse = require('fs-extra')
const path = require('path')

module.exports = class {
  constructor({ source, target, overwrite = true }) {
    this.source = source
    this.target = target
    this.overwrite = overwrite
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap('buildColorScheme', async () => {
      const exists = await fse.pathExists(path.join(__dirname, '..', this.target))
      if (exists && !this.overwrite) {
        console.warn(`${this.target} already exists. Skipping build.`)
        return
      }

      const { scheme, hues, grayscale } = require(path.join(__dirname, '..', this.source))
      let output = ''

      for (let color in scheme) {
        output += `$${color}: ${scheme[color]};\n`
      }
      output += '\n'
      output += `$hues: (${hues.map(e => `$${e}`).join(', ')});\n`
      output += `$grayscale: (${grayscale.map(e => `$${e}`).join(', ')});\n`

      await fse.outputFile(path.join(__dirname, '..', this.target), output)
    })
  }
}
