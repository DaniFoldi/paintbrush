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
    numbered: boolean
  }

  withDefaults(defineProps<ListContainerProps>(), {
    numbered: false
  })
</script>
