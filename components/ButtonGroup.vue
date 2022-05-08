<!--!
  @version 1.1.0
  @icon arrows-in-line-vertical
  @category Layout
-->

<template>
  <div class="button-group" :class="{ height, width }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface ButtonGroupProps {
    height?: string
    width?: string
  }

  withDefaults(defineProps<ButtonGroupProps>(), {
    height: '',
    width: ''
  })
  </script>

<style lang="scss" scoped>
  div.button-group {
    display: inline-grid;
    gap: var(--double-unit);
    grid-auto-flow: column;

    &.width {
      grid-auto-columns: v-bind(width);

      &::v-deep(> *) {
        min-width: unset;
      }
    }

    &:not(.width) {
      grid-auto-columns: auto;
    }

    &.height {
      grid-auto-rows: v-bind(height);
    }
  }
</style>
