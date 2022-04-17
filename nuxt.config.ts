import { defineNuxtConfig } from 'nuxt3'

// TODO remove docs module once useFetch works properly

export default defineNuxtConfig({
  i18n: {
    'lazy': true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },
  modules: [ './modules/docs' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
