<!--!
  @version 1.2.1
  @category Layout
  @icon cards
  @description Visual building block with a separate background color
-->

<template>
  <Container :inline="inline" :padded="padded">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CardProps {
    background?: string // Background color of card
    border?: string // Border color
    inline?: boolean // Display card as inline
    padded?: boolean | string // Internal padding
  }

  const props = withDefaults(defineProps<CardProps>(), {
    background: 'background',
    border: 'none',
    padded: false
  })

  const background = computed(() => useThemeColor(props.background).value)
  const border = computed(() => useThemeColor(props.border).value)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  div.container, span.container {
    background: v-bind(background);
    border: v-bind(border);

    margin-block: var(--double-unit);

    @include mixins.rounded;
    @include mixins.double-unit-padding;
    @include mixins.with-fade;
  }
</style>
