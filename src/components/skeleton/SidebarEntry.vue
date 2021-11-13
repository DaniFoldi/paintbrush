<template>
  <Link :reload="reload" :href="href">
    <Icon :name="icon" center size="large" />
    <Text>{{ label }}</Text>
  </Link>
</template>

<script>
  import { resolve } from '../../data/scheme'
  import Icon from '../basic/Icon.vue'
  import Link from '../basic/Link.vue'
  import Text from '../basic/Text.vue'
  export default {
    name: 'SidebarEntry',
    components: {
      Icon,
      Link,
      Text
    },
    inject: ['primary', 'secondary'],
    props: {
      href: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'primary'
      },
      icon: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      reload: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      iconColor() {
        return resolve(this.color, this.primary, this.secondary)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  a {
    @include constants.reset;
    @include constants.interactive;
    font-size: constants.$font-size-large;
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
    column-gap: constants.$base-size * 2;

    div {
      @include constants.animated;
      color: v-bind(iconColor);
      border-radius: constants.$base-size * 2;
      width: 32px;
      height: 32px;
    }

    p {
      color: constants.$text-on-background;
      margin: 0;
    }

    &:not(:last-child) {
      margin-bottom: constants.$base-size * 2;
    }
  }

  a:hover {
    text-decoration: none;

    div {
      background: v-bind(iconColor);
      color: constants.$background;
    }
  }
</style>
