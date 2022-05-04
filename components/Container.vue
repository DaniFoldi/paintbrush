<!--!
  @version 1.4.0
  @icon package
  @description Container component for pages, main content and elements
  @usage <Container>Summary</Container>
  @category Layout
-->

<template>
  <span
    v-if="inline"
    class="container"
    :class="{
      'center-block': centerBlock,
      'center-inline': centerInline,
      'left-badge': leftBadge,
      'padded': padded,
      'right-badge': rightBadge,
      'max': max,
      'article': article,
      'split': split
    }"
    :data-left-badge="leftBadge"
    :data-right-badge="rightBadge"
  >
    <slot />
  </span>
  <div
    v-else
    class="container"
    :class="{
      'center-block': centerBlock,
      'center-inline': centerInline,
      'left-badge': leftBadge,
      'padded': padded,
      'right-badge': rightBadge,
      'max': max,
      'article': article,
      'split': split
    }"
    :data-left-badge="leftBadge"
    :data-right-badge="rightBadge"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface ContainerProps {
    article?: boolean // Display container as article mode, with a maximum width
    center?: boolean | 'block' | 'inline' // Center container along axes
    inline?: boolean // Display container as inline
    leftBadge?: string // Badge in top left corner
    max?: boolean // Stretch container to maximum width and height
    padded?: boolean // Apply padding
    rightBadge?: string // Badge in top right corner
    split?: boolean // Split container into two halves
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    article: false,
    center: false,
    inline: false,
    leftBadge: '',
    max: false,
    padded: false,
    rightBadge: '',
    split: false
  })

  if (Object.values({ article: props.article, max: props.max, split: props.split }).filter(Boolean).length > 1) {
    console.warn('Container: Only one of the following props should be set: article, max, split')
  }

  const centerBlock = props.center === 'block' || props.center === true
  const centerInline = props.center === 'inline' || props.center === true
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  .container {
    @include mixins.no-margin;
    @include mixins.no-padding;

    &.max {
      @include mixins.absolute-full-size;
    }

    &.article {
      display: grid;
      grid-template-columns: 1fr minmax(min-content, 850px) 1fr;

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

    &.padded {
      @include mixins.double-unit-padding;
    }

    &.split {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    &.left-badge {
      position: relative;

      &::before {
        background: var(--badge);
        border-radius: 9px;
        color: var(--text-on-badge);
        content: attr(data-left-badge);
        display: inline;
        font-size: 11px;
        height: 18px;
        left: -7px;
        line-height: 18px;
        min-width: 18px;
        padding-inline: 2px;
        position: absolute;
        text-align: center;
        top: -7px;
        vertical-align: middle;

        @include mixins.font('inter');
      }
    }

    &.right-badge {
      position: relative;

      &::after {
        background: var(--badge);
        border-radius: 9px;
        color: var(--text-on-badge);
        content: attr(data-right-badge);
        display: inline;
        font-size: 11px;
        height: 18px;
        line-height: 18px;
        min-width: 18px;
        padding-inline: 2px;
        position: absolute;
        right: -7px;
        text-align: center;
        top: -7px;
        vertical-align: middle;

        @include mixins.font('inter');
      }
    }
  }

  span {
    display: inline-block;
  }
</style>
