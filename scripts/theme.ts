export function style(light: string, dark: string) {
  return `@media (prefers-color-scheme: light) {
  :root:not([data-theme=light]):not([data-theme=dark]) {
    ${light}
  }
}

:root[data-theme=light] {
  ${light}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme=light]):not([data-theme=dark]) {
    ${dark}
  }
}

:root[data-theme=dark] {
  ${dark}
}`
}
