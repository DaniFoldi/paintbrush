<!--!
  @version: 0.1.0
  @icon hand-waving
  @category Misc
-->
<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface FocusMarkProps {
    height: string
    left: string
    off?: boolean
    opacity?: number
    rounded?: boolean | string
    top: string
    width: string
  }

  const props = withDefaults(defineProps<FocusMarkProps>(), {
    opacity: 0.35,
    off: false,
    rounded: false
  })

  const radius = computed(() => props.rounded === true ? '50%' : (props.rounded ? props.rounded : '0'))
  const shadow = computed(() => `rgba(0, 0, 0, ${props.opacity})`)
  const position = computed(() => ({
    height: props.off ? `calc(200vmax + ${props.height})` : props.height,
    left: props.off ? `calc(-100vmax + ${props.left})` : props.left,
    top: props.off ? `calc(-100vmax + ${props.top})` : props.top,
    width: props.off ? `calc(200vmax + ${props.width})` : props.width
  }))
</script>

<style lang="scss" scoped>
  div {
    border-radius: v-bind(radius);
    box-shadow: 0 0 0 100vmax v-bind(shadow);
    height: v-bind('position.height');
    left: v-bind('position.left');
    pointer-events: none;
    position: fixed;
    top: v-bind('position.top');
    // stylelint-disable-next-line plugin/no-low-performance-animation-properties -- should only have 1 such element
    transition: top .3s, height .3s, left .3s, width .3s;
    width: v-bind('position.width');
    z-index: 10;
  }
</style>
