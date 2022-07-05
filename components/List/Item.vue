<!--!
  @category Basic
  @version 0.1.0
  @icon number-one
  @description A list item
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
    autoWrap?: boolean // Wrap content in a Text component
  }

  withDefaults(defineProps<ListItemProps>(), {
    autoWrap: false
  })
</script>
