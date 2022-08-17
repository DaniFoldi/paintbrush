import { usePreferredColorScheme, createSharedComposable } from '#imports'
import { useTheme } from '../stores/theme'


export default createSharedComposable(function(): 'light' | 'dark' | 'system' {
  const preferredTheme = useTheme()
  const preferred = usePreferredColorScheme()
  if (preferredTheme.theme === 'light') {
    return 'light'
  } else if (preferredTheme.theme === 'dark') {
    return 'dark'
  }

  if (preferred.value === 'light') {
    return 'light'
  } else if (preferred.value === 'dark') {
    return 'dark'
  }
  return 'system'
})
