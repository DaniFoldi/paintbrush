<!--!
  @version 1.1.0
  @icon palette
  @description Icon component from Phosphor Icons
  @category Basic
  @require phosphor-icons
  @note For an icon list see https://phosphoricons.com
-->

<!--##
  <Icon color="orange" name="mouse" size="24px" />
-->

<!--##
  <Icon name="chat-dots" size="32px" />
-->

<template>
  <i :class="`ph-${name}${variant !== 'regular' ? `-${variant}` : ''}`" />
</template>

<script lang="ts" setup>
  import { IconVariants } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'
  import { computed, useThemeColor } from '#imports'


  interface IconProps {
    color?: string // Icon color
    name: IconTypes // Icon name
    size?: string // Icon font size
    variant?: IconVariants // Icon variant
  }

  const props = withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    size: '16px',
    variant: 'regular'
  })


  const color = computed(() => useThemeColor(props.color))
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  i {
    color: v-bind('color.value');
    font-size: v-bind(size);
    vertical-align: middle;
    @include mixins.font('phosphor-icons');
  }
</style>
