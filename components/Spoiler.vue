<!--!
  @version 1.0.0
  @description Basic spoiler component
  @icon eye
  @usage
  <Spoiler title="Click to reveal the secret">
  __<Text>This is a secret</Text>
  </Spoiler>
  @category Display
-->
<template>
  <Container :class="`spoiler-container ${expanded ? 'expanded' : ''}`">
    <Container class="pointer" @click="toggle">
      <Icon
        v-if="iconPlacement === 'left'"
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
        v-if="iconPlacement === 'right'"
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
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'
  import { Spoiler } from '../scripts/types'
  import { useSpoiler } from '#imports'


  type IconPlacement = 'left' | 'right'

  interface SpoilerProps {
    group?: string
    iconColor?: string
    iconName?: IconTypes
    iconPlacement?: IconPlacement
    iconVariant?: IconVariants
    title: string
    titleColor?: string
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
