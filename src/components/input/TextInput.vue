<template>
  <input type="text" />
</template>

<script>
  export default {
    name: 'TextInput'
  }
</script>

<style lang="scss" scoped>
  // TODO style
  @use '../../scss/constants';

  p {
    @include constants.reset;
    margin: constants.$base-size * 2 0;
  }
</style>
