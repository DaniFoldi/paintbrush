import { acceptHMRUpdate, defineStore } from 'pinia'


// eslint-disable-next-line import/exports-last
export const useTheme = defineStore('paintbrush-theme', {
  state: () => ({
    theme: 'system'
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}
