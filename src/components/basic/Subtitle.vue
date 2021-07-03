<template>
  <h2><slot></slot></h2>
</template>

<script>
  export default {
    name: 'Subtitle'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  h2 {
    @include constants.reset;
    font-weight: 600;
    font-size: constants.$font-size-x-large;
  }
</style>
