import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'


export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('components', import.meta.url)),
        prefix: 'paintbrush'
      })
    }
  }
})