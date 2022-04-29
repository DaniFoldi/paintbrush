<!--!
  @name IconButton
  @version 1.0.0
  @icon hand-pointing
-->
<template>
  <button type="button">
    <Icon :color="iconColor" :name="icon" size="20px" />
    <Text><slot /></Text>
  </button>
</template>

<script lang="ts" setup>
  import { IconStyles } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    color?: string
    icon: IconTypes
    iconColor?: string
    iconStyle?: IconStyles
  }

  withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    iconColor: 'white',
    iconStyle: 'regular'
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
