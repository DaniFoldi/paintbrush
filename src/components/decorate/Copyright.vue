<template>
  <span>
    <Icon name="copyright"></Icon>
    <p>Copyright {{ year }} <slot></slot>. All rights reserved.</p>
  </span>
</template>

<script>
  import Icon from '../basic/Icon.vue'
  export default {
    name: 'Copyright',
    components: { Icon },
    props: {
      start: { type: Number, default: new Date().getFullYear() },
      end: { type: Number, default: new Date().getFullYear() }
    },
    computed: {
      year() {
        return '' + this.start + (this.start !== this.end ? ' - ' + this.end : '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  span {
    @include constants.reset;
    @include constants.doublegrid;
  }
</style>
