<!--!
  @version 1.1.0
  @icon moon
  @category Paintbrush
  @description Thank you for displaying our badge
-->

<!--##
  <PoweredBy />
-->

<template>
  <div class="toggle" @click="toggle">
    <Icon
      color="inherit"
      name="sun"
      size="12px"
      @click.stop="toggle('light')"
    />
    <div class="selected" />
    <Icon
      color="inherit"
      name="moon"
      size="12px"
      @click.stop="toggle('dark')"
    />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor, usePreferredDark } from '#imports'
  import { useTheme } from '../stores/theme'


  interface ThemeToggleProps {
    background?: string // Background color
    thumbColor?: string // Thumb color
  }

  const props = withDefaults(defineProps<ThemeToggleProps>(), {
    background: 'background',
    thumbColor: 'shadowText'
  })


  const theme = useTheme()
  const dark = computed(() => usePreferredDark())

  function toggle(to?: string | MouseEvent) {
    if (to === 'light' || to === 'dark') {
      theme.set(theme.theme === to ? 'system' : to)
      return
    }

    if (theme.theme === 'system') {
      if (theme.last === '') {
        theme.set(dark.value ? 'light' : 'dark')
      } else {
        theme.set(theme.last === 'light' ? 'dark' : 'light')
      }
    } else {
      theme.set('system')
    }
  }

  const thumb = computed(() => useThemeColor(props.thumbColor).value)
  const offset = computed(() => theme.theme === 'system' ? '0px' : (theme.theme === 'light' ? '-20px' : '20px'))
  const background = computed(() => useThemeColor(props.background).value)
  const border = computed(() => useThemeColor(props.border).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/common';
  @use '~/assets/mixins';

  div.toggle {
    @include mixins.fade('background', 'color', 'border-color');
    @include common.border;

    background: v-bind(background);
    border-radius: 16px;
    box-sizing: content-box;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: calc(24px - var(--unit));
    margin-inline: 0;
    place-items: center;
    width: calc(64px - var(--unit));

    & > .selected {
      @include common.circular;

      background: v-bind(thumb);
      cursor: pointer;
      height: calc(24px - var(--double-unit));
      position: relative;
      transform: translateX(v-bind(offset));
      transition: transform .2s;
      width: calc(24px - var(--double-unit));
    }

    i {
      z-index: 2;
    }

    & > :last-child {
      grid-column-start: -2;
    }
  }
  </style>
