<!--!
  @category Font
  @icon text-t
  @version 1.0.0
  @description Used to load Playfair Display font
-->

<template>
  <slot />
</template>

<style lang="scss">
  @use '~/assets/fonts';

  @include fonts.playfair-display;
</style>
