<!--!
  @version 1.0.0
  @description Basic radio button
  @icon check-square
  @category Basic
-->
<template>
  <label>
    <input
      :id="id"
      :checked="modelValue"
      :name="name"
      type="radio"
      @change="onChange"
    >
    <Text v-if="autoWrap"><slot /></Text>
    <slot v-else />
  </label>
</template>

<script lang="ts" setup>
  interface RadioButtonEmits {
    (e: 'update:modelValue', value: boolean): void // v-model update
  }

  interface RadioButtonProps {
    autoWrap?: boolean // whether to wrap the content in a Text component
    id: string // id of the input element
    modelValue?: boolean // value of the input element
    name: string // name of the input element
  }

  const emit = defineEmits<RadioButtonEmits>()

  withDefaults(defineProps<RadioButtonProps>(), {
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
  }
</style>
