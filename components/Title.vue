<!--!
@name Title
@version 1.0.0
@description Title component to display titles
@usage <Title>Hello</Title>
-->
<template>
  <h1><slot /></h1>
</template>

<style lang="scss" scoped>
@use '../assets/mixins';

h1 {
  @include mixins.vertical-unit-margin;
  @include mixins.standard-text;
}
</style>
