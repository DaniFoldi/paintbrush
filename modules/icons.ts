import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'


export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', async () => {
      const iconsData = await readFile(fileURLToPath(new URL('../node_modules/phosphor-icons/src/css/icons.css', import.meta.url)), 'utf8')
      const iconClasses = iconsData.match(/^\.ph-([a-z-]+)::before {$/gm)
      const icons = iconClasses === null
        ? []
        : iconClasses.map(icon => icon.replace(/^\.ph-([a-z-]+)::before {$/gm, '$1'))
          .filter(icon => !icon.includes('-bold'))
          .filter(icon => !icon.includes('-duotone'))
          .filter(icon => !icon.includes('-fill'))
          .filter(icon => !icon.includes('-light'))
          .filter(icon => !icon.includes('-thin'))

      const iconsFile = await readFile(fileURLToPath(new URL('icon-types.ts', import.meta.url)), 'utf8')
      const iconsType = iconsFile.replace(/^\/\/ MARK-BEGIN.*\/\/ MARK-END/gmus, `// MARK-BEGIN
export type IconTypes = ${icons.map(icon => `'${icon}'`).join(' | ')}
// MARK-END`)
      await writeFile(fileURLToPath(new URL('icon-types.ts', import.meta.url)), iconsType)
    })
  }
})
