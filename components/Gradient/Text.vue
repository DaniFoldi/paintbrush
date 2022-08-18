<!--!
  @icon gradient
  @category Display
  @version 0.2.0
  @description Apply a gradient text color to child elements
-->

<template>
  <slot />
</template>

<script lang="ts" setup>
  interface GradientTextProps {
    gradient?: string // Gradient applied to text
    inlineBlock?: boolean // Apply display: inline-block
  }

  const props = withDefaults(defineProps<GradientTextProps>(), {
    gradient: 'linear-gradient(45deg, var(--primary), var(--secondary))',
    inlineBlock: false
  })

  const display = computed(() => props.inlineBlock ? 'inline-block' : 'initial')
</script>

<style lang="scss" scoped>
  @use '~/assets/colors';
  @use '~/assets/mixins';
  @use '~/assets/sizes';

  :slotted(:not(.pb-specific)) {
    @include colors.transparent-color;
    background-clip: text;
    background-image: v-bind(gradient);
    display: v-bind(display);
  }
</style>
