<template>
  <details>
    <summary>{{ title }}</summary>
    <slot />
  </details>
</template>

<script lang="ts" setup>
  interface CategoryProps {
    title: string
  }

  defineProps<CategoryProps>()
</script>
