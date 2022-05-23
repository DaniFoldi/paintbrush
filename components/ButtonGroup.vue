<!--!
  @version 1.1.0
  @icon arrows-in-line-vertical
  @description Align a group of buttons
  @category Layout
  @usage
  <ButtonGroup width="50px">
  __<Button>click</Button>
  __<Button>some</Button>
  __<Button>buttons</Button>
  </ButtonGroup>
-->

<template>
  <div class="button-group" :class="{ height, width }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface ButtonGroupProps {
    height?: string // height of buttons
    width?: string // width of buttons
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
