<!--!
  @name Card
  @version 1.0.0
-->

<template>
  <Container :inline="inline">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  import { useThemeColor } from '#imports'


  interface CardProps {
    background?: string
    inline?: boolean
  }

  const props = withDefaults(defineProps<CardProps>(), {
    background: 'background'
  })

  const background = useThemeColor(props.background)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  div.container, span.container {
    background: v-bind(background);
    @include mixins.rounded;
    @include mixins.double-unit-padding;
  }
</style>
