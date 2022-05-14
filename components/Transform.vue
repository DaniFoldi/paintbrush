<!--!
  @version 0.1.0
  @category Misc
-->

<template>
  <Container>
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  interface TransformProps {
    opacity?: number
    position?: string
    rotate?: string
    scaleX?: number
    scaleY?: number
    translateX?: number
    translateY?: number
    zIndex?: number
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

  const translate = `${props.scaleX ? `scaleX(${props.scaleX})` : ''} ${props.scaleY ? `scaleY(${props.scaleY})` : ''} ${props.translateX ? `translateX(${props.translateX})` : ''} ${props.translateY ? `translateY(${props.translateY})` : ''} ${props.rotate ? `rotate(${props.rotate})` : ''}`
</script>

<style lang="scss" scoped>
  div {
    display: inline-block;
    opacity: v-bind(opacity);
    position: v-bind(position);
    transform: v-bind(translate);
    z-index: v-bind('props.zIndex');
  }
</style>
