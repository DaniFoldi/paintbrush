<!--!
  @icon text-align-justify
  @version 1.2.0
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
    color: 'highlightBackground',
    rounded: true,
    spaced: false
  })

  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';

  hr {

    @include mixins.double-unit-block-margin;
    border-color: v-bind(color);
    border-style: solid;
    transition: border-color .25s ease-in-out;

    &.rounded {
      border-radius: 1px;
    }

    &.spaced {
      @include mixins.unit-inline-margin;
    }
  }
</style>
