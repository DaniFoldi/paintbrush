const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader')
const onBuildWebpackPlugin = require('on-build-webpack')
const webpack = require('webpack')
const childProcess = require('child_process')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      //{ test: /\.css$/, use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(scss|sass)$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new vueLoaderPlugin.VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new (class {
      apply(compiler) {
        compiler.hooks.compilation.tap('AutoFormat', () => {
          childProcess.exec('npm run format')
        })
      }
    })()
  ]
}
