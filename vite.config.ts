import { defineConfig } from 'vite'


export default defineConfig({
  test: {
    coverage: {
      all: true,
      excludeNodeModules: true,
      include: [
        'assets/**',
        'components/**',
        'composables/**',
        'content/**',
        'lang/**',
        'modules/**',
        'pages/**',
        'plugins/**',
        'scripts/**',
        'server/**',
        'stores/**'
      ]
    }
  }
})
