<!--!
  @version 1.2.0
  @icon sidebar-simple
  @category Navigation
-->
<template>
  <div class="sidebar-container">
    <aside>
      <div class="sidebar-top">
        <slot name="sidebar-top" />
      </div>
      <div class="sidebar-middle">
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
  import { useThemeColor } from '#imports'


  interface SidebarContainerProps {
    sidebarSpacing?: string // Spacing between sidebar parts
    wrapContent?: boolean
  }

  const props = withDefaults(defineProps<SidebarContainerProps>(), {
    sidebarSpacing: 'double-unit',
    wrapContent: true
  })


  const spacing = useThemeColor(props.sidebarSpacing)
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
    background: var(--background-2);
    grid-template-rows: 1fr;
    max-height: 100vh;

    & > ::v-deep(div) {
      overflow-y: auto;
    }
  }

  aside {
    background: var(--background);
    grid-template-rows: 1fr auto 1fr;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    & > div:not(:empty) {
      @include mixins.double-unit-padding;
    }
  }
</style>
