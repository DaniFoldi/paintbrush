<!--!
  @version 0.1.0
  @icon rows
  @category Layout
  @description A row of elements in a table
-->

<template>
  <slot />
  <Separator v-if="separator" :rounded="false" />
</template>

<script lang="ts" setup>
  import { inject } from 'vue'


  const separator = inject('pb-table-use-separator', true)
</script>

<style lang="scss" scoped>
  hr {
    grid-column: 1 / -1;
    justify-self: stretch;
    margin-inline: calc(-1 * var(--double-unit));

    &:last-child {
      display: none;
    }
  }
</style>
