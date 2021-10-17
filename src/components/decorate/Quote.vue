<template>
  <div>
    <blockquote><slot></slot></blockquote>
    <p v-if="from">{{ from }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Quote',
    props: ['from']
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants.scss';

  div {
    margin: constants.$base-size * 2 0;

    blockquote {
      @include constants.reset;
      border-left: constants.$base-size solid constants.$primary-second;
      padding-left: constants.$base-size;
    }
    p {
      @include constants.reset;
      font-size: constants.$font-size-small;
      margin-left: constants.$base-size * 2;
      font-style: italic;
      font-weight: 400;
    }
  }
</style>
