
// eslint-disable-next-line import/no-unresolved
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { defineNuxtPlugin } from '#app'


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(autoAnimatePlugin)
})
