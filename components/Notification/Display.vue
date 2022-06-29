<!--!
  @version 0.1.0
  @category Paintbrush
  @icon notification
-->

<template>
  <div class="notification">
    <div class="notification-header">
      <Icon
        class="leading-icon"
        :color="notification.iconColor"
        :name="notification.iconName"
        :variant="notification.iconVariant"
      />
      <Text class="title" inline sectiontitle>
        {{ notification.title }}
      </Text>
      <Icon
        class="destroy-icon"
        color="red"
        name="x"
        :variant="notification.iconVariant"
        @click="destroy"
      />
    </div>
    <div>
      <Text v-if="notification.content" @click="contentClicked">
        {{ notification.content }}
      </Text>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Notification } from '../../scripts/types'
  import { useNotification } from '#imports'


  interface NotificationDisplayProps {
    notification: Notification
  }

  const props = defineProps<NotificationDisplayProps>()
  const background = useThemeColor('background2')
  const highlight = useThemeColor('backgroundHighlight')

  function destroy() {
    useNotification().destroy(props.notification)
  }

  function contentClicked() {
    if (props.notification.contentClicked) {
      props.notification.contentClicked()
    }
  }
</script>

<style lang="scss" scoped>
  .notification {
    background: v-bind(background);
    border: 1px solid v-bind(highlight);
    border-radius: 5px;
    opacity: 70%;
    padding: 1rem;
    transition: opacity .3s ease;
  }

  .notification:hover {
    opacity: 100%;
    transition: opacity .3s ease;
  }

  .notification-header {
    align-items: center;
    display: grid;
    gap: .5rem;
    grid-template-columns: auto 1fr auto;
  }

  .leading-icon,
  .title {
    justify-self: start;
  }

  .destroy-icon {
    cursor: pointer;
    justify-self: end;
  }
</style>
