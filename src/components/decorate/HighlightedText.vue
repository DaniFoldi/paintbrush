<template>
  <Text><slot /></Text>
</template>

<script>
  import Text from '../basic/Text.vue'
  export default {
    name: 'HighlightedText',
    components: { Text }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  p {
    @include constants.reset;
    margin: constants.$base-size * 2 0;
    padding: constants.$base-size * 0.5;
    border-radius: constants.$base-size * 0.5;
    background: constants.$primary-second;
    font-weight: 400;
  }
</style>
