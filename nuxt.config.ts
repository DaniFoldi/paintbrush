import { defineNuxtConfig } from 'nuxt'


export default defineNuxtConfig({
  // #MARK nuxt/framework #4325
  alias: {
    '@vue/devtools-api': '@vue/devtools-api'
  },
  components: {
    dirs: [ '~/components' ],
    global: true
  },
  content: {
    highlight: false,
    markdown: {
      tags: {
        /* eslint-disable sort-keys */
        'p': 'content-text-p',
        'a': 'autolink',
        'blockquote': 'highlight',
        'code-inline': 'inline-code',
        'code': 'multiline-code',
        'em': 'content-text-em',
        'h1': 'content-text-h1',
        'h2': 'content-text-h2',
        'h3': 'content-text-h3',
        'h4': 'content-text-h4',
        'h5': 'content-text-h5',
        'h6': 'content-text-h6',
        'hr': 'separator',
        'img': 'image',
        'ul': 'content-list-container-ul',
        'ol': 'content-list-container-ol',
        'li': 'content-list-item-li',
        'strong': 'content-text-strong',
        'table': 'prose-table',
        'thead': 'prose-thead',
        'tbody': 'prose-tbody',
        'td': 'prose-td',
        'th': 'prose-th',
        'tr': 'prose-tr'
        /* eslint-enable sort-keys */
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: false, // Set this to false, otherwise the whole i18n thing falls apart
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
  // #MARK(PB-2)
  modules: [ './modules/icons', './modules/docs', /* '@nuxtjs/i18n-edge',*/ '@pinia/nuxt', '@nuxt/content', '@vueuse/nuxt', 'nuxt-lodash' ],
  nitro: {
    entry: '../entry.ts',
    preset: 'cloudflare',
    rollupConfig: {
      output: {
        format: 'esm'
      }
    }
  },
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
    }
  }
})
