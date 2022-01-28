import { join } from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: join(__dirname, 'components'),
        prefix: 'paintbrush'
      })
    }
  }
})