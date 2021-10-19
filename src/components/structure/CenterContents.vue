<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CenterContents'
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  div {
    @include constants.reset;
    @include constants.centergrid;
  }
</style>
