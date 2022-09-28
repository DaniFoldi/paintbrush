<!--!
  @version 2.1.0
  @category Layout
  @icon cards
  @description Visual building block with a separate background color
-->

<template>
  <Container class="card" :inline="inline" :padded="padded">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CardProps {
    background?: string // Background color of card
    inline?: boolean // Display card as inline
    padded?: boolean | string // Internal padding
  }

  const props = withDefaults(defineProps<CardProps>(), {
    background: 'background',
    padded: false
  })

  const background = computed(() => useThemeColor(props.background).value)
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/colors.scss' as colors;
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  .container {
    @include common.rounded;
    @include sizes.double-unit-padding;
    @include sizes.double-unit-margin-block;
    @include mixins.fade('background', 'color', 'border-color');
    @include common.border;
    @include common.shadow;

    background: v-bind(background);
  }
</style>
