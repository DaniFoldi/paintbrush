<!--!
  @category Basic
  @version 0.1.0
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
