<template>
  <button><slot></slot></button>
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
}
</style>
