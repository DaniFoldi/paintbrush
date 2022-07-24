<!--!
  @category Display
  @version 0.1.0
  @icon warning-circle
  @description Create a popup style window
-->

<template>
  <ClientOnly>
    <FocusMark :distance="distance" :rounded="rounded" :target="popup" />
  </ClientOnly>
  <Teleport to="body">
    <Container
      center
      max
      :padded="padded"
      :rounded="rounded"
    >
      <Container ref="popup">
        <slot />
      </Container>
    </Container>
  </Teleport>
</template>

<script lang="ts" setup>
  import { provide, ref } from '#imports'


  interface PopupProps {
    distance?: number // Distance from the target element
    padded?: boolean | string // Padding around the popup
    rounded?: boolean | string // Rounded corners of the popup
  }

  withDefaults(defineProps<PopupProps>(), {
    distance: 0,
    padded: 'unit',
    rounded: 'radius'
  })


  const popup = ref<HTMLElement | null>(null)
  const scrollAnchor = ref<HTMLElement | null>(null)
  provide('scrollAnchor', scrollAnchor)
</script>

<style lang="scss" scoped>
  body > div.container {
    left: 0;
    position: fixed;
    top: 0;
  }
</style>
