<!--!
  @icon gradient
  @category Display
  @version 0.2.1
  @description Apply a gradient text color to child elements
-->

<template>
  <slot />
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


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
  @use '#paintbrush/assets/colors.scss' as colors;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  :slotted(:not(.pb-specific)) {
    @include colors.transparent-color;

    background-clip: text;
    background-image: v-bind(gradient);
    display: v-bind(display);
  }
</style>
