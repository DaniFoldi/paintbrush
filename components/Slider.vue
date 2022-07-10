<!--!
  @version 0.1.0
  @category Form
  @icon slider
  @description Linear slider
-->

<!--##
  <Slider :min="10" :max="20" />
-->

<template>
  <label>
    <Text v-if="autoWrap"><slot /></Text>
    <slot v-else />
    <input
      :max="max"
      :min="min"
      :step="step"
      type="range"
      :value="modelValue"
      @change="onChange"
    >
  </label>
</template>

<script lang="ts" setup>
  interface SliderEmits {
    (e: 'update:modelValue', value: number): void // v-model update
  }

  interface SliderProps {
    autoWrap?: boolean // Whether to wrap content in <Text>
    max: number // Slider maximum value
    min?: number // Slider minimum value
    modelValue?: number // Current value
    step?: number // Slider step size
  }

  const emit = defineEmits<SliderEmits>()

  withDefaults(defineProps<SliderProps>(), {
    autoWrap: false,
    min: 0,
    modelValue: 0,
    step: 1
  })


  function onChange(e: Event) {
    const target = e.target as HTMLInputElement
    const value = Number.parseFloat(target.value)
    emit('update:modelValue', value)
  }
</script>
