<template>
  <h1><slot></slot></h1>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

h1 {
  @include constants.reset;
  font-weight: 600;
  font-size: constants.$font-size-xx-large;
}
</style>
