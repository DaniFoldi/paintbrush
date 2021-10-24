<template>
  <Button><slot /></Button>
</template>

<script>
  import Button from './Button.vue'
  export default { name: 'DestructiveButton', components: { Button } }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  button {
    @include constants.destructive;
  }
</style>
