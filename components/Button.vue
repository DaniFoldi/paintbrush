<!--!
  @version 1.4.0
  @description Button component with optional gradient or ghost effect
  @icon hand-pointing
  @category Basic
-->

<template>
  <button :class="{ capitalize, ghost, uppercase, small, large }" :type="type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import { textColor } from '../scripts/color'
  import { computed, useThemeColor } from '#imports'


  interface ButtonProps {
    capitalize?: boolean // Capitalize the button text
    color?: string // Background color of the button
    ghost?: boolean // Add a ghost effect to the button
    gradient?: string  // Set the 2nd gradient color
    large?: boolean // Make the button larger
    small?: boolean // Make the button smaller
    type?: 'button' | 'submit' | 'reset' // Button type
    uppercase?: boolean // Uppercase the button text
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    capitalize: false,
    color: 'primary',
    ghost: false,
    gradient: '',
    large: false,
    small: false,
    type: 'button',
    uppercase: false
  })

  const primarycolor = useThemeColor(props.color)
  const secondarycolor = computed(() => useThemeColor(props.gradient ?? props.color))
  const textcolor = computed(() => useThemeColor(textColor(primarycolor.value, 'text', 'background')))
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  button {
    background-image: linear-gradient(45deg, v-bind(primarycolor), v-bind('secondarycolor.value'));
    color: v-bind('textcolor.value');
    cursor: pointer;
    min-height: 32px;
    min-width: 80px;
    @include mixins.rounded;
    @include mixins.primary-color;
    @include mixins.no-border;
    @include mixins.double-unit-inline-padding;
    @include mixins.no-block-padding;

    &.ghost {
      background: transparent;
      color: var(--text);
    }

    &.capitalize {
      @include mixins.capitalize;
    }

    &.uppercase {
      @include mixins.uppercase;
    }

    &.small {
      min-height: 24px;
      min-width: 40px;
    }

    &.large {
      min-height: 48px;
      min-width: 120px;
    }

    &:disabled {
      background: var(--disabled);
    }
  }
</style>
