<!--!
  @version 1.0.0
  @category Form
  @icon sliders-horizontal
  @description Linear slider
-->

<!--##
  <Slider :max="20" :min="10" />
-->

<!--##
  <Slider v-model="rn1" :max="20" :min="10" />
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
    max?: number // Slider maximum value
    min?: number // Slider minimum value
    modelValue?: number // Current value
    step?: number // Slider step size
  }

  const emit = defineEmits<SliderEmits>()

  withDefaults(defineProps<SliderProps>(), {
    autoWrap: false,
    max: 100,
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

<style lang="scss" scoped>
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/colors.scss' as colors;
  @mixin track {
    @include colors.shadow-background;
    appearance: none;
    border-radius: 2px;
    height: var(--unit);
  }

  @mixin thumb {
    @include colors.primary-background;
    @include common.circular;
    appearance: none;
    height: 15px;
    width: 15px;
  }

  input[type=range] {
    @include colors.transparent-background;
    @include mixins.set-100-percent('width');

    appearance: none;
    overflow: visible;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      @include track;
    }

    &::-moz-range-track {
      @include track;
    }

    &::-webkit-slider-thumb {
      @include thumb;
      margin-top: -5px;
    }

    &::-moz-range-thumb {
      @include thumb;
    }
  }
</style>
