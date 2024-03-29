<!--!
  @version 1.4.0
  @icon sidebar-simple
  @category Navigation
  @description Container for sidebar elements
-->

<template>
  <div class="sidebar-container">
    <aside>
      <div class="sidebar-top">
        <slot name="sidebar-top" />
      </div>
      <div v-if="!excludeMiddle" class="sidebar-middle">
        <slot name="sidebar-middle" />
      </div>
      <div class="sidebar-bottom">
        <slot name="sidebar-bottom" />
      </div>
    </aside>
    <main>
      <div v-if="wrapContent">
        <slot name="content" />
      </div>
      <slot v-else name="content" />
    </main>
  </div>
</template>

<script lang="ts" setup>
  import { useThemeColor, computed } from '#imports'


  interface SidebarContainerProps {
    excludeMiddle?: boolean // Exclude middle part
    segmentSpacing?: string // Segmentation between top, middle and bottom parts
    sidebarSpacing?: string // Spacing between sidebar parts
    width?: string // Width of the sidebar
    wrapContent?: boolean // Wrap content in a container
  }

  const props = withDefaults(defineProps<SidebarContainerProps>(), {
    excludeMiddle: false,
    segmentSpacing: 'doubleUnit',
    sidebarSpacing: 'doubleUnit',
    width: '260px',
    wrapContent: true
  })


  const spacing = computed(() => useThemeColor(props.sidebarSpacing).value)
  const segment = computed(() => useThemeColor(props.segmentSpacing).value)
  const height = computed(() => props.excludeMiddle ? 'min-content auto' : '1fr auto 1fr')
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/grid.scss' as grid;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  .sidebar-container {
    @include mixins.set-100-percent('width', 'height');
    @include grid.grid;

    grid-template-columns: v-bind(width) 1fr;
    grid-template-rows: 100%;
  }

  div.sidebar-top, div.sidebar-middle, div.sidebar-bottom {
    @include grid.grid;

    row-gap: v-bind(segment);
  }

  .sidebar-bottom {
    align-self: end;
  }

  aside, main {
    @include mixins.fade('background', 'color');

    display: grid;
    grid-template-columns: 100%;
  }

  main {
    background: var(--background);
    grid-template-rows: 1fr;
    max-height: 100vh;

    & > ::v-deep(div) {
      overflow-y: auto;
    }
  }

  aside {
    background: var(--menu-background);
    grid-template-rows: v-bind(height);
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    row-gap: v-bind(spacing);

    & > div:not(:empty) {
      @include sizes.double-unit-padding;
    }
  }
</style>
