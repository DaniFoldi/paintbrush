<template>
  <a v-if="reload" :href="href"><slot></slot></a>
  <router-link v-else :to="href"><slot></slot></router-link>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      href: {
        type: String,
        required: true
      },
      reload: {
        type: Boolean,
        default: true
      }
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
