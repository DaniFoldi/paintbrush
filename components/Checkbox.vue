<!--!
  @version 0.2.0
  @icon check-square
  @category Form
  @description Simple checkbox component
-->

<template>
  <label>
    <input
      :checked="modelValue"
      type="checkbox"
      @change="onChange"
    >
    <Text v-if="autoWrap"><slot /></Text>
    <slot v-else />
  </label>
</template>

<script lang="ts" setup>
  interface CheckboxEmits {
    (e: 'update:modelValue', value: boolean): void // v-model update
  }

  interface CheckboxProps {
    autoWrap?: boolean // wrap the contents in <Text>
    modelValue?: boolean // v-model value
  }

  const emit = defineEmits<CheckboxEmits>()

  withDefaults(defineProps<CheckboxProps>(), {
    autoWrap: true,
    checked: false
  })


  function onChange(event: Event) {
    emit('update:modelValue', (event?.target as HTMLInputElement).checked)
  }
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  label {
    @include mixins.two-items;

    input[type=checkbox] {
      appearance: none;
      border: 2px solid var(--shadow);
      border-radius: var(--unit);
      cursor: pointer;
      height: 24px;
      margin-inline: 0;
      width: 24px;

      &:checked:after {
        border-bottom-left-radius: var(--unit);
        border-color: transparent transparent var(--primary) var(--primary);
        border-style: solid;
        border-width: 0 0 var(--unit) var(--unit);
        content: '';
        display: block;
        height: 12px;
        position: relative;
        transform: rotate(-45deg);
        width: 24px;
      }
    }
  }
</style>
