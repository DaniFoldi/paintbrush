<!--!
  @version 0.1.0
  @require atropos
  @icon stack-simple
  @category Visual
-->

<template>
  <Container :data-attropos-offet="offset" :data-attropos-opacity="`${initialOpacity};${rotatedOpacity}`">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  interface ParallaxItemProps {
    initialOpacity?: number
    offset?: number
    rotatedOpacity?: number
  }

  withDefaults(defineProps<ParallaxItemProps>(), {
    initialOpacity: 1,
    offset: 0,
    rotatedOpacity: 1
  })
  </script>
