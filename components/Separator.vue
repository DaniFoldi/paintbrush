<!--!
  @icon text-align-justify
  @version 1.1.0
  @category Layout
  @description Visually separate blocks of content with a line
  @usage <Separator />
-->
<template>
  <hr :class="{ rounded }">
</template>

<script lang="ts" setup>
  interface SeparatorProps {
    rounded?: boolean // Round the edges
    spaced?: boolean // Apply spacing on both sides
  }

  withDefaults(defineProps<SeparatorProps>(), {
    rounded: true,
    spaced: false
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  hr {
    border-color: var(--background-highlight);
    border-style: solid;
    transition: border-color .25s ease-in-out;

    @include mixins.double-unit-block-margin;

    &.rounded {
      border-radius: 1px;
    }

    &.spaced {
      @include mixins.unit-inline-margin;
    }
  }
</style>
