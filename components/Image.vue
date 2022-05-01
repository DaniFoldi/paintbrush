<template>
  <img :alt="alt" :src="source">
</template>

<script lang="ts" setup>
  interface ImageProps {
    alt: string
    maxHeight?: string
    maxWidth?: string
    source: string
  }

  const props = withDefaults(defineProps<ImageProps>(), {
    maxHeight: '100%',
    maxWidth: '100%'
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  img {
    max-height: v-bind('props.maxHeight');
    max-width: v-bind('props.maxWidth');
  }
</style>
