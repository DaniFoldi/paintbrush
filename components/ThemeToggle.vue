<!--!
  @name ThemeToggle
  @version 1.0.0
-->
<template>
  {{ theme }}
  <Button @click="theme = 'system'">
    System
  </Button>
  <Button @click="theme = 'light'">
    Light
  </Button>
  <Button @click="theme = 'dark'">
    Dark
  </Button>
</template>

<script lang="ts" setup>
  const theme = useTheme()
</script>
