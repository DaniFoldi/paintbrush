import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [ '~/build/component-docs.ts' ],
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
