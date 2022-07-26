<!--!
  @version 0.1.0
  @require atropos
  @icon stack-simple
  @category Visual
  @description An item to apply parallax effect to
-->

<template>
  <Container :data-atropos-offet="offset" :data-atropos-opacity="`${initialOpacity};${rotatedOpacity}`">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  interface ParallaxItemProps {
    initialOpacity?: number // opacity of the element when it is not rotated
    offset?: number // depth offset of the element
    rotatedOpacity?: number // opacity of the element when it is rotated
  }

  withDefaults(defineProps<ParallaxItemProps>(), {
    initialOpacity: 1,
    offset: 0,
    rotatedOpacity: 1
  })
</script>
