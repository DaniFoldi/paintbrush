<!--!
  @version 0.4.0
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
    (e: 'update:modelValue', value: string): void // v-model update
  }

  interface InputProps {
    autoWrap?: boolean // Wrap text in Text component
    modelValue?: string // v-model value
    placeholder?: string // Placeholder text
    type?: string // Input type
    width?: string // Width of input
  }

  const emit = defineEmits<InputEmits>()

  const props = withDefaults(defineProps<InputProps>(), {
    autoWrap: true,
    modelValue: '',
    placeholder: '',
    type: 'text',
    width: '100%'
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
      margin-inline: 0;
      padding-inline: 4px;
      width: v-bind('props.width');

      @include mixins.rounded;
      @include mixins.with-fade;
      @include mixins.standard-background;
      @include mixins.standard-text;
    }
  }
</style>
