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
interface IconProps {
  name?: string;
  size?: string;
}

withDefaults(defineProps<IconProps>(), {
  name: '',
  size: '16px'
})
</script>

<style lang="scss" scoped>
  i {
    // stylelint-disable-next-line font-family-no-missing-generic-family-keyword -- Icons do not have generic family
    font-family: Phosphor-icons;
    font-size: v-bind(size);
    vertical-align: middle;
  }
</style>
