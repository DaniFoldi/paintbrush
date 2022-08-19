<!--!
  @category Display
  @version 0.2.0
  @icon warning-circle
  @description Create a popup style window
-->

<template>
  <Teleport to="body">
    <Container
      center
      class="popup"
      max
      :rounded="rounded"
    >
      <OnClickOutside @trigger="emit('pb-click-outside')">
        <Card :padded="padded">
          <slot />
        </Card>
      </OnClickOutside>
    </Container>
  </Teleport>
</template>

<script lang="ts" setup>
  import { OnClickOutside } from '@vueuse/components'


  interface PopupEmits {
    (e: 'pb-click-outside'): void // Detect clicks outside the popup to close it
  }

  interface PopupProps {
    padded?: boolean | string // Padding around the popup
    rounded?: boolean | string // Rounded corners of the popup
  }

  const emit = defineEmits<PopupEmits>()

  withDefaults(defineProps<PopupProps>(), {
    padded: 'unit',
    rounded: 'radius'
  })
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/mixins.scss' as mixins;

  div.popup {
    background: #0000003f;
    left: 0;
    max-height: 100vh;
    max-width: 100vw;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    z-index: 50;
  }
</style>
