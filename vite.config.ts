import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'


export default defineConfig({
  plugins: [
    visualizer({
      template: 'sunburst'
    })
  ],
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
