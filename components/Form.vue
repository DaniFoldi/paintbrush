<template>
  <form @submit.prevent="$emit('pb-submit', $event.target as HTMLFormElement)">
    <slot />
  </form>
</template>

<script lang="ts" setup>
  interface FormEmits {
    (e: 'pb-submit', target: HTMLFormElement): void
  }
  defineEmits<FormEmits>()
</script>
