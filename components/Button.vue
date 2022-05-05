<!--!
  @version 1.2.0
  @description Button component with optional gradient or ghost effect
  @icon hand-pointing
  @usage
  <Button color="primary">
  __button
  </Button>
  @category Basic
-->

<template>
  <button :class="{ capitalize, ghost, uppercase }" :type="type">
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
    type?: 'button' | 'submit' | 'reset' // Button type
    uppercase?: boolean // Uppercase the button text
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    capitalize: false,
    color: 'primary',
    ghost: false,
    gradient: '',
    type: 'button',
    uppercase: false
  })

  const primarycolor = useThemeColor(props.color)
  const secondarycolor = computed(() => useThemeColor(props.gradient ? props.gradient : props.color))
  const textcolor = computed(() => useThemeColor(textColor(primarycolor.value, 'text', 'background')))
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  button {
    background-image: linear-gradient(45deg, v-bind(primarycolor), v-bind('secondarycolor.value'));
    color: v-bind(textcolor);
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
  }
</style>
