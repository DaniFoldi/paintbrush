<!--!
  @version 1.1.0
  @icon keyboard
  @category Visual
  @description Elegantly present keyboard shortcuts
-->

<template>
  <span>
    <template v-for="key in keys" :key="key">
      <Icon
        v-if="key === 'meta' || (key === 'mod' && applePlatform)"
        :name="applePlatform ? 'command' : 'windows-logo'"
        variant="bold"
      />
      <Icon v-else-if="(key === 'alt' || key === 'option') && applePlatform" name="option" variant="bold" />
      <kbd v-else-if="key === 'alt' || key === 'option'">Alt</kbd>
      <kbd v-else-if="key === 'ctrl' && applePlatform">^</kbd>
      <kbd v-else-if="key === 'ctrl' || key === 'mod'">Ctrl</kbd>
      <Icon v-else-if="key === 'shift'" name="arrow-fat-up" variant="bold" />
      <Icon v-else-if="key === 'caps'" name="arrow-fat-line-up" variant="bold" />
      <Icon v-else-if="key === 'tab'" name="arrow-line-right" variant="bold" />
      <Icon v-else-if="key === 'backspace'" name="backspace" variant="bold" />
      <Icon v-else-if="key === 'return'" name="key-return" variant="bold" />
      <Icon v-else-if="key === 'left'" name="arrow-left" variant="bold" />
      <Icon v-else-if="key === 'right'" name="arrow-right" variant="bold" />
      <Icon v-else-if="key === 'up'" name="arrow-up" variant="bold" />
      <Icon v-else-if="key === 'down'" name="arrow-down" variant="bold" />

      <kbd v-else>
        {{ key.toLocaleUpperCase() }}
      </kbd>
    </template>
  </span>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor, isApplePlatform } from '#imports'


  interface ShortcutProps {
    color?: string // Text color
    keys: string[] // List of keys
  }

  const props = withDefaults(defineProps<ShortcutProps>(), {
    color: 'primary'
  })

  const color = computed(() => useThemeColor(props.color).value)
  const applePlatform = isApplePlatform()
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss';

  span {
    @include common.rounded;
    border: 1px solid v-bind(color);
    display: inline-grid;
    gap: calc(.5 * var(--unit));
    grid-auto-flow: column;
    padding-inline: var(--unit);
    place-items: center;

    i, kbd {
      color: v-bind(color);
      font-size: 14px;
    }

    kbd {
      min-width: 14px;
      text-align: center;
    }
  }
</style>
