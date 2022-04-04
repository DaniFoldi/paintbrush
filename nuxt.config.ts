import { defineNuxtConfig } from 'nuxt3'


export default defineNuxtConfig({
  publicRuntimeConfig: { ENV: process.env.NODE_ENV }
})
