import { defineNuxtConfig } from 'nuxt3'

// TODO remove docs module once useFetch works properly

export default defineNuxtConfig({
  i18n: {
    defaultLocale: 'en',
    langDir: 'lang/',
    lazy: true
  },
  modules: [ './modules/docs' ]
})
