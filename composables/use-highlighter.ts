import type { MaybeRef } from '@vueuse/core'
import type { HighlighterOptions } from 'shiki-es'


export const getHighlighter = useMemoize(async function(options: HighlighterOptions) {
  const { getHighlighter } = await import('shiki-es')
  return await getHighlighter(options)
})

export default async function(code: MaybeRef<string>, lang: string, options: HighlighterOptions) {
  const codeToHtml = ref(() => unref(code))
  if (lang !== 'none') {
    const init = async () => {
      const highlighter = await getHighlighter(options)
      codeToHtml.value = () => highlighter.codeToHtml(unref(code), { lang })
    }
    if (process.server) {
      await init()
    } else {
      init()
    }
  }
  return computed(() => codeToHtml.value())
}
