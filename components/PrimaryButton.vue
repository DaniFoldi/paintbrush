<template>
  <button
    @blur="$emit('blur')"
    @click="$emit('click')"
    @focus="$emit('focus')"
    @mousedown="$emit('mousedown')"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @mouseout="$emit('mouseout')"
    @mouseover="$emit('mouseover')"
    @mouseup="$emit('mouseup')"
    @touchcancel="$emit('touchcancel')"
    @touchend="$emit('touchend')"
    @touchmove="$emit('touchmove')"
    @touchstart="$emit('touchstart')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineEmits([
  'blur', 'focus',
  'click',
  'mouseover', 'mouseout',
  'mouseenter', 'mouseleave',
  'mousedown', 'mouseup',
  'touchstart', 'touchmove', 'touchend', 'touchcancel'
])
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

button {
  @include mixins.rounded;
  @include mixins.no-border;
  @include mixins.primary;
}
</style>
