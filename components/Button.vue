<!--!
  @version 2.0.0
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
  import { computed, useThemeColor } from '#imports'


  interface ButtonProps {
    background?: string // Background color of the button
    capitalize?: boolean // Capitalize the button text
    color?: string // Text color of the button
    ghost?: boolean // Add a ghost effect to the button
    large?: boolean // Make the button larger
    small?: boolean // Make the button smaller
    type?: 'button' | 'submit' | 'reset' // Button type
    uppercase?: boolean // Uppercase the button text
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    background: 'primary',
    capitalize: false,
    color: 'primaryText',
    ghost: false,
    large: false,
    small: false,
    type: 'button',
    uppercase: false
  })

  const background = computed(() => useThemeColor(props.background).value)
  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';

  button {
    @include mixins.rounded;
    @include mixins.primary-color;
    @include mixins.no-border;
    @include mixins.double-unit-inline-padding;
    @include mixins.no-block-padding;
    background: v-bind(background);
    color: v-bind(color);
    cursor: pointer;
    min-height: 32px;
    min-width: 80px;

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
