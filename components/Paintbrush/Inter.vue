<!--!
  @category Font
  @icon text-t
  @version 1.0.0
  @description Used to load Inter font
-->

<template>
  <slot />
</template>

<style lang="scss">
  @use '#paintbrush/assets/fonts.scss';

  @include fonts.inter;
</style>
