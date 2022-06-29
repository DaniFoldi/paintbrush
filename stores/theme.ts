import { acceptHMRUpdate, defineStore } from 'pinia'


// eslint-disable-next-line import/exports-last
export const useTheme = defineStore('paintbrush-theme', {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  persist: true,
  state: () => ({
    last: '',
    theme: 'system'
  })
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}
