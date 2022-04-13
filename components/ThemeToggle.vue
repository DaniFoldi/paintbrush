<!--!
  @name ThemeToggle
  @version 1.0.0
-->
<template>
  {{ theme }}
  <PrimaryButton @click="theme = 'system'">
    System
  </PrimaryButton>
  <PrimaryButton @click="theme = 'light'">
    Light
  </PrimaryButton>
  <PrimaryButton @click="theme = 'dark'">
    Dark
  </PrimaryButton>
</template>

<script lang="ts" setup>
// TODO implement this properly
  const theme = useTheme()
</script>
