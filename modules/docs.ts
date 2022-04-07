// TODO get rid of this once useFetch works properly

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'
import { generateComponentDocs } from '../scripts/docs'


export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', async () => {
      const docs = await generateComponentDocs()

      const docsFile = await readFile(fileURLToPath(new URL('../server/api/docs.ts', import.meta.url)), 'utf8')
      const docsServed = docsFile.replace(/ {4}\/\/ MARK-BEGIN.* {4}\/\/ MARK-END/gmus, `    // MARK-BEGIN
    .end('${JSON.stringify(docs).replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}')
    // MARK-END`)
      await writeFile(fileURLToPath(new URL('../server/api/docs.ts', import.meta.url)), docsServed)
    })
  }
})
