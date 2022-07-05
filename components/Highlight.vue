<!--!
  @category Visual
  @icon traffic-sign
  @version 1.1.2
  @description Draw the user's attention to a piece of text
-->

<template>
  <blockquote :class="{ 'with-icon': iconName }">
    <Icon
      v-if="iconName"
      :color="iconColor"
      :name="iconName"
      :variant="iconVariant"
    />
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
    autoWrap?: boolean // Wrap the text in Text
    error?: boolean // Error highlight type
    iconColor?: string // Icon color
    iconName?: IconTypes | undefined // Icon name
    iconVariant?: IconVariants // Icon variant
    info?: boolean // Info highlight type
    quote?: boolean // Quote highlight type
    success?: boolean // Success highlight type
    warning?: boolean // Warning highlight type
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

  const border = computed(() => useThemeColor(color.value))
  const background = computed(() => border.value.value.startsWith('#') ? `${border.value.value}3f` : border.value.value)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  blockquote {
    background: v-bind(background);
    border-left: 3px solid v-bind('border.value');
    margin-block: var(--double-unit);
    padding: var(--double-unit);

    &.with-icon {
      @include mixins.two-items;
    }
  }
</style>
