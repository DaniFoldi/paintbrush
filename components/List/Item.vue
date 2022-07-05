<!--!
  @category Basic
  @version 0.1.1
  @icon number-one
  @description A list item
-->

<template>
  <li>
    <Text v-if="autoWrap">
      <slot />
    </Text>
    <slot v-else />
  </li>
</template>

<script lang="ts" setup>
  interface ListItemProps {
    autoWrap?: boolean // Wrap content in a Text component
  }

  withDefaults(defineProps<ListItemProps>(), {
    autoWrap: true
  })
</script>
