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
  interface NotificationContainerProps {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  }

  const props = defineProps<NotificationContainerProps>()


  const background = useThemeColor('background2')
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
  .notification-container {
    display: grid;
    gap: 1rem;
    max-width: 30rem;
    padding: 1rem;
    position: absolute;
    width: 30rem;
  }

  .notification {
    background: v-bind(background);
    border-radius: 5px;
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
