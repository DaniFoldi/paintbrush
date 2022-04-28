import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'


export async function getIconNames(): Promise<string[]> {
  const iconsData = await readFile(fileURLToPath(new URL('../node_modules/phosphor-icons/src/css/icons.css', import.meta.url)), 'utf8')
  const icons = iconsData.match(/^\.ph-([a-z-]+)::before {$/gm)
  return icons === null ? [] : icons.map(icon => icon[0])
}
