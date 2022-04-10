<!--!
@name ThemeToggle
@version 1.0.0
-->
<template>
  <IconButton :icon="theme.includes('dark') ? 'moon' : 'sun'" @click="$emit('toggle'); toggle()">
    Switch
  </IconButton>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'


  defineEmits([ 'toggle' ])

  // TODO implement this properly
  const theme = ref('dark')

  function toggle() {
    theme.value = theme.value.split('dark').map((x: string) => x.replaceAll('light', 'dark')).join('light')
    console.log(theme)
  }
</script>
