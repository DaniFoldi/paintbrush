<!--!
  @category Basic
  @version 0.2.0
  @icon list-numbers
  @description A container for list items
-->

<template>
  <ol v-if="numbered">
    <slot />
  </ol>
  <ul v-else>
    <slot />
  </ul>
</template>

<script lang="ts" setup>
  interface ListContainerProps {
    numbered?: boolean // Whether the list is numbered
  }

  withDefaults(defineProps<ListContainerProps>(), {
    numbered: false
  })
</script>

<style lang="scss" scoped>
  ol, ul {
    padding-inline-start: 20px;
  }
</style>
