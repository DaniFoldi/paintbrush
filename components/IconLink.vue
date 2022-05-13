<!--!
  @version 1.0.0
  @require phosphor-icons
-->
<template>
  <AutoLink :class="{ 'flip': !leftIcon && rightIcon }" :href="href">
    <Text v-if="!leftIcon && rightIcon" underline>
      <slot />
    </Text>
    <Icon
      :color="iconColor"
      :name="icon"
      :size="iconSize"
      :variant="iconVariant"
    />
    <Text v-if="leftIcon" underline>
      <slot />
    </Text>
  </AutoLink>
</template>

<script lang="ts" setup>
  import { IconVariants } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'
  import { useThemeColor } from '#imports'


  interface IconProps {
    color?: string // Button color
    href: string
    icon: IconTypes // Icon name
    iconColor?: string // Icon color
    iconSize?: string // Icon size
    iconVariant?: IconVariants // Icon variant
    leftIcon?: boolean
    rightIcon?: boolean
  }

  const props = withDefaults(defineProps<IconProps>(), {
    color: 'text',
    iconColor: 'inherit',
    iconSize: 'inherit',
    iconVariant: 'regular',
    leftIcon: true,
    rightIcon: false
  })

  const text = useThemeColor(props.color)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  a {
    color: v-bind(text);
    @include mixins.two-items;
  }
</style>