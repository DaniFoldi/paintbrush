<!--!
  @category Display
  @icon frame-corners
  @description Use in mockups to create a frame with a set size
  @version 0.2.0
-->

<!--##
  <Frame height="100px" width="100px" />
-->

<!--##
  <Frame height="160px" width="100px">
  __<Frame
  ____color="primary"
  ____dashed
  ____height="100%"
  ____width="100%"
  __/>
  __<Frame dotted height="100%" width="100%" />
  </Frame>
-->

<!--##
  <Frame desktop>
  __desktop
  </Frame>
-->

<!--##
  <Frame tablet>
  __tablet
  </Frame>
-->

<!--##
  <Frame phone>
  __mobile
  </Frame>
-->

<template>
  <Container v-if="center" center="inline">
    <div :class="{ dashed, dotted }">
      <slot />
    </div>
  </Container>
  <div v-else :class="{ dashed, dotted }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface FrameProps {
    center?: boolean // Center frame horizontally
    color?: string // Color of the frame
    dashed?: boolean // Style the frame border as dashed
    desktop?: boolean // Set the frame to desktop size
    dotted?: boolean // Style the frame border as dotted
    height?: string // Height of the frame
    phone?: boolean // Set the frame to phone size
    placeItems?: string // Align items inside the frame
    tablet?: boolean // Set the frame to tablet size
    width?: string // Width of the frame
  }

  const props = withDefaults(defineProps<FrameProps>(), {
    center: false,
    color: 'text2',
    dashed: false,
    desktop: false,
    dotted: false,
    height: '100%',
    phone: false,
    placeItems: 'center',
    tablet: false,
    width: '100%'
  })


  const color = computed(() => useThemeColor(props.color))
  const background = computed(() => color.value.value.startsWith('#') ? `${color.value.value}3f` : color.value.value)
  const hover = computed(() => color.value.value.startsWith('#') ? `${color.value.value}5f` : color.value.value)
  const width = computed(() => {
    if (props.desktop) {
      return '480px'
    } else if (props.tablet) {
      return '240px'
    } else if (props.phone) {
      return '160px'
    }
    return props.width

  })
  const height = computed(() => {
    if (props.desktop) {
      return '320px'
    } else if (props.tablet) {
      return '320px'
    } else if (props.phone) {
      return '320px'
    }
    return props.width

  })
</script>

<style lang="scss" scoped>
  div {
    background: v-bind(background);
    border-color: v-bind('color.value');
    border-style: solid;
    border-width: var(--unit);
    display: grid;
    gap: var(--unit);
    height: v-bind(height);
    padding: var(--unit);
    place-items: v-bind('placeItems');
    place-self: stretch;
    width: v-bind(width);

    &.dashed {
      border-style: dashed;
    }

    &.dotted {
      border-style: dotted;
    }

    &:hover {
      background: v-bind(hover);
    }
  }
</style>
