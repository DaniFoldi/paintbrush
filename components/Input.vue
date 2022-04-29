<!--!
  @name Input
  @version 0.0.1
  @icon textbox
-->

<template>
  <label>
    <p>{{ label }}</p>
    <input
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="onInput"
    >
  </label>
</template>

<script lang="ts" setup>
  interface InputEmits {
    (e: 'pb-value-changed', value: string): void
  }

  interface InputProps {
    label: string
    placeholder?: string
    type?: string
    value?: string
  }

  const emit = defineEmits<InputEmits>()

  withDefaults(defineProps<InputProps>(), {
    placeholder: '',
    type: 'text',
    value: ''
  })

  function onInput(event: Event) {
    emit('pb-value-changed', (event?.target as HTMLInputElement).value)
  }
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

input {
  height: 32px;

  @include mixins.rounded;
  @include mixins.no-border;
  @include mixins.double-unit-inline-padding;
}
</style>
