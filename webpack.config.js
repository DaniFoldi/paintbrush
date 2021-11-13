const buildColorScheme = require('./build/build_color_scheme')
const formatAndLint = require('./build/format_and_lint')
const generateComponentDocumentation = require('./build/generate_component_documentation')
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
  devServer: {
    hot: true,
    static: {
      publicPath: '/assets/',
      directory: path.join(__dirname, 'assets')
    }
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
    new webpack.WatchIgnorePlugin({ paths: [/.*colors\.scss/] }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new generateComponentDocumentation({ components: 'src/components', output: 'docs/components.json' }),
    new buildColorScheme({ source: 'src/data/scheme.js', target: 'src/scss/colors.scss' }),
    new miniCssExtractPlugin({
      filename: 'style.css'
    }),
    new formatAndLint(),
    new htmlWebpackPlugin({
      template: './docs/index.html'
    }),
    new vueLoaderPlugin.VueLoaderPlugin()
  ]
}
