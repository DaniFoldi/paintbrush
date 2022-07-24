<!--!
  @version 1.0.0
  @category Display
  @description An invisible spacer between elements
  @icon arrows-out-line-vertical
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface SpacerProps {
    height?: string // Height of the spacer
    width?: string // Width of the spacer
  }

  const props = withDefaults(defineProps<SpacerProps>(), {
    height: '24px',
    width: '24px'
  })

  const height = computed(() => useThemeColor(props.height).value)
  const width = computed(() => useThemeColor(props.width).value)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    width: v-bind(width);
  }
</style>
