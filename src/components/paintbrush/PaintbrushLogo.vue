<template>
  <!-- TODO change to full url, make transparent-->
  <img src="assets/paintbrush.png" />
</template>

<script>
  export default {
    name: 'PaintbrushLogo',
    props: ['size']
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  img {
    @include constants.reset;
    max-width: v-bind(size);
    max-height: v-bind(size);
  }
</style>
