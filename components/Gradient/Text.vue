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
  @use '~/assets/colors';
  @use '~/assets/mixins';
  @use '~/assets/sizes';

  *:slotted( > *:not(.pb-specific)) {
    @include colors.transparent-color;
    background-clip: text;
    background-image: v-bind(gradient);
  }
</style>
