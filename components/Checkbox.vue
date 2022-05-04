<!--!
  @version 0.1.0
  @icon check-square
-->

<template>
  <label>
    <input v-model="checked" type="checkbox">
    <Text><slot /></Text>
  </label>
</template>

<script lang="ts" setup>
// TODO expose checked as a prop
  const checked = false
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  label {
    @include mixins.two-items;
  }
</style>
