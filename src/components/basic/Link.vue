<template>
  <a :href="href"><slot></slot></a>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      href: {
        type: String,
        required: true
      }
    },
    data: () => {
      return {
        svg: ''
      }
      // todo add options
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  a,
  a:visited {
    @include constants.reset;
    @include constants.interactive;
    @include constants.normal;
    color: constants.$primary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
