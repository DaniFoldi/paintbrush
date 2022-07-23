<!--!
  @version 1.0.0
  @icon presentation-chart
  @category Display
  @description Display statistics with an optional maximum
-->

<!--##
  <Stat :max="800" :value="500">
  __With max
  </Stat>
-->
<!--##
  <Stat icon-name="airplane-tilt" :value="500">
  __Without max
  </Stat>
-->
<!--##
  <Stat
  __icon-color="red"
  __icon-name="key"
  __:max="20"
  __:value="20"
  >
  __With icon color
  </Stat>
-->

<template>
  <div class="stat-container">
    <Text v-if="autoWrap">
      <slot />
    </Text>
    <Text>
      <Icon
        v-if="iconName"
        :color="iconColor"
        :name="iconName"
        size="28px"
        :variant="iconVariant"
      />{{ value }}{{ displayMax }}
    </Text>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'


  interface StatProps {
    autoWrap?: boolean // Wrap text in Text component
    color?: string // Color of text
    iconColor?: string // Color of icon
    iconName?: IconTypes | undefined // Icon to display
    iconVariant?: IconVariants // Variant of icon
    max?: number | undefined // Maximum value
    value: number // Current value
  }

  const props = withDefaults(defineProps<StatProps>(), {
    autoWrap: true,
    color: 'text',
    iconColor: 'inherit',
    iconName: undefined,
    iconVariant: 'regular',
    max: undefined
  })


  const displayMax = computed(() => props.max ? ` / ${props.max}` : '')
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  div.stat-container {
    display: grid;
    grid-template-columns: 1fr;

    & > :not(:last-child) {
      font-weight: 300;
    }

    & > :last-child {
      color: v-bind(color);
      font-size: 28px;
      font-weight: 600;
      vertical-align: top;
      @include mixins.font('inter');

      i {
        margin-inline-end: var(--unit);
      }
    }
  }
</style>
