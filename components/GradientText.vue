<!--!
@name GradientText
@version 1.0.0
-->
<template>
  <em><slot /></em>
</template>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

em {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  background-clip: text;
  color: transparent;
  font-style: normal;
  @include mixins.font('inter');
}
</style>
