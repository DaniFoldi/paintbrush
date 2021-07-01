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
  background: constants.$background;
  color: constants.$text-on-background;
  padding: constants.$base-size * 2;
}
</style>
