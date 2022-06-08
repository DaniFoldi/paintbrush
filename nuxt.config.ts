import { defineNuxtConfig } from 'nuxt'

// #MARK(PB-2)

export default defineNuxtConfig({
  // #MARK nuxt/framework #4325
  alias: {
    '@vue/devtools-api': '@vue/devtools-api'
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
  modules: [ './modules/icons', './modules/docs', '@pinia/nuxt', '@nuxtjs/i18n' ],
  typescript: {
    shim: false
  },
  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: true
    }
  }
})
