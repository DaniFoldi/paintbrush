<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div::v-deep(*) {
  display: inline;
  margin-inline: 0;
}
</style>
