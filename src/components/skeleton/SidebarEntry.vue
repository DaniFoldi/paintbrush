<template>
  <Link :href="href">
    <Icon :name="icon" center="true" size="x-large" />
    <Text>{{ label }}</Text>
  </Link>
</template>

<script>
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
    props: {
      icon: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
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
      color: constants.$primary;
      border-radius: constants.$base-size * 2;
      width: 32px;
      height: 32px;
    }

    p {
      color: constants.$text-on-background;
      margin: 0;
    }
  }

  a:hover {
    text-decoration: none;

    div {
      background: constants.$primary;
      color: constants.$background;
    }
  }
</style>
