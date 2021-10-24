<!--!
@name Icon
@version 1.0.0
@description Icon component from Phosphor Icons
@see structure/CenterContents
@usage <Icon name="gear">
@property required; name: Icon name; type: String; description: Icon name as it appears in Phosphor Icons
@property default: small; name: size; type: ['small', 'medium', 'large', 'x-large']; description: Font size of the icon
@property default: false; name: center; type: Boolean; description: Embed in a container that centers the icon
@example <Icon name="chat-dots" size="large" center>
@example <Icon name="mouse" size="medium">
@note For an icon list see https://phosphoricons.com/
-->
<template>
  <CenterContents v-if="center" v-bind:multi="false">
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
