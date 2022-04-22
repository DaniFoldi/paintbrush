<!--!
  @name ThemeToggle
  @version 0.1.0
-->
<template>
  {{ theme.theme }}
  <Button @click="theme.theme = 'system'">
    System
  </Button>
  <Button @click="theme.theme = 'light'">
    Light
  </Button>
  <Button @click="theme.theme = 'dark'">
    Dark
  </Button>
</template>

<script lang="ts" setup>
  import { useTheme } from '../stores/theme'


  const theme = useTheme()
</script>
