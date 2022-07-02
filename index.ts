import { fileURLToPath } from 'node:url'
import { addComponentsDir, addAutoImportDir, defineNuxtModule } from '@nuxt/kit'


export default defineNuxtModule({
  defaults: {
    mountComponents: true,
    prefixComponents: true,
    mountComposables: true
  },
  meta: {
    name: 'paintbrush-ui',
    configKey: 'paintbrush',
    compatibility: {
      nuxt: '^3.0.0-rc.1'
    }
  },
  async setup(moduleOptions) {
    if (moduleOptions.mountComposables) {
      await addAutoImportDir(fileURLToPath(new URL('composables', import.meta.url)))
    }
    if (moduleOptions.mountComponents) {
      await (moduleOptions.prefixComponents ? addComponentsDir({ path: fileURLToPath(new URL('components', import.meta.url)), prefix: 'Pb' }) : addComponentsDir({ path: fileURLToPath(new URL('components', import.meta.url)) }))
    }
  }
})
