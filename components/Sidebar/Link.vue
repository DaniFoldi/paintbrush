<!--!
@name SidebarLink
@version 1.0.0
-->
<template>
  <AutoLink :href="href" :reload="reload">
    <Icon
      center
      :color="color"
      :name="icon"
      size="16px"
    />
    <Text><slot /></Text>
  </AutoLink>
</template>

<script lang="ts" setup>
interface SidebarEntryProps {
  color?: string
  href: string
  icon: string
  reload?: boolean
}

withDefaults(defineProps<SidebarEntryProps>(), {
  color: 'primary',
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
    @include mixins.horizontal-unit-margin;
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