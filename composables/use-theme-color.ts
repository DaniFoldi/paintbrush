/* global process */
import { useTheme } from '../stores/theme'


let _scheme = {} as Record<string, string>
let _light = {} as Record<string, string>
let _dark = {} as Record<string, string>

export default function(color: string): string {
  if (process.client) {
    const preferredTheme = useTheme()
    if (preferredTheme.theme === 'light') {
      return _scheme[_light[color]] || _scheme[color] || color
    } else if (preferredTheme.theme === 'dark') {
      return _scheme[_dark[color]] || _scheme[color] || color
    }

    return (window.matchMedia('(prefers-color-scheme: dark)').matches ? _scheme[_dark[color]] : _scheme[_light[color]]) || _scheme[color] || color
  }
  return _scheme[color] || color
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