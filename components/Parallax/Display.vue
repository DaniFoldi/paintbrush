<!--!
  @version 0.1.0
  @require atropos
  @icon stack
  @category Visual
-->

<template>
  <atropos @enter="$emit('pb-enter')" @leave="$emit('pb-leave')" @rotate="(x, y) => $emit('pb-rotate', x, y)">
    <slot />
  </atropos>
</template>

<script lang="ts" setup>
  // eslint-disable-next-line import/no-unresolved
  import Atropos from 'atropos/vue'


  interface ParallaxDisplayEmits {
    (e: 'pb-enter'): void
    (e: 'pb-leave'): void
    (e: 'pb-rotate', x: number, y: number): void
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
