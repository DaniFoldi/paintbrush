<!--!
  @category Form
  @version 0.1.0
-->
<template>
  <input :checked="modelValue" type="checkbox" @change="onChange">
</template>

<script lang="ts" setup>
  import { useThemeColor, computed } from '#imports'


  interface InputEmits {
    (e: 'update:modelValue', value: string): void // v-model update
  }

  interface ToggleProps {
    color?: string
    modelValue?: boolean
    thumbColor?: string
  }

  const emit = defineEmits<InputEmits>()

  const props = withDefaults(defineProps<ToggleProps>(), {
    color: 'primary',
    modelValue: false,
    thumbColor: 'primary'
  })


  const color = useThemeColor(props.color)
  const background = computed(() => color.value.startsWith('#') ? `${color.value}3f` : color.value)
  const thumb = useThemeColor(props.thumbColor)

  function onChange(event: Event) {
    emit('update:modelValue', (event?.target as HTMLInputElement).value)
  }
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  input {
    appearance: none;
    height: 24px;
    margin-inline: 0;
    width: 48px;

    &::after {
      background: transparent;
      border: 2px solid v-bind(color);
      border-radius: 16px;
      content: '';
      display: block;
      height: 24px;
      margin-top: var(--unit);
      position: relative;
      top: -24px;
      width: 48px;
      @include mixins.with-fade;
    }

    &::before {
      background: v-bind(thumb);
      border-radius: 50%;
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
