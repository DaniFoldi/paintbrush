import { computed, useKebabCase, useResolvedColor } from '#imports'


export default function(
  colorScheme: Record<string, string>,
  lightColors: Record<string, string>,
  darkColors: Record<string, string>
) {
  const schemeVariables = computed(() => Object.keys(colorScheme).map(color => `--${useKebabCase(color)}: ${colorScheme[color]};`).join(' '))
  const lightVariables = computed(() => Object.keys(lightColors).map(color => `--${useKebabCase(color)}: ${useResolvedColor(colorScheme, lightColors, color)};`).join(' '))
  const darkVariables = computed(() => Object.keys(darkColors).map(color => `--${useKebabCase(color)}: ${useResolvedColor(colorScheme, darkColors, color)};`).join(' '))
  return computed(() => `
    :root {
      ${schemeVariables.value}
    }
    @media (prefers-color-scheme: light) {
      :root:not([data-theme=light]):not([data-theme=dark]) {
        ${lightVariables.value}
      }
    }
    :root[data-theme=light] {
      ${lightVariables.value}
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme=light]):not([data-theme=dark]) {
        ${darkVariables.value}
      }
    }
    :root[data-theme=dark] { 
      ${darkVariables.value} 
    }
  `.replaceAll('\n', '').replaceAll(' ', ''))
}
