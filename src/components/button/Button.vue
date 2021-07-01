<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
@use '../../scss/constants';

button {
  background: constants.$primary;
  color: constants.$text-on-primary;
  border: 0;
  border-radius: constants.$base-size * 2;
  padding: constants.$base-size * 2 constants.$base-size * 4;
  height: constants.$base-size * 10;
  font-size: constants.$font-size-medium;
  text-transform: capitalize;
  font-weight: 500;
  // todo maybe change margin
  margin: constants.$base-size;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    // todo animate
  }

  &:focus {
    // todo animate
  }
}
</style>
