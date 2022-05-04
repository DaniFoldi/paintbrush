<!--!
  @version 1.1.0
-->

<template>
  <img :alt="alt" :class="{ rounded }" :src="source">
</template>

<script lang="ts" setup>
  interface ImageProps {
    alt: string
    maxHeight?: string
    maxWidth?: string
    rounded?: boolean
    source: string
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
