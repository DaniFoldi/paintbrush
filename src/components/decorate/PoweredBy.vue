<template>
  <a :href="href">Powered by <slot></slot></a>
</template>

<script>
  export default {
    name: 'PoweredBy',
    props: ['href']
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  a,
  a:visited {
    @include constants.reset;
    text-decoration: none;
    font-weight: 500;
    color: constants.$text-on-background;
  }
</style>
