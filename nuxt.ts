import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'url'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'paintbrush'
      })
    }
  }
})