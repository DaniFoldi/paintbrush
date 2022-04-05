<!--!
@name PageTitle
@version 1.0.0
@description PageTitle component to display the main page title
@usage <PageTitle>Hello</PageTitle>
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
