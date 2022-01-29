module.exports = {
  'plugins': [
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] }
    ]
  },
  'extends': 'stylelint-config-recommended-scss',
  'customSyntax': 'postcss-html'
}
