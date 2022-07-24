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
  @use '../assets/mixins.scss';

  textarea {
    border: 2px solid var(--highlight-background);
    margin: var(--double-unit) 0;
    padding-inline: var(--unit);
    resize: v-bind(resize);
    width: 100%;

    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.standard-background;
    @include mixins.standard-text;
  }
</style>
