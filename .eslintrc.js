module.exports = {
  env: { 'vue/setup-compiler-macros': true },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended'
  ],
  ignorePatterns: [ 'node_modules/' ],
  overrides: [
    {
      env: { node: true },
      files: [ '*.ts', '*.json', '*.js', 'build/*' ]
    },
    {
      files: ['components/**.vue'],
      rules: {
        'unicorn/filename-case': ['warn', 'pascalCase'],
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
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        'multiline': { 'delimiter': 'none', 'requireLast': true },
        'singleline': { 'delimiter': 'semi', 'requireLast': false }
      }
    ],
    '@typescript-eslint/no-unused-vars': [ 'warn' ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/type-annotation-spacing': [
      'warn', {
        'after': true, 'before': true,
        'overrides': { 'colon': { 'after': true, 'before': false } }
      }
    ],
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
    'eqeqeq': ['error', 'always'],
    'unicorn/prevent-abbreviations': 'off',
    'func-call-spacing': [ 'error', 'never' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2, { 'SwitchCase': 1 }],
    'key-spacing': [ 'warn', { 'afterColon': true, 'beforeColon': false, 'mode': 'strict' }],
    'keyword-spacing': [ 'warn', { 'after': true, 'before': true  }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', { 'exceptAfterSingleLine': true }],
    'max-len': [ 'error', 120 ],
    'no-lonely-if': 'warn',
    'dot-notation': [ 'error', { 'allowKeywords': true }],
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': [ 'error', { 'allowEmptyCatch': true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [ 'error', 'functions' ],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-tabs': 'error',
    'valid-typeof': [ 'error', { 'requireStringLiterals': true }],
    'no-irregular-whitespace': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [ 'error', { 'esmodule': true, 'commonjs': true, 'amd': false }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-var': 'error',
    'no-else-return': 'warn',
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 }],
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
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
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'sort-imports': [ 'warn', { 'ignoreCase': true }],
    'sort-keys': [ 'warn' ],
    'space-before-function-paren': [ 'error', { 'anonymous': 'never', 'asyncArrow': 'always', 'named': 'never' }],
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
