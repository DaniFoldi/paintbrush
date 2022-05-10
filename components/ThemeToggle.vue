<!--!
  @version 0.0.1
  @icon moon
  @category Paintbrush
-->
<template>
  <Text>{{ theme.theme }}</Text>
  <ButtonGroup>
    <Button @click="theme.theme = 'system'">
      System
    </Button>
    <Button @click="theme.theme = 'light'">
      Light
    </Button>
    <Button @click="theme.theme = 'dark'">
      Dark
    </Button>
  </ButtonGroup>
</template>

<script lang="ts" setup>
  import { useTheme } from '../stores/theme'


  const theme = useTheme()
</script>
