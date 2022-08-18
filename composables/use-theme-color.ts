import { computed, usePbTheme } from '#imports'
import type { Ref } from 'vue'


let _scheme = {} as Record<string, string>
let _light = {} as Record<string, string>
let _dark = {} as Record<string, string>

export default function(color: string): Ref<string> {
  const theme = usePbTheme()
  return computed(() => {
    if (color === 'inherit') {
      return color
    }

    if (theme.value === 'light') {
      return useResolvedColor(_scheme, _light, color)
    } else if (theme.value === 'dark') {
      return useResolvedColor(_scheme, _dark, color)
    }
    return useResolvedColor(_scheme, _light, color)
  })
}

export function setThemeColors(
  scheme: Record<string, string>,
  light: Record<string, string>,
  dark: Record<string, string>
) {
  _scheme = scheme
  _light = light
  _dark = dark
}
