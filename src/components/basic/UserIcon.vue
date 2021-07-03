<template>
  <span>
    <p>
      <slot></slot>
    </p>
  </span>
</template>

<script>
  export default {
    name: 'UserIcon'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';
  @use 'sass:meta';

  span {
    @include constants.reset;
    @include constants.centergrid;
    @include constants.spaced;
    @include constants.circle;
    @include constants.size1;
    width: constants.$base-size * 10;
    background: meta.call(constants.$color-function, constants.$primary, 25);

    p {
      @include constants.reset;
      font-size: constants.$font-size-large;
      color: constants.$primary;
      font-weight: 500;
    }
  }
</style>
