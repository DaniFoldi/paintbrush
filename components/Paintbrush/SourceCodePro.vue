<!--!
  @category Font
  @icon text-t
  @version 1.0.0
  @description Used to load Source Code Pro font
-->

<template>
  <slot />
</template>

<style lang="scss">
  @use '#paintbrush/assets/fonts.scss' as fonts;

  @include fonts.source-code-pro;
</style>
