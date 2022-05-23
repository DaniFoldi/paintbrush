<!--!
  @icon dots-three
  @version 1.0.1
  @category Layout
  @description Automatically paginate content
  @usage <Pagination :total-items="110" :items-per-page="25" />
-->

<template>
  <ButtonGroup height="32px" width="32px">
    <IconButton
      icon="caret-left"
      icon-size="16px"
      icon-variant="bold"
      :left-icon="false"
      @click="selectPage(page - 1)"
    />
    <template v-for="button of visibleButtons" :key="button">
      <Button v-if="typeof button === 'number'" :ghost="button !== page" @click="selectPage(button)">
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
      @click="selectPage(page + 1)"
    />
  </ButtonGroup>
</template>

<script lang="ts" setup>
  import type{ ComputedRef } from 'vue'
  import { computed, ref } from '#imports'


  interface PaginationEmits {
    (e: 'update:modelValue', value: number): void
  }

  interface PaginationProps {
    itemsPerPage?: number
    maxButtons?: number
    modelValue?: number
    totalItems: number
  }

  const emit = defineEmits<PaginationEmits>()
  const props = withDefaults(defineProps<PaginationProps>(), {
    itemsPerPage: 10,
    maxButtons: 7,
    modelValue: 1
  })

  const page = ref(props.modelValue)
  const pages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

  const visibleButtons: ComputedRef<('ellipsis' | number)[]> = computed(() => {
    const buttons: ('ellipsis' | number)[] = [ page.value ]

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

    page.value = newPage
    emit('update:modelValue', newPage)
  }
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  button {
    @include mixins.no-margin;
  }
</style>
