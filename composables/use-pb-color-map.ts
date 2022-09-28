import { useState } from '#imports'


export function usePbDarkColors() {
  return useState<Record<string, string>>('pb-dark-colors', () => ({}))
}

export function usePbLightColors() {
  return useState<Record<string, string>>('pb-light-colors', () => ({}))
}

export function usePbColorScheme() {
  return useState<Record<string, string>>('pb-color-scheme', () => ({}))
}
