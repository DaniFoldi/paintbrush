<!--!
  @category Basic
  @version 0.1.0
-->

<template>
  <li>
    <p v-if="autoWrap">
      <slot />
    </p>
    <slot v-else />
  </li>
</template>

<script lang="ts" setup>
  interface ListItemProps {
    autoWrap?: boolean
  }

  withDefaults(defineProps<ListItemProps>(), {
    autoWrap: false
  })
</script>
