<!--!
  @version 1.0.0
  @category Navigation
-->

<template>
  <AutoLink :class="{ 'with-icon': icon }" :href="href">
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


  interface MenubarLinkProps {
    autoWrap?: boolean // Wrap text in Text component
    href: string // Link to navigate to
    icon?: IconTypes // Icon to display
    iconColor?: string // Color of icon
    iconVariant?: IconVariants // Variant of icon
  }

  withDefaults(defineProps<MenubarLinkProps>(), {
    autoWrap: true,
    icon: undefined,
    iconColor: 'primary',
    iconVariant: 'regular'
  })
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins.scss';

  a {
    display: grid;
    font-size: 20px;
    height: 40px;
    place-items: center;
    user-select: none;

    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.double-unit-inline-padding;

    &.with-icon {
      @include mixins.two-items;
    }

    i {
      @include mixins.unit-inline-margin;
    }

    p {
      @include mixins.no-margin;
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
