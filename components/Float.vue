<!--!
  @version 0.1.1
  @category Misc
  @icon anchor
  @description Display a floating border around an element
  @note This component should be wrapped with <ClientOnly />
-->

<template>
  <div><slot /></div>
</template>

<script lang="ts" setup>
  import { ref, inject, onMounted, onBeforeUnmount, useThemeColor, computed } from '#imports'


  interface FloatProps {
    above: HTMLElement | null // Ref of element to highlight
    color?: string // Border color
    distance?: number // Distance around element
    radius?: string // Border radius
    width?: string // Border width
  }

  const props = withDefaults(defineProps<FloatProps>(), {
    color: 'primary',
    distance: 4,
    width: 'unit',
    radius: 'unit'
  })

  const left = ref('0px')
  const top = ref('0px')
  const width = ref('0px')
  const height = ref('0px')

  const color = computed(() => useThemeColor(props.color).value)
  const border = computed(() => useThemeColor(props.width).value)
  const radius = computed(() => useThemeColor(props.radius).value)

  const container = inject('scrollAnchor', ref<HTMLElement | null>())

  onMounted(() => {
    if (!container.value) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    container.value.$el.addEventListener('scroll', draw, { passive: true })
    draw()
  })

  onBeforeUnmount(() => {
    if (!container.value) {
      return
    }
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
