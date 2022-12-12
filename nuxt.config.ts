export default defineNuxtConfig({
  alias: {
    '#fonts': '.',
    '#paintbrush': '.'
  },
  components: {
    dirs: [{ global: true, path: './components' }]
  },
  content: {
    highlight: false,
    markdown: {
      tags: {
        'a': 'content-auto-link-a',
        'blockquote': 'highlight',
        'code': 'multiline-code',
        'code-inline': 'inline-code',
        'em': 'content-text-em',
        'h1': 'content-text-h1',
        'h2': 'content-text-h2',
        'h3': 'content-text-h3',
        'h4': 'content-text-h4',
        'h5': 'content-text-h5',
        'h6': 'content-text-h6',
        'hr': 'separator',
        'img': 'image',
        'li': 'content-list-item-li',
        'ol': 'content-list-container-ol',
        'p': 'content-text-p',
        'strong': 'content-text-strong',
        'table': 'prose-table',
        'tbody': 'prose-tbody',
        'td': 'prose-td',
        'th': 'prose-th',
        'thead': 'prose-thead',
        'tr': 'prose-tr',
        'ul': 'content-list-container-ul'
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    langDir: 'lang/',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en-US.json'
      },
      {
        code: 'hu',
        file: 'hu-HU.json'
      }
    ]
  },
  modules: [ './modules/icons', './modules/docs', '@nuxtjs/i18n-edge', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/content', '@vueuse/nuxt', 'nuxt-lodash' ],
  ssr: true,
  typescript: {
    shim: false
  },
  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: true,
      __VUE_PROD_DEVTOOLS__: true
    },
    build: {
      chunkSizeWarningLimit: 1024
    }
  }
})
