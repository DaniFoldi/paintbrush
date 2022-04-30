import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import { defineNuxtModule } from '@nuxt/kit'
import camelCase from 'camelcase'


export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('components', import.meta.url)),
        prefix: 'pb'
      })
    },
    'autoImports:sources'(sources) {
      const imports = readdirSync(fileURLToPath(new URL('composables', import.meta.url))).map(file => camelCase(`use-${file}`))

      sources.push({
        from: 'paintbrush-ui',
        names: imports,
        imports,
        priority: -1
      })
    }
  }
})
