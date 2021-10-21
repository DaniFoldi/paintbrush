<!-- DOCS
-->
<template>
  <CenterContents v-if="center">
    <i :class="[name ? 'ph-' + name : '', 'font-' + size]"></i>
  </CenterContents>
  <i v-else :class="[name ? 'ph-' + name : '', 'font-' + size]"></i>
</template>

<script>
  import CenterContents from '../structure/CenterContents.vue'
  export default {
    name: 'Icon',
    components: {
      CenterContents
    },
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: 'small'
      },
      center: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        svg: ''
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
