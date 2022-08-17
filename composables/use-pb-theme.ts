import { storeToRefs } from 'pinia'
import { usePreferredColorScheme, createSharedComposable } from '#imports'
import { useTheme } from '../stores/theme'
import type { Ref } from 'vue'


export default createSharedComposable(function(): Ref<'light' | 'dark' | 'system'> {
  const preferredTheme = storeToRefs(useTheme())
  const preferred = usePreferredColorScheme()
  return computed(() => {
    if (preferredTheme.theme.value === 'light') {
      return 'light'
    } else if (preferredTheme.theme.value === 'dark') {
      return 'dark'
    }

    if (preferred.value === 'light') {
      return 'light'
    } else if (preferred.value === 'dark') {
      return 'dark'
    }
    return 'system'
  })
})
