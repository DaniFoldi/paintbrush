<!--!
  @version 2.1.0
  @icon package
  @description Container component for pages, main content and elements
  @category Layout
-->

<template>
  <span
    v-if="inline"
    class="container"
    :class="{
      'center-block': centerBlock,
      'center-inline': centerInline,
      'grid': grid,
      'max': max,
      'article': article,
      'split': split
    }"
  >
    <slot />
  </span>
  <div
    v-else
    class="container"
    :class="{
      'center-block': centerBlock,
      'center-inline': centerInline,
      'grid': grid,
      'max': max,
      'article': article,
      'split': split
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor, usePaintbrushMeta } from '#imports'


  interface ContainerProps {
    article?: boolean // Display container as article mode, with a maximum width
    center?: boolean | 'block' | 'inline' // Center container along axes
    gap?: string // gap between grid elements
    grid?: string // Specify custom grid-template-columns
    inline?: boolean // Display container as inline
    max?: boolean // Stretch container to maximum width and height
    padded?: boolean | string // Apply padding
    split?: boolean // Split container into two halves
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    article: false,
    center: false,
    gap: '0',
    grid: '',
    inline: false,
    max: false,
    padded: false,
    split: false
  })


  const centerBlock = computed(() => props.center === 'block' || props.center === true)
  const centerInline = computed(() => props.center === 'inline' || props.center === true)
  const padding = computed(() => props.padded ? useThemeColor(props.padded === true ? 'unit' : props.padded).value : '0')
  const paintbrushMeta = usePaintbrushMeta()
  const articleWidth = computed(() => paintbrushMeta.container.articleWidth)
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/grid.scss' as grid;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  .container {
    @include sizes.no-margin;

    padding: v-bind(padding);

    &.max {
      @include mixins.set-100-percent('width', 'height');
    }

    &.article {
      @include grid.grid;

      grid-template-columns: 1fr v-bind('articleWidth') 1fr;

      & > ::v-deep(*) {
        grid-column: 2 / 3;
      }
    }

    &.center-block {
      align-items: center;
      display: grid;
    }

    &.center-inline {
      display: grid;
      justify-items: center;
    }

    &.grid {
      display: grid;
      gap: v-bind(gap);
      grid-template-columns: v-bind(grid);
    }

    &.split {
      display: grid;
      grid-template-columns: 1fr auto;
    }
  }

  span {
    display: inline-block;
  }
</style>
