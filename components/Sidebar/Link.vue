<!--!
  @name SidebarLink
  @version 1.2.0
  @icon link-simple
  @category Navigation
-->
<template>
  <AutoLink :href="href">
    <Icon
      center
      :color="iconColor"
      :name="icon"
      size="16px"
      :style="iconStyle"
    />
    <Text v-if="autoTitle">
      <slot />
    </Text>
    <slot v-else />
  </AutoLink>
</template>

<script lang="ts" setup>
  import { IconStyles } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'


  interface SidebarEntryProps {
    autoTitle?: boolean
    href: string
    icon: IconTypes
    iconColor?: string
    iconStyle?: IconStyles
  }

  withDefaults(defineProps<SidebarEntryProps>(), {
    autoTitle: true,
    iconColor: 'primary',
    iconStyle: 'regular'
  })
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins.scss';

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
