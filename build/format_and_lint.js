const childProcess = require('child_process')

const logFilter = line => {
  return !/^(\.?\w+.?\w+)*\w+.?\w+ \d+ms$/gimu.test(line)
}

module.exports = class {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap('FormatAndLint', async () => {
      console.log('Running format')
      try {
        //const proc = childProcess.exec('npm run format')
        //proc.stdout.on('data', data => logFilter(data) && console.log(data.replace(/\n$/, '')))
        //await proc
      } catch (e) {
        console.error('Running format failed')
        console.error(e)
      }
      console.log('Running lint')
      try {
        const proc = childProcess.exec('npm run lint')
        proc.stdout.on('data', data => logFilter(data) && console.log(data.replace(/\n$/, '')))
        await proc
      } catch (e) {
        console.error('Running lint failed')
        console.error(e)
      }
    })
  }
}
