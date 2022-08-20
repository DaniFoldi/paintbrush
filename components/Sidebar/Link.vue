<!--!
  @version 1.5.1
  @icon link-simple
  @category Navigation
  @require phosphor-icons
  @description A link for sidebar items
-->

<template>
  <AutoLink :class="{ 'with-icon': icon, indent, 'non-exact': nonExact }" :href="href" :weight="500">
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
  import { computed, useThemeColor } from '#imports'
  import { IconVariants } from '../../modules/icons'
  import { IconTypes } from '../../modules/icon-types'


  interface SidebarLinkProps {
    autoWrap?: boolean // Wrap text in Text component
    href: string // Link to navigate to
    icon: undefined | IconTypes // Icon to display
    iconColor?: string // Color of icon
    iconVariant?: IconVariants // Variant of icon
    indent?: boolean // Indent link
    nonExact?: boolean // Whether the link is active when non-exact
  }

  const props = withDefaults(defineProps<SidebarLinkProps>(), {
    autoWrap: true,
    iconColor: 'primary',
    iconVariant: 'regular',
    indent: false,
    nonExact: false
  })

  const iconColor = computed(() => useThemeColor(props.iconColor).value)
  const active = computed(() => iconColor.value.startsWith('#') ? `${iconColor.value}${useThemeColor('transparentize').value}` : iconColor.value)
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/grid.scss' as grid;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;
  @use '#paintbrush/assets/text.scss' as text;
  @use '#paintbrush/assets/fonts.scss' as fonts;

  a {
    @include common.rounded;
    @include mixins.fade('background', 'color', 'border-color');
    @include sizes.unit-padding;

    font-size: 20px;
    user-select: none;

    &.with-icon {
      @include grid.grid;
      @include grid.two-items;
      @include grid.center-items-block;
    }

    &.indent {
      margin-left: 32px;
    }

    i {
      @include sizes.unit-margin-inline;
    }

    p {
      @include sizes.unit-margin-inline-start;
      @include sizes.no-margin-block;
      @include sizes.no-margin-inline-end;
    }

    &:hover, &:focus, &:active, &.router-link-exact-active, &.router-link-active.non-exact {
      @include text.no-underline;
      background: v-bind(active);
    }
  }
</style>
