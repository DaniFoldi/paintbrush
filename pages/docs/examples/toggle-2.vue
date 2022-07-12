<template>
  <Toggle v-model="rb1" />
  <Text>Toggle value: {{ rb1 }}</Text>
</template>

<script lang="ts" setup>
  import { ref } from '#imports'


  const rb1 = ref<boolean>(false)
</script>
