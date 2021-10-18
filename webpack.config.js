const childProcess = require('child_process')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const vueLoaderPlugin = require('vue-loader')
const webpack = require('webpack')

module.exports = {
  entry: './docs/main.js',
  resolve: {
    modules: [path.resolve(__dirname, 'src/components'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.s(a|c)ss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: [miniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(woff2?|ttf|eot|svg)?$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new (class {
      apply(compiler) {
        compiler.hooks.beforeCompile.tap('AutoFormat', async () => {
          console.log('Running format')
          try {
            const proc = childProcess.exec('npm run format')
            proc.stdout.on('data', data => console.log(data.replace(/\n$/, '')))
            await proc
          } catch (e) {
            console.error('Running format failed')
            console.error(e)
          }
          console.log('Running lint')
          try {
            const proc = childProcess.exec('npm run lint')
            proc.stdout.on('data', data => console.log(data.replace(/\n$/, '')))
            await proc
          } catch (e) {
            console.error('Running lint failed')
            console.error(e)
          }
        })
      }
    })(),
    new htmlWebpackPlugin({
      template: './docs/index.html'
    }),
    new vueLoaderPlugin.VueLoaderPlugin()
  ]
}
