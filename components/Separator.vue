<!--!
  @name Separator
  @icon arrows-horizontal
  @version 1.0.0
-->
<template>
  <hr>
</template>

<script lang="ts" setup>
  interface SeparatorProps {
    spaced?: boolean
  }

  withDefaults(defineProps<SeparatorProps>(), {
    spaced: false
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  hr {
    border-color: var(--background-2);
    border-radius: 1px;
    @include mixins.double-unit-block-margin;

    &.spaced {
      @include mixins.unit-inline-margin;
    }
  }
</style>
