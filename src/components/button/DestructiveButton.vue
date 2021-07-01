<template>
  <Button><slot></slot></Button>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'DestructiveButton',
  components: { Button }
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

button {
  background: constants.$destructive;
  color: constants.$text-on-destructive;
}
</style>
