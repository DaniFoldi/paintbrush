import { fileURLToPath } from 'node:url'
import { addComponentsDir, addAutoImportDir, defineNuxtModule, addPlugin } from '@nuxt/kit'


export default defineNuxtModule({
  defaults: {
    mountComponents: true,
    prefixComponents: true,
    mountComposables: true,
    mountPlugins: true
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
      await addComponentsDir({ path: fileURLToPath(new URL('components', import.meta.url)), prefix: moduleOptions.prefixComponents ? 'Pb' : undefined }) 
    }
    if (moduleOptions.mountPlugins) {
      await addPlugin(fileURLToPath(new URL('plugins/autoanimate.ts', import.meta.url)))
      await addPlugin(fileURLToPath(new URL('plugins/persistent-store.ts', import.meta.url)))
    }
  }
})
