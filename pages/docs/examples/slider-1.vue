<template>
  <Slider v-model="rn1" :max="20" :min="10" />
</template>

<script lang="ts" setup>
  import { ref } from '#imports'


  const rn1 = ref<number>(0)
</script>
