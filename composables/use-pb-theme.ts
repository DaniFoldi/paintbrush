import { usePreferredColorScheme, createSharedComposable } from '#imports'
import { useTheme } from '../stores/theme'


export default createSharedComposable(function(): 'light' | 'dark' | 'system' {
  const preferredTheme = useTheme()
  if (preferredTheme.theme === 'light') {
    return 'light'
  } else if (preferredTheme.theme === 'dark') {
    return 'dark'
  }

  /* global process */
  if (process.client) {
    const preferred = usePreferredColorScheme()
    if (preferred.value === 'light') {
      return 'light'
    } else if (preferred.value === 'dark') {
      return 'dark'
    }
  }

  return 'system'
})
