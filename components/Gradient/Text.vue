<!--!
  @icon gradient
  @category Display
  @version 0.1.0
  @description Apply a gradient text color to child elements
-->

<template>
  <slot />
</template>

<script lang="ts" setup>
  interface GradientTextProps {
    gradient?: string // Gradient applied to text
  }

  withDefaults(defineProps<GradientTextProps>(), {
    gradient: 'linear-gradient(45deg, var(--primary), var(--secondary))'
  })
</script>

<style lang="scss" scoped>
  *:slotted( > *:not(.pb-specific)) {
    background: v-bind(gradient);
    background-clip: text;
    color: transparent;
    font-style: normal;
  }
  </style>
