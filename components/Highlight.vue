<!--!
  @category Visual
  @icon traffic-sign
  @version 1.1.0
-->

<template>
  <blockquote :class="{ 'with-icon': iconName }">
    <Icon v-if="iconName" :color="iconColor" :name="iconName" />
    <Text v-if="autoWrap">
      <slot />
    </Text>
    <slot v-else />
  </blockquote>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'
  import { computed, useThemeColor } from '#imports'


  interface HighlightProps {
    autoWrap?: boolean
    error?: boolean
    iconColor?: string
    iconName?: IconTypes | undefined
    iconVariant?: IconVariants
    info?: boolean
    quote?: boolean
    success?: boolean
    warning?: boolean
  }

  const props = withDefaults(defineProps<HighlightProps>(), {
    autoWrap: true,
    error: false,
    iconColor: 'inherit',
    iconName: undefined,
    iconVariant: 'regular',
    info: false,
    quote: false,
    success: false,
    warning: false
  })

  const color = computed(() => {
    if (props.error) {
      return 'red'
    }
    if (props.warning) {
      return 'orange'
    }
    if (props.success) {
      return 'green'
    }
    if (props.info) {
      return 'blue'
    }
    if (props.quote) {
      return 'gray'
    }
    return 'text'
  })

  const border = useThemeColor(color.value)
  const background = computed(() => border.value.startsWith('#') ? `${border.value}3f` : border.value)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  blockquote {
    background: v-bind(background);
    border-left: 3px solid v-bind(border);
    margin-block: var(--double-unit);
    padding: var(--double-unit);

    &.with-icon {
      @include mixins.two-items;
    }
  }
</style>
