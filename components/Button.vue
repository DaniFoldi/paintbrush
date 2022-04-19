<!--!
  @name Button
  @version 1.1.0
  @description Button component with optional gradient or ghost effect
  @usage
  <Button color="primary">
  button
  </Button>
  @property
  capitalize?: boolean [false] (Capitalize the text)
  color?: string ['primary'] (Button color, can be from the color palette)
  ghost?: boolean [false] (Add a ghost effect)
  gradient?: string ['primary'] (Button gradient color, can be from the color palette)
  type?: string ['button'] (Button type, can be button, submit, reset)
  uppercase?: boolean [false] (Uppercase the text)
-->
<template>
  <button :class="{ ghost: ghost, capitalize: capitalize, uppercase: uppercase }" :type="type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'


  interface ButtonProps {
    capitalize?: boolean
    color?: string
    ghost?: boolean
    gradient?: string
    type?: 'button' | 'submit' | 'reset'
    uppercase?: boolean
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    capitalize: false,
    color: 'primary',
    ghost: false,
    gradient: '',
    type: 'button',
    uppercase: false
  })

  const primaryColor = computed(() => {
    return `var(--${props.color})`
  })
  const secondaryColor = computed(() => {
    if (props.gradient === '') {
      return `var(--${props.color})`
    }
    return `var(--${props.gradient})`
  })

  const textColor = computed(() => {
    return `var(--text-on-${props.color})`
  })
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

button {
  @include mixins.rounded;
  @include mixins.primary-color;
  @include mixins.no-border;

  color: v-bind(textColor);
  background-image: linear-gradient(45deg, v-bind(primaryColor), v-bind(secondaryColor));

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
