<!--!
  @version 1.0.0
  @description Enhanced button group
  @icon arrows-in-line-vertical
  @usage
  <OptionGroup :options="[ 'option 1', 'option 2', 'option 3' ]" />
  @category Layout
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
    capitalizeTitles?: boolean
    modelValue?: string
    options: string[]
    titles?: string[]
  }

  interface OptionGroupEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'option-selected', value: { from: string; to: string }): void
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
    emit('option-selected', { from: old, to: option })
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
