<!--!
  @icon aspect-ratio
  @category Display
  @version 1.0.0
  @description Maintain a fixed aspect ratio for a container
-->

<template>
  <div class="fixed-aspect-ratio">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface AspectRatioProps {
    aspectRatio: number // Aspect ratio to maintain
    maxWidth?: string // Optional maximum width of container
  }

  const props = defineProps<AspectRatioProps>()

  const width = computed(() => props.maxWidth ? `min(${props.maxWidth}, 100%)` : '100%')
</script>

<style lang="scss" scoped>
  .fixed-aspect-ratio {
    padding-bottom: calc(100% / v-bind('aspectRatio'));
    position: relative;
    width: v-bind(width);
  }
</style>
