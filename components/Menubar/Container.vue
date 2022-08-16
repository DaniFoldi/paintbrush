<!--!
  @version 1.1.1
  @category Navigation
  @icon list
  @description A container for menubar elements
-->
<template>
  <Container class="menubar-container" max>
    <nav>
      <div class="menubar-left">
        <slot name="menubar-left" />
      </div>
      <div class="menubar-middle">
        <slot name="menubar-middle" />
      </div>
      <div class="menubar-right">
        <slot name="menubar-right" />
      </div>
    </nav>
    <Container v-if="wrapContent" class="menubar-content" max>
      <slot name="content" />
    </Container>
    <slot v-else name="content" />
  </Container>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'
  import Container from '../Container.vue'


  interface ContainerProps {
    menuElementSpacing?: string // Space between menu elements in a part
    menuPartSpacing?: string // Spacing between menubar parts
    wrapContent?: boolean // Whether to wrap the content in a container
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    menuElementSpacing: 'unit',
    menuPartSpacing: 'doubleUnit',
    wrapContent: true
  })


  const element = computed(() => useThemeColor(props.menuElementSpacing).value)
  const part = computed(() => useThemeColor(props.menuPartSpacing).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/colors';
  @use '~/assets/grid';
  @use '~/assets/mixins';
  @use '~/assets/sizes';

  .menubar-container {
    @include grid.two-items(1fr, 64px);
    @include grid.grid;
    column-gap: v-bind(part);
  }

  .menubar-content {
    @include mixins.standard-background;
  }

  div.menubar-left, div.menubar-middle, div.menubar-right {
    @include grid.center-items-block;
    @include grid.grid;
    column-gap: v-bind(element);
    grid-auto-columns: max-content;
    grid-auto-flow: column;
  }

  .menubar-right {
    justify-self: end;
  }

  nav {
    @include mixins.fade('background', 'color');
    @include colors.menu-background;
    @include grid.grid;
    grid-template-columns: 1fr auto 1fr;
    position: sticky;
    top: 0;
    z-index: 5;

    & > div:not(:empty) {
      @include sizes.double-unit-padding;
    }
  }
</style>
