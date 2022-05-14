<!--!
  @version 0.1.0
  @category Misc
-->

<template>
  <div><slot /></div>
</template>

<script lang="ts" setup>
  import { ref, inject, onMounted, onBeforeUnmount, useThemeColor } from '#imports'


  interface FloatProps {
    above: HTMLElement | null
    color?: string
    distance?: number
    radius?: string
    width?: string
  }

  const props = withDefaults(defineProps<FloatProps>(), {
    color: 'primary',
    distance: 4,
    width: 'var(--unit)',
    radius: 'var(--unit)'
  })

  const left = ref('0px')
  const top = ref('0px')
  const width = ref('0px')
  const height = ref('0px')

  const color = useThemeColor(props.color)
  const border = useThemeColor(props.width)
  const radius = useThemeColor(props.radius)

  const container = inject('scrollAnchor', ref<HTMLElement | null>())

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    container.value.$el.addEventListener('scroll', draw, { passive: true })
    draw()
  })

  onBeforeUnmount(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    container.value.$el.removeEventListener('scroll', draw)
  })

  function draw() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    left.value = `${props.above.$el.offsetLeft - container.value.$el.scrollLeft - props.distance}px`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    top.value = `${props.above.$el.offsetTop - container.value.$el.scrollTop - props.distance}px`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    width.value = `${props.above.$el.offsetWidth + 2 * props.distance}px`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    height.value = `${props.above.$el.offsetHeight + 2 * props.distance}px`
  }
</script>

<style lang="scss" scoped>
  div {
    background: transparent;
    border: v-bind(border) solid v-bind(color);
    border-radius: v-bind(radius);
    height: v-bind(height);
    left: v-bind(left);
    pointer-events: none;
    position: absolute;
    top: v-bind(top);
    width: v-bind(width);
  }
</style>
