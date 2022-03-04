<template>
  <Text>
    <slot />
  </Text>
</template>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

p {
  font-weight: 800;
  @include mixins.font('inter');
}
</style>
