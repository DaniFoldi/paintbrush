<!--!
@name Icon
@version 1.0.0
@description Icon component from Phosphor Icons
@usage <Icon name="gear">
@property required; name: Icon name; type: String; description: Icon name as it appears in Phosphor Icons
@property default: small; name: size; type: ['small', 'medium', 'large', 'x-large']; description: Font size of the icon
@example <Icon name="chat-dots" size="large">
@example <Icon name="mouse" size="medium">
@note For an icon list see https://phosphoricons.com/
-->
<template>
  <i :class="'ph-' + name" />
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { resolve } from '../scripts/color'

const colorScheme: Record<string, string> = inject('colorScheme', {})

interface IconProps {
  color?: string
  name?: string
  size?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  color: 'primary',
  name: '',
  size: '16px'
})
const computedcolor = computed(() => resolve(colorScheme, props.color))
</script>

<style lang="scss" scoped>
@use '../assets/mixins';

i {
  color: v-bind(computedcolor);
  font-size: v-bind(size);
  vertical-align: middle;
  @include mixins.font('phosphor-icons');
}
</style>
