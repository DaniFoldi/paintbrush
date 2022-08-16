<!--!
  @version 1.3.0
  @category Navigation
  @icon link-simple
  @description A link for menubar items
-->

<template>
  <AutoLink :class="{ 'with-icon': icon, 'non-exact': nonExact }" :href="href">
    <Icon
      v-if="icon"
      center
      :color="iconColor"
      :name="icon"
      size="16px"
      :variant="iconVariant"
    />
    <Text v-if="autoWrap" :color="color">
      <slot />
    </Text>
    <slot v-else />
  </AutoLink>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'
  import { IconVariants } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'


  interface MenubarLinkProps {
    activeBackground?: string // Background color for active link
    autoWrap?: boolean // Wrap text in Text component
    background?: string // Background color for link
    clickBackground?: string // Background color for clicked link
    color?: string // Text color
    href: string // Link to navigate to
    icon?: IconTypes // Icon to display
    iconColor?: string // Color of icon
    iconVariant?: IconVariants // Variant of icon
    nonExact?: boolean // Whether the link is active when non-exact
  }

  const props = withDefaults(defineProps<MenubarLinkProps>(), {
    activeBackground: 'highlightBackground',
    autoWrap: true,
    background: 'transparent',
    clickBackground: 'highlightBackground',
    color: 'backgroundText',
    icon: undefined,
    iconColor: 'primary',
    iconVariant: 'regular',
    nonExact: false
  })


  const background = computed(() => useThemeColor(props.background).value)
  const active = computed(() => useThemeColor(props.activeBackground).value)
  const click = computed(() => useThemeColor(props.clickBackground).value)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';
  @use '~/assets/grid';
  @use '~/assets/sizes';
  @use '~/assets/text';

  a {
    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.double-unit-inline-padding;
    @include grid.grid;
    @include grid.center-items-inline;

    background: v-bind(background);
    font-size: 20px;
    height: 40px;
    user-select: none;

    &.with-icon {
      @include grid.grid;
      @include grid.two-items;
    }

    i {
      @include sizes.unit-inline-margin;
    }

    p {
      @include sizes.no-margin;
    }

    &:hover, &.router-link-exact-active, &.router-link-active.non-exact {
      @include text.no-underline;
      background: v-bind(active);
    }

    &:active {
      background: v-bind(click);
    }
  }
  </style>
