<!--!
@name IconButton
@version 1.0.0
-->
<template>
  <button>
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
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

button {
  @include mixins.no-border;
  @include mixins.rounded;
  @include mixins.two-items;
}
</style>
