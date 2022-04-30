<!--!
  @name SidebarLink
  @version 1.0.0
  @icon link-simple
  @category Navigation
-->
<template>
  <AutoLink :href="href" :reload="reload">
    <Icon
      center
      :color="iconColor"
      :name="icon"
      size="16px"
      :style="iconStyle"
    />
    <Text><slot /></Text>
  </AutoLink>
</template>

<script lang="ts" setup>
  import { IconStyles } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'


  interface SidebarEntryProps {
    iconColor?: string
    iconStyle?: IconStyles
    href: string
    icon: IconTypes
    reload?: boolean
  }

  withDefaults(defineProps<SidebarEntryProps>(), {
    iconColor: 'primary',
    iconStyle: 'regular',
    reload: false
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  a {
    font-size: 20px;
    user-select: none;

    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.unit-padding;
    @include mixins.two-items;

    i {
      @include mixins.unit-inline-margin;
    }

    p {
      @include mixins.no-margin;
    }

    &:hover, &.router-link-active {
      background: var(--background-2);
      text-decoration: none;
    }

    &:active {
      background: var(--background-highlight);
    }
  }
</style>
