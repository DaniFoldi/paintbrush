<template>
  <details>
    <summary>
      <Text bold inline>
        {{ title }}
      </Text>
    </summary>
    <slot />
  </details>
</template>

<script lang="ts" setup>
  interface CategoryProps {
    title: string
  }

  defineProps<CategoryProps>()
</script>

<style lang="scss" scoped>
details {
  position: sticky;

  & > summary {
    border: 1px solid red;
    cursor: pointer;
    font-weight: 800;
    position: relative;
    text-transform: uppercase;
    p {
      color: var(--text-shade);
    }

    &::after {
      aspect-ratio: 1/1;
      background: var(--text);
      bottom: 20%;
      clip-path: path('M 5 5 L 10 5 L 10 10 L 5 10 Z');
      content: '';
      display: inline;
      position: absolute;
      right: 0;
      top: 20%;
      transition: clip-path .2s;
      will-change: clip-path;
    }

    &::marker, &::-webkit-details-marker {
      content: '';
      display: none;
    }
  }

  &[open] > summary::after {
    //clip-path: polygon(100% 45%, 100% 55%, 50% 55%, 0 55%, 0 45%, 50% 45%);
    clip-path: path('M 15 5 L 20 5 L 20 10 L 15 10 Z');
  }
}
</style>
