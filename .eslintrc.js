module.exports = {
  env: { 'vue/setup-compiler-macros': true },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  ignorePatterns: [ 'node_modules/' ],
  overrides: [
    {
      env: { node: true },
      files: [ '*.ts', '*.json', '*.js', 'build/*' ]
    }, {
      files: [ '*.ts', '*.tsx' ],
      rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    extraFileExtensions: [ '.vue' ],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [ '@typescript-eslint' ],
  rules: {
    'array-bracket-newline': [ 'warn', { 'multiline': true }],
    'array-bracket-spacing': [ 'warn', 'always', { 'arraysInArrays': false, 'objectsInArrays': false }],
    'arrow-parens': [ 'warn', 'as-needed' ],
    'arrow-spacing': [ 'warn' ],
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [ 'warn', 'never' ],
    'comma-spacing': [ 'warn', { 'after': true, 'before': false  }],
    'consistent-return': 'off',
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2, { 'SwitchCase': 2 }],
    'key-spacing': [ 'warn', { 'afterColon': true, 'beforeColon': false, 'mode': 'strict' }],
    'keyword-spacing': [ 'warn', { 'after': true, 'before': true  }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', { 'exceptAfterSingleLine': true }],
    'max-len': [ 'error', 120 ],
    'no-else-return': 'off',
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 }],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        'ExportDeclaration': { 'minProperties': 3, 'multiline': true },
        'ImportDeclaration': 'never'
      }
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'operator-linebreak': [ 'warn', 'before' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'sort-imports': [ 'warn', { 'ignoreCase': true }],
    'space-in-parens': [ 'warn', 'never' ],
    'space-infix-ops': [ 'warn' ],
    'vue/attributes-order': [ 'warn', { 'alphabetical': true }],
    'vue/max-attributes-per-line': [
      'warn',
      { 'multiline': 1, 'singleline': 3 }
    ],
    'vue/multi-word-component-names': [ 'off' ],
    'vue/order-in-components': [ 'warn' ],
    'vue/sort-keys': [ 'warn' ]
  }
}
