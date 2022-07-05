<!--!
  @version 1.0.0
  @icon sticker
  @category Navigation
  @description Categorise sidebar elements
-->
<template>
  <Text bold uppercase>
    <slot />
  </Text>
</template>

<style lang="scss" scoped>
  p {
    color: var(--text-shade);
  }
</style>
