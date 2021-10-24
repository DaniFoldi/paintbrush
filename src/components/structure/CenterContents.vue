<template>
  <div class="center-contents">
    <div class="center-multi" v-if="multi">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default {
    name: 'CenterContents',
    props: {
      maxWidth: {
        type: String,
        default: '100%'
      },
      multi: {
        type: Boolean,
        default: true
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

    & > ::v-deep(*) {
      grid-area: content;
    }
  }
</style>
