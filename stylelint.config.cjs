module.exports = {
  extends: [ 'stylelint-config-recommended-vue/scss' ],
  ignoreFiles: [ 'node_modules/**' ],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      extends: [ 'stylelint-config-recommended-scss' ],
      files: [ '**/*.scss', '*.scss' ],
      plugins: [ 'stylelint-order', 'stylelint-high-performance-animation', 'stylelint-scss', './lint/stylelint-comment.cjs' ]
    }
  ],
  plugins: [ 'stylelint-order', 'stylelint-high-performance-animation', './lint/stylelint-comment.cjs' ],
  rules: {
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': null,
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [ 'always', { ignoreAtRules: [ 'if', 'else' ] }],
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'upper',
    'custom/no-future-comment': [ true, { disallow: [ 'todo', 'fixme' ], severity: 'warning' }],
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'function-name-case': 'lower',
    'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
    'indentation': 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 2,
    'max-line-length': 120,
    'max-nesting-depth': 5,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'never',
    'order/order': [ 'custom-properties', 'declarations', 'at-rules', 'rules' ],
    'order/properties-alphabetical-order': true,
    'plugin/no-low-performance-animation-properties': [ true, { ignore: 'paint-properties' }],
    'property-no-unknown': true,
    'rule-empty-line-before': [ 'always', { except: [ 'after-single-line-comment' ] }],
    'scss/at-rule-no-unknown': true,
    'scss/at-use-no-unnamespaced': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-first-in-block': [ true, { ignore: [ 'comments', 'imports' ] }],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/no-global-function-names': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'never',
    'selector-combinator-space-before': 'always',
    'selector-id-pattern': '^(__)?[a-zA-Z]+(-[a-zA-Z0-9]+)*$',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep' ] }],
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower'
  }
}
