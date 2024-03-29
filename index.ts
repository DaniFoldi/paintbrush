import { fileURLToPath } from 'node:url'
import { addComponentsDir, addImportsDir, defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'


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
      nuxt: '^3.0.0'
    }
  },
  async setup(moduleOptions) {
    const resolver = createResolver(import.meta.url)

    if (moduleOptions.mountComposables) {
      await addImportsDir(fileURLToPath(new URL('composables', import.meta.url)))
    }
    if (moduleOptions.mountComponents) {
      await addComponentsDir({ path: fileURLToPath(new URL('components', import.meta.url)), prefix: moduleOptions.prefixComponents ? 'Pb' : undefined })
    }
    if (moduleOptions.mountPlugins) {
      addPlugin(resolver.resolve('./plugins/autoanimate.ts'))
    }
  }
})
