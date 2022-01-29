import { grayscale, hues, scheme } from '../scripts/color'
import { fileURLToPath } from 'url'
import { writeFile } from 'fs/promises'

export default async () => {
  const target = fileURLToPath(new URL('./../assets/colorScheme.sass', import.meta.url))
  const output = `${Object.entries(scheme).map(([name, color]) => `$${ name }: ${ color }`).join('\n')}

$hues: (${hues.map((e: string) => '$' + e).join(', ')})
$grayscale: (${grayscale.map((e: string) => '$' + e).join(', ')})
`
  await writeFile(target, output)
}
