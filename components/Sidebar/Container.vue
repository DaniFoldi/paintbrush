<!--!
  @version 1.3.0
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
    sidebarSpacing?: string // Spacing between sidebar parts
    wrapContent?: boolean // Wrap content in a container
  }

  const props = withDefaults(defineProps<SidebarContainerProps>(), {
    excludeMiddle: false,
    sidebarSpacing: 'double-unit',
    wrapContent: true
  })


  const spacing = computed(() => useThemeColor(props.sidebarSpacing).value)
  const height = computed(() => props.excludeMiddle ? 'min-content auto' : '1fr auto 1fr')
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins';

  .sidebar-container {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: 100%;
    row-gap: v-bind(spacing);
    @include mixins.absolute-full-size;
  }

  div.sidebar-top, div.sidebar-middle, div.sidebar-bottom {
    display: grid;
    row-gap: calc(2 * var(--unit));
  }

  .sidebar-bottom {
    align-self: end;
  }

  aside, main {
    display: grid;
    grid-template-columns: 100%;
    @include mixins.with-fade;
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

    & > div:not(:empty) {
      @include mixins.double-unit-padding;
    }
  }
</style>
