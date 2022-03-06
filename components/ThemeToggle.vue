<!--!
@name ThemeToggle
@version 1.0.0
-->
<template>
  <IconButton :icon="icon" @click="$emit('toggle'); toggle()">
    Switch
  </IconButton>
</template>

<script lang="ts" setup>
import { inject } from 'vue'


defineEmits([ 'toggle' ])

let theme = inject('theme', 'dark')
let icon = 'sun'

function toggle() {
  theme = theme.split('dark').map((x: string) => x.replaceAll('light', 'dark')).join('light')
  console.log(theme)
  icon = theme.includes('dark') ? 'moon' : 'sun'
}
</script>
