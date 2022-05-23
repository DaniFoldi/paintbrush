<!--!
  @version 1.0.0
  @category Visual
  @icon square
-->

<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface CircleShapeProps {
    color?: string
    gradient?: boolean | string
    height?: string
    width: string
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
