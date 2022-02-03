module.exports = {
  plugins: [ '@typescript-eslint' ],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: [ '.vue' ],
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: { 'vue/setup-compiler-macros': true },
  ignorePatterns: [ 'node_modules/' ],
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  overrides: [
    {
      files: [ '*.ts', '*.json', '*.js', 'build/*' ],
      env: { node: true }
    }, {
      files: [ '*.ts', '*.tsx' ],
      rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    'array-bracket-newline': [ 'warn', { 'multiline': true }],
    'array-bracket-spacing': [ 'warn', 'always', { 'objectsInArrays': false, 'arraysInArrays': false }],
    'arrow-parens': [ 'warn', 'as-needed' ],
    'arrow-spacing': [ 'warn' ],
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [ 'warn', 'never' ],
    'comma-spacing': [ 'warn', { 'before': false, 'after': true }],
    'consistent-return': 'off',
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2, { 'SwitchCase': 2 }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', { 'exceptAfterSingleLine': true }],
    'key-spacing': [ 'warn', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'keyword-spacing': [ 'warn', { 'before': true, 'after': true }],
    'max-len': [ 'error', 120 ],
    'no-else-return': 'off',
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 }],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        'ImportDeclaration': 'never',
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
      }
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'operator-linebreak': [ 'warn', 'before' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'sort-imports': [ 'warn', { 'ignoreCase': true }],
    'space-in-parens': [ 'warn', 'never' ],
    'space-infix-ops': [ 'warn' ],
    'vue/multi-word-component-names': [ 'off' ],
    'vue/max-attributes-per-line': [
      'warn',
      { 'singleline': 3, 'multiline': 1 }
    ]
  }
}
