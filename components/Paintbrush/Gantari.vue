<!--!
  @category Font
  @icon text-t
  @version 1.0.0
  @description Used to load Gantari font
-->

<template>
  <slot />
</template>

<style lang="scss">
  @use '#paintbrush/assets/fonts.scss';

  @include fonts.gantari;
</style>
