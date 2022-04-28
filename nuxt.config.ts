import { defineNuxtConfig } from 'nuxt'

// #MARK(PB-2)

export default defineNuxtConfig({
  i18n: {
    defaultLocale: 'en',
    langDir: 'lang/',
    lazy: true
  },
  modules: [ './modules/icons', './modules/docs' ]
})
