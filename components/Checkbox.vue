<!--!
  @version 0.1.0
  @icon check-square
  @category Form
-->

<template>
  <label>
    <input
      type="checkbox"
      :value="modelValue"
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
    autoWrap?: boolean
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
  }
</style>
