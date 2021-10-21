<template>
  <div class="center-contents">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CenterContents',
    props: {
      maxWidth: {
        type: String,
        default: '100%'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  div.center-contents {
    @include constants.reset;
    @include constants.centergrid;

    grid-template-areas: '. content .';
    grid-template-columns: 1fr v-bind(maxWidth) 1fr;

    div {
      grid-area: content;
    }
  }
</style>
