<!--!
  @version 1.1.0
  @category Basic
  @icon image
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

  const props = withDefaults(defineProps<ImageProps>(), {
    maxHeight: '100%',
    maxWidth: '100%',
    rounded: true
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  img {
    max-height: v-bind('props.maxHeight');
    max-width: v-bind('props.maxWidth');

    &.rounded {
      @include mixins.rounded;
    }
  }
</style>
