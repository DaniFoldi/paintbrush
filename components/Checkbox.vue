<!--!
  @name Checkbox
  @version 1.0.0
  @icon check-square
-->
<template>
  <label>
    <input v-model="checked" type="checkbox">
    <Text><slot /></Text>
  </label>
</template>

<script lang="ts" setup>
  const checked = false
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  label {
    @include mixins.two-items;
  }
</style>
