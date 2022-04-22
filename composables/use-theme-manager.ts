export default function(lightMode: string, darkMode: string) {
  return `@media (prefers-color-scheme: light) {
  :root:not([data-theme=light]):not([data-theme=dark]) {
    ${lightMode}
  }
}

:root[data-theme=light] {
  ${lightMode}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme=light]):not([data-theme=dark]) {
    ${darkMode}
  }
}

:root[data-theme=dark] {
  ${darkMode}
}`
}
