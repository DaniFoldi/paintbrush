<!--!
  @version 1.1.0
  @category Navigation
  @icon link-simple
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
  import { useThemeColor } from '#imports'


  interface MenubarLinkProps {
    activeBackground?: string
    autoWrap?: boolean // Wrap text in Text component
    background?: string
    clickBackground?: string
    href: string // Link to navigate to
    icon?: IconTypes // Icon to display
    iconColor?: string // Color of icon
    iconVariant?: IconVariants // Variant of icon
  }

  const props = withDefaults(defineProps<MenubarLinkProps>(), {
    activeBackground: 'background2',
    autoWrap: true,
    background: 'transparent',
    clickBackground: 'backgroundHighlight',
    icon: undefined,
    iconColor: 'primary',
    iconVariant: 'regular'
  })


  const background = useThemeColor(props.background)
  const active = useThemeColor(props.activeBackground)
  const click = useThemeColor(props.clickBackground)
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins.scss';

  a {
    background: v-bind(background);
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
      background: v-bind(active);
      text-decoration: none;
    }

    &:active {
      background: v-bind(click);
    }
  }
  </style>
