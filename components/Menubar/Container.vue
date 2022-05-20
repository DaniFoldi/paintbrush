<!--!
  @version 1.1.1
  @category Navigation
  @icon list
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
    <Container v-if="wrapContent" max>
      <slot name="content" />
    </Container>
    <slot v-else name="content" />
  </Container>
</template>

<script lang="ts" setup>
  import Container from '../Container.vue'
  import { useThemeColor } from '#imports'


  interface ContainerProps {
    menuElementSpacing?: string
    menuPartSpacing?: string // Spacing between menubar parts
    wrapContent?: boolean
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    menuElementSpacing: 'unit',
    menuPartSpacing: 'double-unit',
    wrapContent: true
  })


  const element = useThemeColor(props.menuElementSpacing)
  const part = useThemeColor(props.menuPartSpacing)
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins';

  .menubar-container {
    column-gap: v-bind(part);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;

    & > div {
      background: var(--background-2);
    }
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
    background: var(--background);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 5;

    @include mixins.with-fade;

    & > div:not(:empty) {
      @include mixins.double-unit-padding;
    }
  }
</style>
