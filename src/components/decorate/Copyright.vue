<template>
  <div>
    <Icon name="copyright"></Icon>
    <p>Copyright {{ year }} <slot></slot>. All rights reserved.</p>
  </div>
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

  div {
    @include constants.reset;

    font-size: constants.$font-size-small;

    i {
      // TODO better fix for vertical offset
      margin-bottom: 2.5px;
    }

    p {
      display: inline;
    }
  }
</style>
