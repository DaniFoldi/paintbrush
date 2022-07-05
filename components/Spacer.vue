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
  interface SpacerProps {
    height?: string // Height of the spacer
    width?: string // Width of the spacer
  }

  withDefaults(defineProps<SpacerProps>(), {
    height: '24px',
    width: '24px'
  })
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    width: v-bind(width);
  }
</style>
