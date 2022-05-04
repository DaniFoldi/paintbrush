<!--!
  @version 1.1.0
  @icon hand-pointing
  @category Basic
  @require phosphor-icons
-->
<template>
  <button type="button">
    <Icon
      :color="iconColor"
      :name="icon"
      size="20px"
      :variant="iconVariant"
    />
    <Text><slot /></Text>
  </button>
</template>

<script lang="ts" setup>
  import { IconVariants } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    color?: string // Button color
    icon: IconTypes // Icon name
    iconColor?: string // Icon color
    iconVariant?: IconVariants // Icon variant
  }

  withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    iconColor: 'white',
    iconVariant: 'regular'
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
