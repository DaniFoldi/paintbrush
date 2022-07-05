<!--!
  @version 1.4.0
  @icon link-simple
  @category Navigation
  @require phosphor-icons
  @description A link for sidebar items
-->

<template>
  <AutoLink :class="{ 'with-icon': icon, indent }" :href="href">
    <Icon
      v-if="icon"
      center
      :color="iconColor"
      :name="icon"
      size="16px"
      :variant="iconVariant"
    />
    <Text v-if="autoWrap">
      <slot />
    </Text>
    <slot v-else />
  </AutoLink>
</template>

<script lang="ts" setup>
  import { IconVariants } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'


  interface SidebarLinkProps {
    autoWrap?: boolean // Wrap text in Text component
    href: string // Link to navigate to
    icon: undefined | IconTypes // Icon to display
    iconColor?: string // Color of icon
    iconVariant?: IconVariants // Variant of icon
    indent?: boolean // Indent link
  }

  withDefaults(defineProps<SidebarLinkProps>(), {
    autoWrap: true,
    iconColor: 'primary',
    iconVariant: 'regular',
    indent: false
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

    &.with-icon {
      @include mixins.two-items;
    }

    &.indent {
      margin-left: 32px;
    }

    i {
      @include mixins.unit-inline-margin;
    }

    p {
      margin: 0 var(--unit) 0 0;
    }

    &:hover, &.router-link-exact-active {
      background: var(--background-2);
      text-decoration: none;
    }

    &:active {
      background: var(--background-highlight);
    }
  }
</style>
