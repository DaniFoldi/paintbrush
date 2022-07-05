<!--!
  @version 1.0.0
  @category Visual
  @icon square
  @description A basic rectangle shape
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CircleShapeProps {
    color?: string // The color of the rectangle
    gradient?: boolean | string // Whether the rectangle should have a second gradient color
    height?: string // The height of the rectangle
    width: string // The width of the rectangle
  }

  const props = withDefaults(defineProps<CircleShapeProps>(), {
    color: 'primary',
    height: '',
    gradient: false
  })

  const color = useThemeColor(props.color)
  const gradient = computed(() => props.gradient === true ? useThemeColor('secondary') : (props.gradient ? useThemeColor(props.gradient) : color))

  const size = computed(() => props.height ? props.height : props.width)
</script>

<style lang="scss" scoped>
  div {
    background-image: linear-gradient(45deg, v-bind(color), v-bind('gradient.value'));
    height: v-bind(size);
    width: v-bind(width);
  }
</style>
