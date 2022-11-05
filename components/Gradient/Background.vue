<!--!
  @icon gradient
  @category Display
  @version 0.1.0
  @description Apply a gradient background to child elements
-->

<template>
  <slot />
</template>

<script lang="ts" setup>
  interface GradientBackgroundProps {
    gradient?: string // Gradient applied to background
  }

  withDefaults(defineProps<GradientBackgroundProps>(), {
    gradient: 'linear-gradient(45deg, var(--primary), var(--secondary))'
  })
</script>

<style lang="scss" scoped>
  *:slotted(> *:not(.pb-specific)) {
    background-image: v-bind(gradient);
  }
</style>
