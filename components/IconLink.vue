<!--!
  @version 1.0.0
  @require phosphor-icons
  @category Basic
  @icon link
  @description A link with an embedded and auto aligned icon
-->

<template>
  <AutoLink :class="{ flip: !leftIcon && rightIcon }" :href="href">
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
  import { computed, useThemeColor } from '#imports'
  import { IconVariants } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    color?: string // Button color
    href: string // Link href
    icon: IconTypes // Icon name
    iconColor?: string // Icon color
    iconSize?: string // Icon size
    iconVariant?: IconVariants // Icon variant
    leftIcon?: boolean // Icon is on the left
    rightIcon?: boolean // Icon is on the right
  }

  const props = withDefaults(defineProps<IconProps>(), {
    color: 'backgroundText',
    iconColor: 'inherit',
    iconSize: 'inherit',
    iconVariant: 'regular',
    leftIcon: true,
    rightIcon: false
  })

  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';

  a {
    @include mixins.two-items;
    color: v-bind(color);
  }
</style>
