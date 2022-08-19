<!--!
  @version 1.3.0
  @icon hand-pointing
  @category Basic
  @require phosphor-icons
  @description A button with an embedded and auto aligned icon
-->

<template>
  <Button :class="{ 'flip': !leftIcon && rightIcon }">
    <Text v-if="!leftIcon && rightIcon" :background="background" :color="color">
      <slot />
    </Text>
    <Icon
      :color="iconColor"
      :name="icon"
      :size="iconSize"
      :variant="iconVariant"
    />
    <Text v-if="leftIcon" :color="color">
      <slot />
    </Text>
  </Button>
</template>

<script lang="ts" setup>
  import { IconVariants } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    background?: string // Button background color
    color?: string // Button color
    icon: IconTypes // Icon name
    iconColor?: string // Icon color
    iconSize?: string // Icon size
    iconVariant?: IconVariants // Icon variant
    leftIcon?: boolean // Icon is on the left
    rightIcon?: boolean // Icon is on the right
  }

  withDefaults(defineProps<IconProps>(), {
    background: 'background',
    color: 'primary',
    iconColor: 'backgroundText',
    iconSize: '20px',
    iconVariant: 'regular',
    leftIcon: true,
    rightIcon: false
  })
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/grid.scss' as grid;

  button {
    @include grid.two-items;
    @include grid.grid;
    @include grid.center-items-block;
  }
</style>
