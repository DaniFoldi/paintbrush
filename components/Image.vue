<!--!
  @version 1.1.0
  @category Basic
  @icon image
  @description Display an image
-->

<template>
  <img :alt="alt" :class="{ rounded }" :src="source">
</template>

<script lang="ts" setup>
  interface ImageProps {
    alt: string // Image alt text
    maxHeight?: string // Max height of the image
    maxWidth?: string // Max width of the image
    rounded?: boolean // Round the corners
    source: string // Image source
  }

  withDefaults(defineProps<ImageProps>(), {
    maxHeight: '100%',
    maxWidth: '100%',
    rounded: true
  })
</script>

<style lang="scss" scoped>
  @use '~/assets/common';
  @use '~/assets/mixins';

  img {
    max-height: v-bind('maxHeight');
    max-width: v-bind('maxWidth');

    &.rounded {
      @include common.rounded;
    }
  }
</style>
