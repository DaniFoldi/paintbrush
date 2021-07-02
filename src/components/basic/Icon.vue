<template>
  <i :class="[name ? 'ph-' + name : '', 'font-' + size]"></i>
</template>

<script>
export default {
  name: 'Icon',
  data: () => {
    return {
      svg: ''
    }
    // todo add options
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

i {
  @include constants.reset;
  font-family: 'Phosphor-icons';
  vertical-align: middle;
}
</style>
