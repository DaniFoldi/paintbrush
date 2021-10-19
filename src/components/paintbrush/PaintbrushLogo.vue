<template>
  <!-- TODO change to full url, make transparent-->
  <img src="assets/paintbrush.png" />
</template>

<script>
  export default {
    name: 'PaintbrushLogo',
    props: {
      size: {
        type: Number,
        default: 48
      }
    },
    computed: {
      sizePx() {
        return `${this.size}px`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  img {
    @include constants.reset;
    max-width: v-bind(sizePx);
    max-height: v-bind(sizePx);
  }
</style>
