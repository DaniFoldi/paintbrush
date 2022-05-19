<!--!
  @version 0.2.2
  @icon hand-waving
  @category Misc
  @description Dim the page except for target element
  @usage
  <FocusMark :target="button" :distance="8" rounded width="4px" />
  <Button ref="button">Click</Button>
  @note This component should be wrapped with <ClientOnly />
-->
<template>
  <div />
</template>

<script lang="ts" setup>
  import { computed, inject, onMounted, onBeforeUnmount, ref, useThemeColor } from '#imports'


  interface FocusMarkProps {
    distance?: number // Distance around element
    off?: boolean // Toggle
    opacity?: number // Shadow opacity
    rounded?: boolean | string // Round borders
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any // Target element
  }

  const props = withDefaults(defineProps<FocusMarkProps>(), {
    distance: 0,
    opacity: 0.35,
    off: false,
    rounded: false
  })

  const container = inject('scrollAnchor', ref<HTMLElement | null>())

  const radius = computed(() => props.rounded === true ? '50%' : (props.rounded ? useThemeColor(props.rounded).value : '0'))
  const shadow = computed(() => `rgba(0, 0, 0, ${props.opacity})`)

  const left = ref('0px')
  const top = ref('0px')
  const width = ref('100vmax')
  const height = ref('100vmax')

  onMounted(() => {
    draw()
    if (!container.value) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    container.value.$el.addEventListener('scroll', draw, { passive: true })
    watch(props, draw)
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
    left.value = props.off ? `calc(-100vmax + ${props.target.$el.offsetLeft - (container.value?.$el?.scrollLeft ?? 0) - props.distance}px)` : `${props.target.$el.offsetLeft - (container.value?.$el?.scrollLeft ?? 0) - props.distance}px`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    top.value = props.off ? `calc(-100vmax + ${props.target.$el.offsetTop - (container.value?.$el?.scrollTop ?? 0) - props.distance}px)` : `${props.target.$el.offsetTop - (container.value?.$el?.scrollTop ?? 0) - props.distance}px`
    width.value = props.off ? `calc(200vmax + ${props.target.$el.offsetWidth + 2 * props.distance}px)` : `${props.target.$el.offsetWidth + 2 * props.distance}px`
    height.value = props.off ? `calc(200vmax + ${props.target.$el.offsetHeight + 2 * props.distance}px)` : `${props.target.$el.offsetHeight + 2 * props.distance}px`
  }
</script>

<style lang="scss" scoped>
  div {
    border-radius: v-bind(radius);
    box-shadow: 0 0 0 100vmax v-bind(shadow);
    height: v-bind(height);
    left: v-bind(left);
    pointer-events: none;
    position: fixed;
    top: v-bind(top);
    // stylelint-disable-next-line plugin/no-low-performance-animation-properties -- should only have 1 such element
    transition: top .3s, height .3s, left .3s, width .3s;
    width: v-bind(width);
    z-index: 10;
  }
</style>
