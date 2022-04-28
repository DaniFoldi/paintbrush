<!--!
  @name IconButton
  @version 1.0.0
-->
<template>
  <button type="button">
    <Icon :color="iconColor" :name="icon" size="20px" />
    <Text><slot /></Text>
  </button>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    color?: string
    icon: IconTypes
    iconColor?: string
  }

  withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    iconColor: 'white'
  })
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

button {
  @include mixins.no-border;
  @include mixins.rounded;
  @include mixins.two-items;
}
</style>
