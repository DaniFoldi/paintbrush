<template>
  <Button><slot></slot></Button>
</template>

<script>
  import Button from './Button.vue'
  export default { name: 'CallToAction', components: { Button } }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  button {
    @include constants.secondary;
  }
</style>
