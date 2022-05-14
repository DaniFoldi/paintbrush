<!--!
  @version 1.1.0
  @category Layout
  @icon cards
  @description Visual building block with a separate background color
  @usage
  <Card>
  __<Input type="text">Username</Input>
  __<Input type="password"Password</Input>
  </Card>
-->

<template>
  <Container :inline="inline" :padded="padded">
    <slot />
  </Container>
</template>

<script lang="ts" setup>
  import { useThemeColor } from '#imports'


  interface CardProps {
    background?: string // Background color of card
    inline?: boolean // Display card as inline
    padded?: boolean | string // Internal padding
  }

  const props = withDefaults(defineProps<CardProps>(), {
    background: 'background',
    padded: false
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
