<!--!
  @version 1.0.0
  @icon keyboard
-->
<template>
  <span>
    <template v-for="key in keys" :key="key">
      <Icon
        v-if="key === 'meta'"
        :name="isApple() ? 'command' : 'windows-logo'"
        variant="bold"
      />
      <Icon v-else-if="(key === 'alt' || key === 'option') && isApple()" name="option" variant="bold" />
      <kbd v-else-if="key === 'alt' || key === 'option'">Alt</kbd>
      <kbd v-else-if="key === 'ctrl' && isApple()">^</kbd>
      <kbd v-else-if="key === 'ctrl'">Ctrl</kbd>
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
  import { computed, useThemeColor } from '#imports'


  interface ShortcutProps {
    color?: string
    keys: string[]
  }

  const props = withDefaults(defineProps<ShortcutProps>(), {
    color: 'primary'
  })


  function isApple() {
    const platform = navigator.platform
    return [ 'iPhone', 'iPod', 'iPad', 'Mac' ].some(p => platform.includes(p))
  }

  const color = computed(() => useThemeColor(props.color))
</script>

<style lang="scss" scoped>
  span {
    border: 1px solid v-bind('color.value');
    border-radius: var(--unit);
    display: inline-grid;
    gap: calc(.5 * var(--unit));
    grid-auto-flow: column;
    padding-inline: var(--unit);
    place-items: center;

    i, kbd {
      color: v-bind('color.value');
      font-size: 14px;
    }

    kbd {
      min-width: 14px;
      text-align: center;
    }
  }
</style>
