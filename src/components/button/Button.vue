<template>
  <button><slot /></button>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  button {
    @include constants.reset;
    @include constants.interactive;
    @include constants.primary;
    @include constants.rounded;
    @include constants.mpadded;
    @include constants.size1;
    @include constants.spaced;
    @include constants.animated;

    &:hover {
      // TODO consistent shadow
      box-shadow: 1px 5px 20px -4px rgba(0, 0, 0, 0.7);
    }

    &:focus,
    &:active {
      box-shadow: none;
    }
  }
</style>
