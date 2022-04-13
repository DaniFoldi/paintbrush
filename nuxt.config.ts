import { defineNuxtConfig } from 'nuxt3'

// TODO remove docs module once useFetch works properly

export default defineNuxtConfig({
  modules: [ './modules/docs' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
