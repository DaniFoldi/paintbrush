<template>
  <div><slot /></div>
</template>

<script>
  export default {
    name: 'ButtonGroup'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  div {
    @include constants.reset;
    margin: constants.$base-size * 2 0;
  }
</style>
