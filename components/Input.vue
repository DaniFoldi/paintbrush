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
      :value="modelValue"
      @input="onInput"
    >
  </label>
</template>

<script lang="ts" setup>
  interface InputEmits {
    (e: 'update:modelValue', value: string): void
  }

  interface InputProps {
    label: string
    placeholder?: string
    modelValue?: string
    type?: string
  }

  const emit = defineEmits<InputEmits>()

  withDefaults(defineProps<InputProps>(), {
    placeholder: '',
    modelValue: '',
    type: 'text'
  })

  function onInput(event: Event) {
    emit('update:modelValue', (event?.target as HTMLInputElement).value)
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
