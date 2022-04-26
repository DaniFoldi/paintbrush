<!--!
  @name ThemeToggle
  @version 0.1.0
-->
<template>
  {{ theme.theme }}
  <Button @click="theme.use('system')">
    System
  </Button>
  <Button @click="theme.use('light')">
    Light
  </Button>
  <Button @click="theme.use('dark')">
    Dark
  </Button>
</template>

<script lang="ts" setup>
  import { useTheme } from '../stores/theme'


  const theme = useTheme()
</script>
