<!--!
  @version 0.2.0
  @require atropos
  @icon stack
  @category Visual
  @description A container for parallax items
-->

<template>
  <atropos @enter="$emit('pb-enter')" @leave="$emit('pb-leave')" @rotate="(x, y) => $emit('pb-rotate', { x, y })">
    <slot />
  </atropos>
</template>

<script lang="ts" setup>
  // eslint-disable-next-line import/no-named-as-default
  import Atropos from 'atropos/vue'


  interface ParallaxDisplayEmits {
    (e: 'pb-enter'): void // Emitted when the parallax effect is started
    (e: 'pb-leave'): void // Emitted when the parallax effect is stopped
    (e: 'pb-rotate', value: { x: number; y: number }): void // Emitted when the parallax coordinates are changed
  }

  defineEmits<ParallaxDisplayEmits>()
</script>

<style lang="scss" scoped>
  div.atropos {
    width: fit-content;

    &::v-deep(.atropos-scale) {
      pointer-events: none;
    }

    &::v-deep(.atropos-rotate) {
      pointer-events: all;
    }
  }
</style>

<style lang="scss">
  @import 'atropos/scss';
</style>
