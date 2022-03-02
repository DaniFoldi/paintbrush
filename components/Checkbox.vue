<template>
  <label>
    <input v-model="checked" type="checkbox">
    <Text><slot /></Text>
  </label>
</template>

<script lang="ts">
export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

label {
  @include mixins.two-items;
}
</style>
