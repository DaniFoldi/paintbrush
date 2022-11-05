<!--!
  @version 0.1.1
  @category Paintbrush
  @icon notification
  @description A container for Paintbrush notifications
-->

<template>
  <div class="notification-container" :class="{ top, bottom, left, right }">
    <NotificationDisplay
      v-for="notification in notifications()"
      :key="notification.title"
      :notification="notification"
    />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useNotification, useThemeColor } from '#imports'


  interface NotificationContainerProps {
    background?: string // Background color of container
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' // Position of the container
  }

  const props = withDefaults(defineProps<NotificationContainerProps>(), {
    background: 'menuBackground'
  })


  const background = computed(() => useThemeColor(props.background).value)
  const top = computed(() => props.position.startsWith('top'))
  const bottom = computed(() => props.position.startsWith('bottom'))
  const left = computed(() => props.position.endsWith('left'))
  const right = computed(() => props.position.endsWith('right'))

  function notifications() {
    return props.position.startsWith('top')
      ? useNotification().entries().value.reverse()
      : useNotification().entries().value
  }
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss' as common;

  .notification-container {
    display: grid;
    gap: 1rem;
    max-width: 30rem;
    padding: 1rem;
    position: absolute;
    width: 30rem;
  }

  .notification {
    @include common.rounded;

    background: v-bind(background);
    opacity: 80%;
    transition: opacity .3s ease;
  }

  .notification:hover {
    opacity: 100%;
    transition: opacity .3s ease;
  }

  .bottom {
    bottom: 0;
  }

  .top {
    top: 0;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
</style>
