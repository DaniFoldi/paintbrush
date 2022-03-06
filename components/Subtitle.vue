<!--!
@name Subtitle
@version 1.0.0
@description Subtitle component to display subtitles
@usage <Subtitle>Hello</Subtitle>
-->
<template>
  <h2><slot /></h2>
</template>

<style lang="scss" scoped>
@use '../assets/mixins';

h2 {
  @include mixins.vertical-unit-margin;
  @include mixins.standard-text;
}
</style>
