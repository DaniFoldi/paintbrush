<!--!
  @category Font
  @icon text-t
  @version 1.0.0
  @description Used to load Manrope font
-->

<template>
  <slot />
</template>

<style lang="scss">
  @use '#paintbrush/assets/fonts.scss' as fonts;

  @include fonts.manrope;
</style>
