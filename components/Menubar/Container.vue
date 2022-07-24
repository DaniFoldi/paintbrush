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
  @use '../../assets/mixins';

  .menubar-container {
    column-gap: v-bind(part);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
  }

  .menubar-content {
    background: var(--background);
  }

  div.menubar-left, div.menubar-middle, div.menubar-right {
    align-items: center;
    column-gap: v-bind(element);
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
  }

  .menubar-right {
    justify-self: end;
  }

  nav {
    background: var(--menu-background);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    position: sticky;
    top: 0;
    z-index: 5;

    @include mixins.with-fade;

    & > div:not(:empty) {
      @include mixins.double-unit-padding;
    }
  }
</style>
