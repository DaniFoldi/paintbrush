import { defineNuxtConfig } from 'nuxt'

// #MARK(PB-2)

export default defineNuxtConfig({
  // #MARK nuxt/framework #4325
  alias: {
    '@vue/devtools-api': '@vue/devtools-api'
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'lang/',
    lazy: true
  },
  modules: [ './modules/icons', './modules/docs', '@pinia/nuxt' ]
})
