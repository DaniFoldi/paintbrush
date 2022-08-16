<!--!
  @icon dots-three
  @version 1.0.2
  @category Layout
  @description Automatically paginate content
-->

<template>
  <ButtonGroup height="32px" width="32px">
    <IconButton
      icon="caret-left"
      icon-size="16px"
      icon-variant="bold"
      :left-icon="false"
      @click="selectPage(modelValue - 1)"
    />
    <template v-for="button of visibleButtons" :key="button">
      <Button v-if="typeof button === 'number'" :ghost="button !== modelValue" @click="selectPage(button)">
        {{ button }}
      </Button>
      <Container v-else-if="button === 'ellipsis'" center max>
        <Icon
          color="text"
          name="dots-three"
          size="20px"
          variant="bold"
        />
      </Container>
    </template>
    <IconButton
      icon="caret-right"
      icon-size="16px"
      icon-variant="bold"
      :left-icon="false"
      @click="selectPage(modelValue + 1)"
    />
  </ButtonGroup>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'
  import type { ComputedRef } from 'vue'


  interface PaginationEmits {
    (e: 'update:modelValue', value: number): void // v-model update
  }

  interface PaginationProps {
    itemsPerPage?: number // Number of items per page
    maxButtons?: number // Maximum number of buttons to show
    modelValue?: number // Current page
    totalItems: number // Total number of items
  }

  const emit = defineEmits<PaginationEmits>()

  const props = withDefaults(defineProps<PaginationProps>(), {
    itemsPerPage: 10,
    maxButtons: 7,
    modelValue: 1
  })


  const pages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

  const visibleButtons: ComputedRef<('ellipsis' | number)[]> = computed(() => {
    const buttons: ('ellipsis' | number)[] = [ props.modelValue ]

    while (buttons.length < props.maxButtons) {
      const lowerValue = (buttons[0] as number) - 1
      const upperValue = (buttons[buttons.length - 1] as number) + 1
      const l = buttons.length
      if (lowerValue >= 1) {
        buttons.unshift(lowerValue)
      }
      if (upperValue <= pages.value && buttons.length < props.maxButtons) {
        buttons.push(upperValue)
      }
      if (buttons.length === l) {
        break
      }
    }

    if (buttons[0] as number > 1) {
      buttons.shift()
      buttons.shift()
      buttons.unshift(1, 'ellipsis')
    }
    if (buttons[buttons.length - 1] as number < pages.value) {
      buttons.pop()
      buttons.pop()
      buttons.push('ellipsis', pages.value)
    }
    return buttons
  })

  function selectPage(newPage: number) {
    if (newPage < 1 || newPage > pages.value) {
      return
    }

    emit('update:modelValue', newPage)
  }
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';

  button {
    @include mixins.no-margin;
  }
</style>
