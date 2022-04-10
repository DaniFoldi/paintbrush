const rulesDir = require('eslint-plugin-rulesdir')


rulesDir.RULES_DIR = './lint/'

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
  ignorePatterns: [ 'package-lock.json', 'coverage/', 'node_modules/', 'public/', '.nuxt/', '.output/' ],
  overrides: [
    {
      env: { node: true },
      files: [ '*.ts', '*.js', 'build/*' ]
    },
    {
      files: [ '*.json' ],
      rules: {
        'quotes': [ 'error', 'double' ],
        'vue/sort-keys': 'off'
      }
    },
    {
      files: [ '**lint**' ],
      rules: {
        'quote-props': [ 'error', 'consistent-as-needed' ]
      }
    },
    {
      env: { node: true },
      files: [ '*.cjs' ],
      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: [ 'components/*.vue', 'components/**/*.vue' ],
      rules: {
        'unicorn/filename-case': [ 'warn', { cases: { pascalCase: true } }]
      }
    },
    {
      files: [ 'components/*.vue', 'components/**/*.vue', 'pages/**.vue', 'pages/**/*.vue' ],
      globals: {
        definePageMeta: 'readonly',
        localePath: 'readonly',
        switchLocalePath: 'readonly',
        useFetch: 'readonly',
        useLazyFetch: 'readonly',
        useNuxtApp: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useState: 'readonly',
        watch: 'readonly'
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
  plugins: [ '@typescript-eslint', 'rulesdir' ],
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        multiline: { delimiter: 'none', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false }
      }
    ],
    '@typescript-eslint/no-unused-vars': [ 'warn' ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/type-annotation-spacing': [
      'warn', {
        after: true, before: true,
        overrides: { colon: { after: true, before: false } }
      }
    ],
    'array-bracket-newline': [ 'warn', { multiline: true }],
    'array-bracket-spacing': [ 'warn', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'arrow-parens': [ 'warn', 'as-needed' ],
    'arrow-spacing': 'warn',
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [ 'warn', 'never' ],
    'comma-spacing': [ 'warn', { after: true, before: false  }],
    'consistent-return': 'off',
    'dot-notation': [ 'error', { allowKeywords: true }],
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/first': [ 'error', 'absolute-first' ],
    'import/newline-after-import': [ 'error', { count: 2 }],
    'import/no-absolute-path': [ 'error', { amd: false, commonjs: true, esmodule: true }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': [ 'error', { ignore: [ '#app', '#assets', '#build', '#config', '#imports', '#storage' ] }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [ 'error', {   groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type' ] }],
    'indent': [ 'error', 2, { SwitchCase: 1 }],
    'key-spacing': [ 'warn', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'keyword-spacing': [ 'warn', { after: true, before: true  }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true }],
    'max-len': [
      'error', {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'warn',
    'no-empty': [ 'error', { allowEmptyCatch: true }],
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
    'no-irregular-whitespace': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 0 }],
    'no-prototype-builtins': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': [ 'error', { typeof: true }],
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': 'off',
    'no-useless-backreference': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-warning-comments': [ 'warn', { location: 'anywhere', terms: [ 'todo', 'fixme' ] }],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { minProperties: 3, multiline: true },
        ImportDeclaration: 'never'
      }
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'operator-linebreak': [ 'warn', 'before' ],
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': [ 'error', 'single' ],
    'rulesdir/vue-eslint-comment': [ 'warn', { disallow: [ 'todo', 'fixme' ] }],
    'semi': [ 'error', 'never' ],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'space-before-function-paren': [ 'error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
    'space-in-parens': [ 'warn', 'never' ],
    'space-infix-ops': 'warn',
    'unicorn/no-null': 'off',
    'unicorn/numeric-separators-style': [ 'warn', { onlyIfContainsSeparator: true }],
    'unicorn/prevent-abbreviations': 'off',
    'valid-typeof': [ 'error', { requireStringLiterals: true }],
    'vue/attributes-order': [ 'warn', { alphabetical: true }],
    'vue/max-attributes-per-line': [ 'warn', { multiline: 1, singleline: 3 }],
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'warn',
    'vue/sort-keys': [ 'warn', 'asc', { caseSensitive: true, natural: true }]
  }
}
