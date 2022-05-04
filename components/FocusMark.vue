<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface FocusMarkProps {
    height: string
    left: string
    rounded?: boolean
    top: string
    width: string
  }

  const props = withDefaults(defineProps<FocusMarkProps>(), {
    rounded: false
  })

  const radius = computed(() => props.rounded ? '50%' : '0')
</script>

<style lang="scss" scoped>
  div {
    border-radius: v-bind(radius);
    box-shadow: 0 0 0 100vmax rgba(0,0,0,.3);
    height: v-bind(height);
    left: v-bind(left);
    pointer-events: none;
    position: fixed;
    top: v-bind(top);
    width: v-bind(width);
    z-index: 10;
  }
</style>
