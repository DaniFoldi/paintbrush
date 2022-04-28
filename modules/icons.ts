import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'
import { getIconNames } from '../scripts/icons'


export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', async () => {
      const icons = await getIconNames()

      const iconsFile = await readFile(fileURLToPath(new URL('icons.ts', import.meta.url)), 'utf8')
      const iconsType = iconsFile.replace(/^ {4}\/\/ MARK-BEGIN.* {4}\/\/ MARK-END/gmus, `    // MARK-BEGIN
    export type Icon = '${icons.map(icon => `'${icon}'`).join(' | ')}')
    // MARK-END`)
      await writeFile(fileURLToPath(new URL('icons.ts', import.meta.url)), iconsType)
    })
  }
})


// MARK-BEGIN

// MARK-END
