import { defineNuxtConfig } from 'nuxt3'

// TODO remove docs module once useFetch works properly

export default defineNuxtConfig({
  i18n: {},
  modules: [ './modules/docs', '@nuxtjs/i18n' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
