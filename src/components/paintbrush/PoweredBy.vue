<template>
  <a href="https://paintbrush.design">Powered by Paintbrush</a>
</template>

<script>
  export default {
    name: 'PoweredBy'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  a,
  a:visited {
    @include constants.reset;
    text-decoration: none;
    text-align: center;
    display: block;
    font-weight: 500;
    color: constants.$text-on-background;
  }
</style>
