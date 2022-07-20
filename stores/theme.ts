import { acceptHMRUpdate, defineStore } from 'pinia'
import { PaintbrushTheme } from '../scripts/types'


// eslint-disable-next-line import/exports-last
export const useTheme = defineStore('paintbrush-theme', {
  actions: {
    set(theme: PaintbrushTheme) {
      this.last = this.theme
      this.theme = theme
    }
  },
  persist: true,
  state: () => ({
    last: '',
    theme: 'system'
  })
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}
