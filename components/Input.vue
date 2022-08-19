<!--!
  @version 0.4.0
  @icon textbox
  @category Form
  @description Basic input component
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

  withDefaults(defineProps<InputProps>(), {
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
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/colors.scss' as colors;
  @use '#paintbrush/assets/grid.scss' as grid;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  label {
    display: block;

    &:not(:first-child) {
      @include sizes.unit-margin-block-start;
    }

    input {
      @include common.rounded;
      @include mixins.fade('background', 'color', 'border-color');
      @include colors.standard-background;
      @include colors.standard-color;
      @include sizes.no-margin-inline;
      @include sizes.unit-padding-inline;
      @include common.border;

      height: 32px;
      width: v-bind('width');
    }
  }
</style>
