const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader')
const webpack = require('webpack')
const childProcess = require('child_process')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.s(a|c)ss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.(woff2?|ttf|eot|svg)?$/, use: 'file-loader' }
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
        compiler.hooks.beforeCompile.tap('AutoFormat', () => {
          childProcess.execSync('npm run format')
          childProcess.execSync('npm run lint')
        })
      }
    })()
  ]
}
