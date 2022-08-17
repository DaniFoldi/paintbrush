<!--!
  @icon text-align-justify
  @version 1.3.0
  @category Layout
  @description Visually separate blocks of content with a line
-->
<template>
  <hr :class="{ rounded }">
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface SeparatorProps {
    color?: string // Color of the separator
    rounded?: boolean // Round the edges
    spaced?: boolean // Apply spacing on both sides
  }

  const props = withDefaults(defineProps<SeparatorProps>(), {
    color: 'borderColor',
    rounded: true,
    spaced: false
  })

  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';
  @use '~/assets/sizes';

  hr {
    @include sizes.double-unit-margin-block;
    @include mixins.fade('background');

    background: v-bind(color);
    border: none;
    height: 1px;

    &.rounded {
      border-radius: 1px;
    }

    &.spaced {
      @include sizes.unit-margin-inline;
    }
  }
</style>
