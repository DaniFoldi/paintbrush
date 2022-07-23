<!--!
  @version 1.0.0
  @description Basic spoiler component
  @icon eye
  @category Display
-->
<template>
  <Container :class="`spoiler-container ${expanded ? 'expanded' : ''}`">
    <Container class="pointer" @click="toggle">
      <Icon
        v-if="leftIcon"
        class="spoiler-icon"
        :color="iconColor"
        :name="iconName"
        :variant="iconVariant"
      />
      <Text
        bold
        class="spoiler-title"
        inline
      >
        {{ title }}
      </Text>
      <Icon
        v-if="rightIcon"
        class="spoiler-icon"
        :color="iconColor"
        :name="iconName"
        :variant="iconVariant"
      />
    </Container>
    <slot v-if="expanded" />
  </Container>
</template>

<script lang="ts" setup>
  import { ref, useSpoiler } from '#imports'
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'
  import { Spoiler } from '../scripts/types'


  interface SpoilerProps {
    group?: string // Group of spoilers
    iconColor?: string // Icon color
    iconName?: IconTypes // Icon name
    iconVariant?: IconVariants // Icon variant
    leftIcon?: boolean // Icon is on the left
    rightIcon?: boolean // Icon is on the right
    title: string // Title of the spoiler
    titleColor?: string // Title color
  }

  const props = withDefaults(defineProps<SpoilerProps>(), {
    group: undefined,
    iconColor: 'primary',
    iconName: 'caret-right',
    iconPlacement: 'left',
    iconVariant: 'bold',
    titleColor: 'text'
  })


  const expanded = ref<boolean>(false)
  const uuid = ref('')

  onMounted(() => {
    uuid.value = `spoiler${crypto.randomUUID().replaceAll('-', '')}`
  })

  const spoiler: Spoiler = {
    collapse: () => expanded.value = false,
    group: props.group,
    id: uuid.value
  }

  function toggle() {
    expanded.value = !expanded.value
    if (expanded.value) {
      useSpoiler(spoiler)
    }
  }
</script>

<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
  }

  .spoiler-icon {
    margin-right: 5px;
    transition: .3s transform ease;
  }

  .expanded .spoiler-icon {
    transform: rotate(90deg);
    transition: .3s transform ease;
  }

  .spoiler-title {
    user-select: none;
  }
</style>
