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
defineEmits([ 'toggle' ])

const theme = useTheme()

function toggle() {
  theme.value = theme.value.split('dark').map((x: string) => x.replaceAll('light', 'dark')).join('light')
  console.log(theme)
}
</script>
