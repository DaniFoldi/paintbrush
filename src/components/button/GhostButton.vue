<template>
  <Button><slot></slot></Button>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'GhostButton',
  components: { Button }
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

button {
  @include constants.text;
  @include constants.padded;
}
</style>
