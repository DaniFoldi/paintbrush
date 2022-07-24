<!--!
  @version 1.1.0
  @category Visual
  @icon square
  @description A basic rectangle shape
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CircleShapeProps {
    height?: string // The height of the rectangle
    width: string // The width of the rectangle
  }

  const props = defineProps<CircleShapeProps>()


  const size = computed(() => useThemeColor(props.height ?? props.width).value)
  const width = computed(() => useThemeColor(props.width).value)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(size);
    width: v-bind(width);
  }
</style>
