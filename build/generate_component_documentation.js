const fse = require('fs-extra')
const globby = require('globby')

module.exports = class {
  constructor({components, output}) {
    this.components = components
    this.output = output
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap('FormatAndLint', async () => {
      const files = await globby(this.components)
      await Promise.all(files.map(async file => {
        const file = await fse.readFile(file, 'utf8')
        
      }))
    })
  }
}
