<!--!
  @version 0.0.2
  @icon notification
  @description Place a badge in the corner of any element
  @category Layout
-->

<template>
  <slot />
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface ContainerProps {
    background?: string // Background color of the badge
    color?: string // Text of the badge
    content: string // Content of the badge
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' // Position of the badge
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    background: 'primary',
    color: 'primaryText',
    position: 'top-right'
  })


  const background = computed(() => useThemeColor(props.background).value)
  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';
  @use '~/assets/fonts';

  :not(.pb-specific):slotted( > * ) {

    &.left-badge {
      position: relative;

      &::before {
        @include fonts.font('inter');

        background: v-bind(background);
        border-radius: 9px;
        color: v-bind(color);
        content: v-bind(content);
        display: inline;
        font-size: 11px;
        height: 18px;
        left: -7px;
        line-height: 18px;
        min-width: 18px;
        padding-inline: 2px;
        position: absolute;
        text-align: center;
        top: -7px;
        vertical-align: middle;
      }
    }

    &.right-badge {
      position: relative;

      &::after {
        @include fonts.font('inter');

        background: v-bind(background);
        border-radius: 9px;
        color: v-bind(color);
        content: v-bind(content);
        display: inline;
        font-size: 11px;
        height: 18px;
        line-height: 18px;
        min-width: 18px;
        padding-inline: 2px;
        position: absolute;
        right: -7px;
        text-align: center;
        top: -7px;
        vertical-align: middle;
      }
    }
  }
</style>
