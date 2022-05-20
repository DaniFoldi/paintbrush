<!--!
  @version 0.2.0
  @icon moon
  @category Paintbrush
  @usage <ThemeToggle />
  @description Display a toggle for the page theme
-->

<template>
  <div class="toggle" @click="toggle">
    <Icon color="inherit" name="sun" size="12px" />
    <div class="selected" />
    <Icon color="inherit" name="moon" size="12px" />
  </div>
</template>

<script lang="ts" setup>
  import { useTheme } from '../stores/theme'
  import { computed, ref, useThemeColor } from '#imports'


  interface ThemeToggleProps {
    background?: string
    border?: string
    thumbColor?: string
  }

  const props = withDefaults(defineProps<ThemeToggleProps>(), {
    background: 'backgroundHighlight',
    border: 'textShade',
    thumbColor: 'background'
  })


  const theme = useTheme()
  const last = ref('')

  function toggle() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (theme.theme === 'system') {
      if (last.value === '') {
        theme.theme = dark ? 'light' : 'dark'
      } else {
        theme.theme = last.value === 'light' ? 'dark' : 'light'
      }
    } else {
      last.value = theme.theme
      theme.theme = 'system'
    }
  }

  const thumb = useThemeColor(props.thumbColor)
  const offset = computed(() => theme.theme === 'system' ? '0px' : (theme.theme === 'light' ? '-20px' : '20px'))
  const background = useThemeColor(props.background)
  const border = useThemeColor(props.border)
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  div.toggle {
    background: v-bind(background);
    border: 2px solid v-bind(border);
    border-radius: 16px;
    box-sizing: content-box;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: calc(24px - var(--unit));
    margin-inline: 0;
    place-items: center;
    width: calc(64px - var(--unit));

    @include mixins.with-fade;

    & > .selected {
      background: v-bind(thumb);
      border-radius: 50%;
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
