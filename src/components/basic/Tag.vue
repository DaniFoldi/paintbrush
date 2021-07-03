<template>
  <span>
    <p><slot></slot></p>
    <button v-if="closeable"><Icon size="small" name="x"></Icon></button>
  </span>
</template>

<script>
  import Icon from './Icon.vue'
  export default { name: 'Tag', components: { Icon }, props: { closeable: Boolean } }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';
  @use 'sass:meta';

  span {
    @include constants.reset;
    @include constants.spadded;
    @include constants.primary;
    color: constants.$primary;
    background: meta.call(constants.$color-function, constants.$primary, 25);
    @include constants.size2;
    @include constants.rounded;
    @include constants.spaced;
    @include constants.doublegrid;

    p {
      @include constants.reset;
      font-size: constants.$font-size-small;
      display: inline;
      text-transform: uppercase;
      vertical-align: middle;
      font-weight: 500;
    }

    button {
      // todo animate
      @include constants.reset;
      @include constants.interactive;
      @include constants.circle;
      @include constants.centergrid;
      height: constants.$base-size * 4;
      width: constants.$base-size * 4;
      @include constants.primary-second;
      color: constants.$primary;
    }
  }
</style>
