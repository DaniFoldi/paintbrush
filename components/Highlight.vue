<!--!
  @category Visual
  @icon traffic-sign
  @version 1.1.3
  @description Draw the user's attention to a piece of text
-->

<!--##
  <Highlight
  __icon-color="orange"
  __icon-name="warning"
  __icon-variant="bold"
  __warning
  >
  __This is a warning
  </Highlight>
-->
<!--##
  <Highlight error>
  __Error
  </Highlight>
-->
<!--##
  <Highlight quote>
  __Quote
  </Highlight>
-->
<!--##
  <Highlight icon-name="check-circle" success>
  __Success
  </Highlight>
-->
<!--##
  <Highlight :auto-wrap="false" info>
  __<Text>
  ____<Text bold part>
  ______Bold
  ____</Text>
  ____<Text italic part>
  ______italic
  ____</Text>
  __</Text>
  </Highlight>
-->

<template>
  <blockquote :class="{ 'with-icon': iconName }">
    <Icon
      v-if="iconName"
      :color="iconColor"
      :name="iconName"
      :variant="iconVariant"
    />
    <Text v-if="autoWrap">
      <slot />
    </Text>
    <slot v-else />
  </blockquote>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'


  interface HighlightProps {
    autoWrap?: boolean // Wrap the text in Text
    error?: boolean // Error highlight type
    iconColor?: string // Icon color
    iconName?: IconTypes | undefined // Icon name
    iconVariant?: IconVariants // Icon variant
    info?: boolean // Info highlight type
    quote?: boolean // Quote highlight type
    success?: boolean // Success highlight type
    warning?: boolean // Warning highlight type
  }

  const props = withDefaults(defineProps<HighlightProps>(), {
    autoWrap: true,
    error: false,
    iconColor: 'inherit',
    iconName: undefined,
    iconVariant: 'regular',
    info: false,
    quote: false,
    success: false,
    warning: false
  })

  const color = computed(() => {
    if (props.error) {
      return 'red-5'
    }
    if (props.warning) {
      return 'orange-5'
    }
    if (props.success) {
      return 'green-5'
    }
    if (props.info) {
      return 'blue-5'
    }
    if (props.quote) {
      return 'gray-5'
    }
    return 'highlightBackground'
  })

  const border = computed(() => useThemeColor(color.value).value)
  const background = computed(() => border.value.startsWith('#') ? `${border.value}${useThemeColor('transparentize').value}` : border.value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';
  @use '~/assets/sizes';
  @use '~/assets/grid';

  blockquote {
    @include sizes.double-unit-margin-block;
    @include sizes.double-unit-padding;
    background: v-bind(background);
    border-left: 3px solid v-bind(border);

    &.with-icon {
      @include grid.grid;
      @include grid.two-items;
    }
  }
</style>
