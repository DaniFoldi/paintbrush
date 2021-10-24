<template>
  <span>
    <kbd v-if="altgr">AltGr</kbd>
    <kbd v-if="ctrl && !altgr"> {{ ctrlkey }}</kbd>
    <kbd v-if="alt && !altgr">{{ altkey }}</kbd>
    <kbd v-if="meta && metakey === '!icon'">
      <Icon name="command" size="small"></Icon>
    </kbd>
    <kbd v-else-if="meta">{{ metakey }}</kbd>
    <kbd v-if="shift && shiftkey === '!icon'">
      <Icon name="arrow-fat-up" size="small"></Icon>
    </kbd>
    <kbd v-else-if="shift">{{ shiftkey }}</kbd>
    <kbd>{{ keyboardKey }}</kbd>
  </span>
</template>

<script>
  import Icon from '../basic/Icon.vue'
  const isApple = () => {
    const platforms = ['iPhone', 'iPod', 'iPad', 'Mac']
    const platform = navigator.platform
    return platforms.some(p => platform.includes(p))
  }
  export default {
    name: 'KeyboardShortcut',
    components: { Icon },
    props: {
      ctrl: {
        type: Boolean,
        default: false
      },
      shift: {
        type: Boolean,
        default: false
      },
      alt: {
        type: Boolean,
        default: false
      },
      meta: {
        type: Boolean,
        default: false
      },
      keyboardKey: {
        type: String,
        required: true
      }
    },
    computed: {
      altgr() {
        return !isApple() && this.ctrl && this.alt
      },
      ctrlkey() {
        // TODO replace with phosphor icon once released
        return isApple() ? '^' : 'Ctrl'
      },
      altkey() {
        // TODO replace with phosphor icon once released
        return isApple() ? '⌥' : 'Alt'
      },
      metakey() {
        return isApple() ? '!icon' : 'Win'
      },
      shiftkey() {
        return isApple() ? '!icon' : 'Shift'
      }
    },
    components: { Icon }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants.scss';

  kbd {
    border-width: 1px 1px 2px 1px;
    border-color: constants.$secondary;
    border-style: solid;
    border-radius: constants.$base-size;
    padding: constants.$base-size / 2;
  }

  kbd:not(:last-child) {
    margin-right: constants.$base-size;
  }
</style>
