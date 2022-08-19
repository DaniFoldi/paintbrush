<!--!
  @version 1.1.0
  @category Visual
  @icon circle
  @description A basic circle shape
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CircleShapeProps {
    radius: string // The radius of the circle
  }

  const props = defineProps<CircleShapeProps>()


  const radius = computed(() => useThemeColor(props.radius).value)
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss';

  div {
    @include common.circular;
    height: v-bind(radius);
    width: v-bind(radius);
  }
</style>
