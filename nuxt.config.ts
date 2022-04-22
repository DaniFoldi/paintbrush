import { defineNuxtConfig } from 'nuxt3'

// #MARK(PB-2)

export default defineNuxtConfig({
  i18n: {
    defaultLocale: 'en',
    langDir: 'lang/',
    lazy: true
  },
  modules: [ './modules/docs', '@pinia/nuxt' ]
})
