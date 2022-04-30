<!--!
  @name ThemeToggle
  @version 0.0.1
  @icon moon
-->
<template>
  <Text>{{ theme.theme }}</Text>
  <ButtonGroup>
    <Button @click="theme.use('system')">
      System
    </Button>
    <Button @click="theme.use('light')">
      Light
    </Button>
    <Button @click="theme.use('dark')">
      Dark
    </Button>
  </ButtonGroup>
</template>

<script lang="ts" setup>
  import { useTheme } from '../stores/theme'


  const theme = useTheme()
</script>
