<!--!
  @version 1.0.0
  @description Basic radio button
  @icon check-square
  @usage
  <RadioButton id="option1" name="test">Option 1</RadioButton>
  <RadioButton id="option2" name="test">Option 2</RadioButton>
  <RadioButton id="option3" name="test">Option 3</RadioButton>
  @category Basic
-->
<template>
  <Container>
    <input
      :id="id"
      :checked="modelValue"
      :name="name"
      type="radio"
      @change="onChange"
    >
    <Text v-if="autoWrap" inline>
      <slot />
    </Text>
    <slot v-else />
  </Container>
</template>

<script lang="ts" setup>
  interface RadioButtonEmits {
    (e: 'update:modelValue', value: boolean): void
  }

  interface RadioButtonProps {
    autoWrap?: boolean
    id: string
    modelValue?: boolean
    name: string
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
