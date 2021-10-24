<template>
  <p><slot /></p>
</template>

<script>
  export default {
    name: 'Text'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  p {
    @include constants.reset;
    margin: constants.$base-size * 2 0;
  }
</style>
