<!--!
  @version 1.0.0
  @icon arrows-in-line-vertical
  @category Layout
-->

<template>
  <div class="button-group">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  div.button-group {
    display: inline-grid;
    gap: calc(var(--unit) * 2);
    grid-auto-columns: auto;
    grid-auto-flow: column;
  }
</style>
