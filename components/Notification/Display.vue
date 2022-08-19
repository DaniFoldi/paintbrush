<!--!
  @version 0.1.1
  @category Paintbrush
  @icon notification
  @description A displayed notification
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
  import { useNotification, computed, useThemeColor } from '#imports'
  import { Notification } from '../../scripts/types'


  interface NotificationDisplayProps {
    background?: string // background color of the notification
    highlight?: string // highlight color of the notification
    notification: Notification // The displayed notification
  }

  const props = withDefaults(defineProps<NotificationDisplayProps>(), {
    background: 'background',
    highlight: 'highlight'
  })


  const background = computed(() => useThemeColor(props.background).value)
  const highlight = computed(() => useThemeColor(props.highlight).value)

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
  @use '#paintbrush/assets/common.scss';

  .notification {
    @include common.rounded;

    background: v-bind(background);
    border: 1px solid v-bind(highlight);
    opacity: 70%;
    padding: 1rem;
    transition: opacity .3s ease;

    &:hover {
      opacity: 100%;
    }
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
