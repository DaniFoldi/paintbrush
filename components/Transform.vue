<!--!
  @version 0.1.0
  @category Misc
  @icon arrows-clockwise
  @description Transform any component/html element.
-->

<template>
  <Container>
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface TransformProps {
    opacity?: number // opacity of the element
    position?: string // position of the element
    rotate?: string // rotate the element
    scaleX?: number // scale the element horizontally
    scaleY?: number // scale the element vertically
    translateX?: number // translate the element horizontally
    translateY?: number // translate the element vertically
    zIndex?: number // z-index of the element
  }

  const props = withDefaults(defineProps<TransformProps>(), {
    opacity: 1,
    position: 'static',
    rotate: '0',
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    zIndex: 0
  })

  const transform = computed(() => `${props.scaleX ? `scaleX(${props.scaleX})` : ''} ${props.scaleY ? `scaleY(${props.scaleY})` : ''} ${props.translateX ? `translateX(${props.translateX})` : ''} ${props.translateY ? `translateY(${props.translateY})` : ''} ${props.rotate ? `rotate(${props.rotate})` : ''}`)
</script>

<style lang="scss" scoped>
  div {
    display: inline-block;
    opacity: v-bind(opacity);
    position: v-bind(position);
    transform: v-bind(transform);
    z-index: v-bind('zIndex');
  }
</style>
