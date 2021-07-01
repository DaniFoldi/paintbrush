<template>
  <Button><slot></slot></Button>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'CallToAction',
  components: { Button }
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

button {
  font-weight: 600;
  background: constants.$secondary;
  color: constants.$text-on-secondary;
  min-width: constants.$base-size * 20;
}
</style>
