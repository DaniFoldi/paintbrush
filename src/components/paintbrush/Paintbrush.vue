<template>
  <div class="paintbrush-container">
    <slot></slot>
  </div>
</template>

<script>
  import { computed } from 'vue'
  export default {
    name: 'Base',
    props: { primary: { type: String, default: 'blue' }, secondary: { type: String, default: 'purple' } },
    provide() {
      return { primary: computed(() => this.primary), secondary: computed(() => this.secondary) }
    }
  }
</script>

<style lang="scss">
  @use '../../scss/constants.scss';

  @include constants.fontSource;
  @include constants.fontSizes;
  @include constants.colors;
  @include constants.backgroundColors;

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    display: grid;
    grid-template: 'app' 100% / 100%;
  }
</style>

<style lang="scss" scoped>
  @use '../../scss/constants.scss';
  div.paintbrush-container {
    width: 100%;
    height: 100%;
  }
</style>
