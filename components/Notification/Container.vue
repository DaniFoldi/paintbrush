<template>
  <div :class="computeClasses()">
    <NotificationDisplay
      v-for="notification in notifications()"
      :key="notification.title"
      :notification="notification"
    />
  </div>
</template>

<script lang="ts" setup>
  type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

  interface NotificationContainerProps {
    position: Position
  }

  const props = defineProps<NotificationContainerProps>()
  const background = useThemeColor('background2')
  const [ vert, horiz ] = props.position.split('-')

  function notifications() {
    return props.position.startsWith('top')
      ? useNotifications().entries().value.reverse()
      : useNotifications().entries().value
  }

  function computeClasses() {
    return `notification-container ${horiz === 'left' ? 'left' : 'right'} ${vert === 'top' ? 'top' : 'bottom'}`
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
