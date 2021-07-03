<template>
  <div class="paintbrush-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Base'
  }
</script>

<style lang="scss">
  @use '../../scss/constants.scss';

  @include constants.fontSource;
  @include constants.fontSizes;
  @include constants.colors;
  @include constants.backgroundColors;
</style>
