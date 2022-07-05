<!--!
  @version 1.0.0
  @category Visual
  @icon circle
  @description A basic circle shape
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CircleShapeProps {
    color?: string // The color of the circle
    gradient?: boolean | string // Whether the circle should have a second gradient color
    radius: string // The radius of the circle
  }

  const props = withDefaults(defineProps<CircleShapeProps>(), {
    color: 'primary',
    gradient: false
  })

  const color = useThemeColor(props.color)
  const gradient = computed(() => props.gradient === true ? useThemeColor('secondary') : (props.gradient ? useThemeColor(props.gradient) : color))
</script>

<style lang="scss" scoped>
  div {
    background-image: linear-gradient(45deg, v-bind(color), v-bind('gradient.value'));
    border-radius: 50%;
    height: v-bind(radius);
    width: v-bind(radius);
  }
</style>
