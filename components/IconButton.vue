<!--!
  @version 1.2.1
  @icon hand-pointing
  @category Basic
  @require phosphor-icons
  @description A button with an embedded and auto aligned icon
  @usage <IconButton icon-name="flask">Enable</IconButton>
-->

<template>
  <Button :class="{ 'flip': !leftIcon && rightIcon }">
    <Text v-if="!leftIcon && rightIcon" :color="color">
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
    color?: string // Button color
    icon: IconTypes // Icon name
    iconColor?: string // Icon color
    iconSize?: string // Icon size
    iconVariant?: IconVariants // Icon variant
    leftIcon?: boolean
    rightIcon?: boolean
  }

  withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    iconColor: 'white',
    iconSize: '20px',
    iconVariant: 'regular',
    leftIcon: true,
    rightIcon: false
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  button {
    @include mixins.two-items;
  }
</style>
