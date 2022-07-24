<!--!
  @version 1.1.0
  @icon sticker
  @category Navigation
  @description Categorise sidebar elements
-->
<template>
  <Text bold uppercase>
    <slot />
  </Text>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface SidebarCategoryProps {
    color?: string // Text color
  }

  const props = withDefaults(defineProps<SidebarCategoryProps>(), {
    color: 'shadowText'
  })

  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  p {
    color: v-bind(color);
  }
</style>
