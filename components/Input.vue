<!--!
  @name Input
  @version 0.3.0
  @icon textbox
-->

<template>
  <label>
    <Text v-if="autoWrap">
      <slot /></Text>
    <slot v-else />
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
    autoWrap?: boolean
    modelValue?: string
    placeholder?: string
    type?: string
  }

  const emit = defineEmits<InputEmits>()

  withDefaults(defineProps<InputProps>(), {
    autoWrap: true,
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

  label {
    display: block;

    &:not(:first-child) {
      margin-top: var(--unit);
    }

    input {
      border: 2px solid var(--background-highlight);
      height: 32px;
      padding-inline: 4px;

      @include mixins.rounded;
      @include mixins.with-fade;
      @include mixins.standard-background;
      @include mixins.standard-text;
    }
  }
</style>
