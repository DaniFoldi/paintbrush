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
    distance?: number
    padded?: boolean | string
    rounded?: boolean | string
  }

  withDefaults(defineProps<PopupProps>(), {
    distance: 0,
    padded: '4px',
    rounded: '4px'
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
