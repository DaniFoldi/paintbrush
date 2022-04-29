<!--!
  @name Button
  @version 1.1.0
  @description Button component with optional gradient or ghost effect
  @icon hand-pointing
  @usage
  <Button color="primary">
  __button
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
  <button :class="{ capitalize, ghost, uppercase }" :type="type">
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
