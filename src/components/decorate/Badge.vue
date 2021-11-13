<template>
  <div>
    <Text>{{ left }}</Text>
    <Text>{{ right }}</Text>
  </div>
</template>

<script>
  import { resolve, textColor } from '../../data/scheme'
  import Text from '../basic/Text.vue'
  export default {
    components: {
      Text
    },
    name: 'Badge',
    inject: ['primary', 'secondary'],
    props: {
      left: {
        required: true
      },
      right: {
        required: true
      },
      leftColor: {
        type: String,
        default: 'darkgray'
      },
      rightColor: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      resolveLeftBackground() {
        return resolve(this.leftColor, this.primary, this.secondary)
      },
      resolveRightBackground() {
        return resolve(this.rightColor, this.primary, this.secondary)
      },
      resolveLeftColor() {
        return textColor(this.resolveLeftBackground)
      },
      resolveRightColor() {
        return textColor(this.resolveRightBackground)
      }
    }
  }
</script>

<style lang="scss" scoped>
  // TODO
  @use '../../scss/constants';

  p {
    display: inline;
  }

  div {
    display: inline-block;
  }

  div p {
    padding: 5px;
  }

  div p:first-child {
    background: v-bind(resolveLeftBackground);
    color: v-bind(resolveLeftColor);
  }

  div p:last-child {
    background: v-bind(resolveRightBackground);
    color: v-bind(resolveRightColor);
  }

  div {
    @include constants.reset;
    border-radius: constants.$base-size;
    overflow: hidden;
  }
</style>
