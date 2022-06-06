<!--!
  @version 1.2.1
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
    <Text v-if="autoWrap" :color="color">
      <slot />
    </Text>
    <slot v-else />
  </AutoLink>
</template>

<script lang="ts" setup>
  import { IconVariants } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'
  import { computed, useThemeColor } from '#imports'


  interface MenubarLinkProps {
    activeBackground?: string
    autoWrap?: boolean // Wrap text in Text component
    background?: string
    clickBackground?: string
    color?: string
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
    color: 'text',
    icon: undefined,
    iconColor: 'primary',
    iconVariant: 'regular'
  })


  const background = computed(() => useThemeColor(props.background))
  const active = computed(() => useThemeColor(props.activeBackground))
  const click = computed(() => useThemeColor(props.clickBackground))
</script>

<style lang="scss" scoped>
  @use '../../assets/mixins.scss';

  a {
    background: v-bind('background.value');
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
      background: v-bind('active.value');
      color: v-bind('acolor.value');
      text-decoration: none;
    }

    &:active {
      background: v-bind('click.value');
      color: v-bind('ccolor.value');
    }
  }
  </style>
