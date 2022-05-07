// TODO remove global
/* global process */
import { computed } from 'vue'
import { useTheme } from '../stores/theme'
import type { Ref } from 'vue'


let _scheme = {} as Record<string, string>
let _light = {} as Record<string, string>
let _dark = {} as Record<string, string>

export default function(color: string): Ref<string> {
  return computed(() => {
    if (color === 'inherit') {
      return color
    }
    const preferredTheme = useTheme()
    if (preferredTheme.theme === 'light') {
      return _scheme[_light[color]] || _scheme[color] || color
    } else if (preferredTheme.theme === 'dark') {
      return _scheme[_dark[color]] || _scheme[color] || color
    }

    if (process.client) {
      return (window.matchMedia('(prefers-color-scheme: dark)').matches ? _scheme[_dark[color]] : _scheme[_light[color]]) || _scheme[color] || color
    }
    return _scheme[color] || color
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
