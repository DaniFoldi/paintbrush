module.exports = {
  trailingComma: 'none',
  quoteProps: 'as-needed',
  semi: false,
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'avoid',
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  vueIndentScriptAndStyle: true
}
