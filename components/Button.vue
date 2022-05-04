<!--!
  @version 1.1.0
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
  import { computed } from 'vue'


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

  const primarycolor = computed(() => `var(--${props.color})`)
  const secondarycolor = computed(() => props.gradient ? `var(--${props.gradient})` : `var(--${props.color})`)
  const textcolor = computed(() => `var(--text-on-${props.color})`)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  button {
    background-image: linear-gradient(45deg, v-bind(primarycolor), v-bind(secondarycolor));

    color: v-bind(textcolor);
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
