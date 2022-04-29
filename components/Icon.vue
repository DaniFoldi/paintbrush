<!--!
  @name Icon
  @version 1.0.0
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
  <i :class="`ph-${name}${style !== 'regular' ? `-${style}` : ''}`" />
</template>

<script lang="ts" setup>
  import { computed, inject } from 'vue'
  import { resolve } from '../scripts/color'
  import { IconStyles } from '../modules/icons'
  import { IconTypes } from '../modules/icon-types'


  interface IconProps {
    color?: string
    name: IconTypes
    size?: string
    style?: IconStyles
  }

  const props = withDefaults(defineProps<IconProps>(), {
    color: 'primary',
    size: '16px',
    style: 'regular'
  })


  const colorScheme: Record<string, string> = inject('colorScheme', {})

  const computedcolor = computed(() => resolve(colorScheme, props.color))
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  i {
    color: v-bind(computedcolor);
    font-size: v-bind(size);
    vertical-align: middle;
    @include mixins.font('phosphor-icons');
  }
</style>
