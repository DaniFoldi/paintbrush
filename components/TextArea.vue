<!--!
  @version 0.1.0
  @icon textbox
  @category Form
  @description Basic text area component
  @usage <TextArea resize :rows="5" />
-->
<template>
  <Container class="text-area-container">
    <textarea
      :disabled="disabled"
      :form="form"
      :name="name"
      :readonly="readonly"
      :rows="rows"
      :value="modelValue"
      :wrap="wrap"
      @input="onInput"
    />
  </Container>
</template>

<script lang="ts" setup>
  type WrapType = 'hard' | 'soft' | 'off'
  type Resize = boolean | 'horizontal' | 'vertical'

  interface TextAreaEmits {
    (e: 'update:modelValue', value: string): void
  }

  interface TextAreaProps {
    disabled?: boolean
    form?: string
    modelValue?: string
    name?: string
    placeholder?: string
    readonly?: boolean
    resize?: Resize
    rows?: number
    wrap?: WrapType
  }

  const emit = defineEmits<TextAreaEmits>()

  const props = withDefaults(defineProps<TextAreaProps>(), {
    disabled: false,
    form: undefined,
    modelValue: '',
    name: undefined,
    placeholder: '',
    readonly: false,
    resize: false,
    rows: 3,
    wrap: 'soft'
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
    border: 2px solid var(--background-highlight);
    margin-inline: 0;
    padding-inline: 0;
    resize: v-bind(resize);
    width: 100%;

    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.standard-background;
    @include mixins.standard-text;
  }

  .text-area-container {
    margin: var(--double-unit) 0;
  }
</style>
