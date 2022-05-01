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
    modelValue?: string
    placeholder?: string
    type?: string
  }

  const emit = defineEmits<InputEmits>()

  withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    placeholder: '',
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
    @include mixins.with-fade;
    @include mixins.standard-background;
    @include mixins.standard-text;
    @include mixins.double-unit-inline-padding;
  }
</style>
