<!--!
@name Text
@version 1.0.0
@description Text component to display text
@usage <Text>Lorem ipsum dolor sit amet</Text>
-->
<template>
  <p><slot /></p>
</template>

<style lang="scss" scoped>
@use '../assets/mixins';

p {
  @include mixins.vertical-unit-margin;
  @include mixins.standard-text;
}
</style>
