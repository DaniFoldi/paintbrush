<!--!
  @name Icon
  @version 1.1.0
  @icon palette
  @description Icon component from Phosphor Icons
  @usage
  <Icon name="gear" />
  @property
  color?: string ['primary'] (Icon color, can be from the color palette)
  name: string (Icon name as it appears in Phosphor Icons)
  size?: string ['16px'] (Icon size, can be any valid CSS value)
  @renderedExample
  <Icon name="chat-dots" size="32px" />
  @renderedExample
  <Icon color="white" name="mouse" size="24px" />
  @note For an icon list see https://phosphoricons.com/
-->

<template>
  <i :class="`ph-${name}${variant !== 'regular' ? `-${variant}` : ''}`" />
</template>

<script lang="ts" setup>
  import { IconStyles } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'
  import { useThemeColor } from '#imports'


  interface IconProps {
    color?: string
    name: IconTypes
    size?: string
    variant?: IconStyles
  }

  const props = withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    size: '16px',
    variant: 'regular'
  })


  const color = useThemeColor(props.color)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  i {
    color: v-bind(color);
    font-size: v-bind(size);
    vertical-align: middle;
    @include mixins.font('phosphor-icons');
  }
</style>
