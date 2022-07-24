<!--!
  @version 1.1.0
  @icon arrows-in-line-vertical
  @description Align a group of buttons
  @category Layout
-->

<template>
  <div class="button-group" :class="{ height, width }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface ButtonGroupProps {
    height?: string // height of buttons
    width?: string // width of buttons
  }

  const props = withDefaults(defineProps<ButtonGroupProps>(), {
    height: '',
    width: ''
  })

  const height = computed(() => useThemeColor(props.height).value)
  const width = computed(() => useThemeColor(props.width).value)
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
