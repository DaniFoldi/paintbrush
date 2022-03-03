<template>
  <IconButton :icon="icon" @click="$emit('toggle'); toggle()">
    Switch
  </IconButton>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

defineEmits([ 'toggle' ])

interface Paintbrush {
  getTheme: () => string
  updateTheme: (theme: string) => void
}

let _theme = 'light'
const paintbrush: Paintbrush = inject('paintbrush', { getTheme() {
  return _theme
}, updateTheme(theme: string) {
  _theme = theme
} })

let icon = 'sun'

function toggle() {
  const newTheme =  paintbrush.getTheme().split('dark').map((x: string) => x.replaceAll('light', 'dark')).join('light')
  paintbrush.updateTheme(newTheme)
  icon = newTheme.includes('dark') ? 'moon' : 'sun'
}
</script>
