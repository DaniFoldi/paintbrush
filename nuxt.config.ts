import { defineNuxtConfig } from 'nuxt3'

// TODO remove docs module once useFetch works properly

export default defineNuxtConfig({
  colorMode: {},
  modules: [ './modules/docs', '@nuxtjs/color-mode' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
