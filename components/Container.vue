<!--!
  @name Container
  @version 1.3.2
  @icon package
  @description Container component for pages, main content and elements
  @usage <Container>Summary</Container>
-->

<template>
  <div
    class="container"
    :class="[
      centerBlock ? 'center-block' : '',
      centerInline ? 'center-inline' : '',
      leftBadge ? 'left-badge' : '',
      padded ? 'padded' : '',
      rightBadge ? 'right-badge' : '', type
    ]"
    :data-left-badge="leftBadge"
    :data-right-badge="rightBadge"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface ContainerProps {
    article?: boolean
    center?: boolean | 'block' | 'inline'
    leftBadge?: string
    max?: boolean
    padded?: boolean
    rightBadge?: string
    split?: boolean
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    article: false,
    center: false,
    leftBadge: '',
    max: false,
    padded: false,
    rightBadge: '',
    split: false
  })

  let type = ''

  if (Object.values({ article: props.article, max: props.max, split: props.split }).filter(Boolean).length > 1) {
    console.warn('Container: Only one of the following props should be set: article, max, split')
  }

  if (!props.article && !props.max && !props.split) {
    type = 'max'
  } else if (props.article) {
    type = 'article'
  } else if (props.max) {
    type = 'max'
  } else if (props.split) {
    type = 'split'
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
</style>
