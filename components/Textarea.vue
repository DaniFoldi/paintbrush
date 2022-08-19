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
  @use '#paintbrush/assets/colors.scss';
  @use '#paintbrush/assets/common.scss';
  @use '#paintbrush/assets/mixins.scss';
  @use '#paintbrush/assets/sizes.scss';

  textarea {
    @include common.rounded;
    @include mixins.fade('background', 'color', 'border-color');
    @include colors.standard-background;
    @include colors.standard-color;
    @include sizes.unit-padding-inline;
    @include mixins.set-100-percent('width');
    @include common.border;

    resize: v-bind(resize);
  }
</style>
