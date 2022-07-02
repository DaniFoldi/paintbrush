<!--!
  @category Basic
  @version 0.1.0
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
    numbered?: boolean
  }

  withDefaults(defineProps<ListContainerProps>(), {
    numbered: false
  })
</script>
