<!--!
  @version 0.1.0
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
  import { computed, ref } from '#imports'


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

  const offset = computed(() => theme.theme === 'system' ? '0px' : (theme.theme === 'light' ? '-20px' : '20px'))
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  div.toggle {
    background: var(--background-highlight);
    border: 2px solid var(--text-shade);
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
      background: var(--background);
      border-radius: 50%;
      height: calc(24px - var(--double-unit));
      position: relative;
      transform: translateX(v-bind(offset));
      // stylelint-disable-next-line plugin/no-low-performance-animation-properties -- Needed for animation
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
