<template>
  <div class="center">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

.center {
  @include mixins.grid-center-items;
}
</style>
