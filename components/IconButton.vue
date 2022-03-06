<!--!
@name IconButton
@version 1.0.0
-->
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
    <Icon :color="iconColor" :name="icon" size="20px" />
    <Text><slot /></Text>
  </button>
</template>

<script lang="ts" setup>
interface IconProps {
  color?: string
  icon?: string
  iconColor?: string
}

withDefaults(defineProps<IconProps>(), {
  color: 'primary',
  icon: '',
  iconColor: 'white'
})

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
  @include mixins.no-border;
  @include mixins.rounded;
  @include mixins.two-items;
}
</style>
