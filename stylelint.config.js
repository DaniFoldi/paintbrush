module.exports = {
  'customSyntax': 'postcss-html',
  'extends': 'stylelint-config-recommended-scss',
  'plugins': [ 'stylelint-scss' ],
  'rules': {
    'at-rule-no-unknown': null,
    'color-hex-case': 'upper',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'function-name-case': 'lower',
    'indentation': 2,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'max-nesting-depth': 4,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'rule-empty-line-before': 'always',
    'scss/at-rule-no-unknown': true,
    'scss/at-rule-no-unnamespaced': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-first-in-block': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/no-global-function-names': true,
    'selector-attribute-quotes': 'never',
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: [ 'v-deep' ] }
    ],
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'value-keyword-case': 'lower'
  }
}
