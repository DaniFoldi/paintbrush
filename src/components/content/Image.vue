<template>
  <figure>
    <img :src="src" :alt="alt" />
    <figcaption v-if="caption">{{ alt }}</figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'Image',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: String,
      caption: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  figure {
    figcaption {
      @include constants.reset;
      text-align: center;
      font-size: constants.$font-size-small;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
