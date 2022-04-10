<!--!
  @name Container
  @version 1.0.0
  @description Container component for pages, main content and elements
  @usage <Container>Summary</Container>
-->

<template>
  <div :class="[ 'container', type ]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface ContainerProps {
    article?: boolean
    center?: boolean
    max?: boolean
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    article: false,
    center: false,
    max: false
  })

  let type = ''

  if (Object.values(props).filter(Boolean).length > 1) {
    console.warn('Container: Only one of the following props should be set: article, center, max')
  }

  if (!props.article && !props.center && !props.max) {
    type = 'max'
  } else if (props.article) {
    type = 'article'
  } else if (props.center) {
    type = 'center'
  } else if (props.max) {
    type = 'max'
  }
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

.container {
  @include mixins.no-margin;
  @include mixins.no-padding;

  &.max {
    @include mixins.full-size;
  }

  &.article {
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 850px) 1fr;

    & > ::v-deep(*) {
      grid-column: 2 / 3;
    }
  }

  &.center {
    @include mixins.grid-center-items;
  }
}
</style>
