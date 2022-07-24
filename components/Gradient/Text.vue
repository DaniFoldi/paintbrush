<template>
  <slot />
</template>

<script lang="ts" setup>
  interface GradientTextProps {
    gradient?: string // Gradient applied to background
  }

  withDefaults(defineProps<GradientTextProps>(), {
    gradient: 'linear-gradient(45deg, var(primary), var(secondary))'
  })
</script>

<style lang="scss" scoped>
  :slotted( > *) {
    background: v-bind(gradient);
    background-clip: text;
    color: transparent;
    font-style: normal;
  }
  </style>
