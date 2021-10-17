const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader')
const webpack = require('webpack')
const childProcess = require('child_process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.s(a|c)ss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(woff2?|ttf|eot|svg)?$/, use: 'file-loader' }
    ]
  },
  plugins: [
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
            console.error('Running format failed')
            console.error(e)
          }
        })
      }
    })(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new vueLoaderPlugin.VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
