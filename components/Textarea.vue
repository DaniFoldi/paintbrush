<!--!
  @version 0.2.0
  @icon textbox
  @category Form
  @description Basic text area component
-->

<template>
  <textarea
    :rows="rows"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface TextAreaEmits {
    (e: 'update:modelValue', value: string): void // v-model update
  }

  interface TextAreaProps {
    modelValue?: string // current value
    resize?: boolean | 'horizontal' | 'vertical' // Allow resizing of the textarea
    rows?: number // Number of rows in the textarea
  }

  const emit = defineEmits<TextAreaEmits>()

  const props = withDefaults(defineProps<TextAreaProps>(), {
    modelValue: '',
    resize: false,
    rows: 3
  })

  const resize = computed(() => {
    if (typeof props.resize === 'boolean') {
      return props.resize ? 'both' : 'none'
    }

    return props.resize
  })

  function onInput(event: Event) {
    emit('update:modelValue', (event?.target as HTMLTextAreaElement).value)
  }
</script>

<style lang="scss" scoped>
  @use '~/assets/colors';
  @use '~/assets/mixins';

  textarea {
    @include mixins.rounded;
    @include mixins.fade('background', 'color', 'border-color');
    @include colors.standard-background;
    @include colors.standard-text;
    @include mixins.unit-inline-padding;
    @include mixins.set-100-percent('width');

    border: 2px solid var(--highlight-background);
    resize: v-bind(resize);
  }
</style>
