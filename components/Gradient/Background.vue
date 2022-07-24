<template>
  <slot />
</template>

<script lang="ts" setup>
  interface GradientBackgroundProps {
    gradient?: string // Gradient applied to background
  }

  withDefaults(defineProps<GradientBackgroundProps>(), {
    gradient: 'linear-gradient(45deg, var(primary), var(secondary))'
  })
</script>

<style lang="scss" scoped>
  :slotted( > *) {
    background-image: v-bind(gradient);
  }
</style>
