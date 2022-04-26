let theme = 'system'

export function useTheme() {
  return {
    theme,
    use(newTheme: string) {
      theme = newTheme
    }
  }
}

/*
import { acceptHMRUpdate, defineStore } from 'pinia'


// eslint-disable-next-line import/exports-last
export const useTheme = defineStore('paintbrush-theme', {
  state: () => ({
    theme: 'system'
  }),
  actions: {
    use(theme: string) {
      this.theme = theme
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}

*/
