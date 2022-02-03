import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [ '~/build/componentDocs.ts' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
