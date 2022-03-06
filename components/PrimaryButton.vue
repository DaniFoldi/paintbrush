<!--!
@name PrimaryButton
@version 1.0.0
-->
<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

button {
  @include mixins.rounded;
  @include mixins.no-border;
  @include mixins.primary;
}
</style>
