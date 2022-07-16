<!--!
  @category Display
  @icon frame-corners
  @description Use in mockups to create a frame with a set size
  @version 0.1.0
-->

<!--##
  <Frame height="100px" width="100px" />
-->

<!--##
  <Frame height="160px" width="100px">
  __<Frame color="primary" dashed height="100%" width="100%" />
  __<Frame dotted height="100%" width="100%" />
  </Frame>
-->

<template>
  <div :class="{ dashed, dotted }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { useThemeColor } from '#imports'


  interface FrameProps {
    color?: string // Color of the frame
    dashed?: boolean // Style the frame border as dashed
    dotted?: boolean // Style the frame border as dotted
    height?: string // Height of the frame
    width?: string // Width of the frame
  }

  const props = withDefaults(defineProps<FrameProps>(), {
    color: 'text-highlight',
    dashed: false,
    dotted: false,
    height: '100%',
    width: '100%'
  })

  const color = computed(() => useThemeColor(props.color))
  const background = computed(() => color.value.value.startsWith('#') ? `${color.value.value}3f` : color.value.value)
  const hover = computed(() => color.value.value.startsWith('#') ? `${color.value.value}5f` : color.value.value)
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
