<!--!
  @category Form
  @version 1.1.0
  @description Basic toggle component
  @icon toggle-right
-->

<!--##
  <Toggle />
-->

<!--##
  <Toggle color="secondary" thumb-color="secondary" />
-->

<!--##
  <Toggle v-model="rb1" />
  <Text>Toggle value: {{ rb1 }}</Text>
-->

<template>
  <input :checked="modelValue" type="checkbox" @change="onChange">
</template>

<script lang="ts" setup>
  import { useThemeColor, computed } from '#imports'


  interface InputEmits {
    (e: 'update:modelValue', checked: boolean): void // v-model update
  }

  interface ToggleProps {
    color?: string // Background color
    modelValue?: boolean // Current value
    thumbColor?: string // Thumb color
  }

  const emit = defineEmits<InputEmits>()

  const props = withDefaults(defineProps<ToggleProps>(), {
    color: 'primary',
    modelValue: false,
    thumbColor: 'primary'
  })


  const color = computed(() => useThemeColor(props.color).value)
  const background = computed(() => color.value.startsWith('#') ? `${color.value}3f` : color.value)
  const thumb = computed(() => useThemeColor(props.thumbColor).value)

  function onChange(event: Event) {
    emit('update:modelValue', (event?.target as HTMLInputElement).checked)
    console.log((event?.target as HTMLInputElement).checked)
  }
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss';
  @use '#paintbrush/assets/mixins.scss';

  input {
    appearance: none;
    cursor: pointer;
    height: 24px;
    margin-inline: 0;
    width: 48px;

    &::after {
      @include mixins.fade('background', 'color');
      @include common.border;

      background: transparent;
      border-radius: 16px;
      content: '';
      display: block;
      height: 24px;
      margin-top: var(--unit);
      position: relative;
      top: -24px;
      width: 48px;
    }

    &::before {
      @include common.circular;

      background: v-bind(thumb);
      content: '';
      display: block;
      height: calc(24px - var(--double-unit));
      margin-left: calc(var(--unit));
      margin-top: var(--unit);
      position: relative;
      // stylelint-disable-next-line plugin/no-low-performance-animation-properties -- Needed for animation
      transition: margin-left .2s;
      width: calc(24px - var(--double-unit));
      z-index: 1;
    }

    &:checked {

      &::after {
        background: v-bind(background);
      }

      &::before {
        margin-left: calc(24px + var(--unit));
      }
    }
  }
</style>
