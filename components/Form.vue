<!--!
  @version 1.0.0
  @icon cursor-text
-->

<template>
  <form @submit.prevent="$emit('pb-submit', $event.target as HTMLFormElement)">
    <slot />
  </form>
</template>

<script lang="ts" setup>
  interface FormEmits {
    (e: 'pb-submit', target: HTMLFormElement): void // Form is submitted
  }
  defineEmits<FormEmits>()
</script>

<style lang="scss" scoped>
  form > :not(:first-child) {
    margin-top: var(--unit);
  }

  form > :not(:last-child) {
    margin-bottom: var(--unit);
  }
</style>
