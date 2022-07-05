<!--!
  @version 0.1.0
  @description Enhanced button group
  @icon check-square
  @category Basic
-->
<template>
  <ButtonGroup>
    <Button
      v-for="option in options"
      :key="option"
      :ghost="modelValue !== option"
      @click="selectOption(option)"
    >
      {{ title(option) }}
    </Button>
  </ButtonGroup>
</template>

<script lang="ts" setup>
  interface OptionGroupProps {
    capitalizeTitles?: boolean // whether to capitalize the titles
    modelValue?: string // currently selected option
    options: string[] // options to display
    titles?: string[] // titles to display
  }

  interface OptionGroupEmits {
    (e: 'update:modelValue', value: string): void // v-model update
    (e: 'pb-option-selected', value: { from: string; to: string }): void // emitted when selection is changed
  }

  const emit = defineEmits<OptionGroupEmits>()

  const props = withDefaults(defineProps<OptionGroupProps>(), {
    capitalizeTitles: true,
    modelValue: '',
    titles: undefined
  })


  function title(value: string): string {
    if (props.titles) {
      return props.titles[props.options.indexOf(value)] || value
    } else if (props.capitalizeTitles) {
      return capitalize(value)
    }

    return value
  }

  function selectOption(option: string) {
    const old = props.modelValue
    emit('update:modelValue', option)
    emit('pb-option-selected', { from: old, to: option })
  }

  function capitalize(input: string) {
    if (input.length === 0) {
      return ''
    } else if (input.length === 1) {
      return input.toUpperCase()
    }

    return input.charAt(0).toUpperCase() + input.slice(1)
  }
</script>
