<template>
  <AutoLink :href="href" :reload="reload">
    <Center>
      <Icon
        center
        :color="color"
        :name="icon"
        size="16px"
      />
    </Center>
    <Text><slot /></Text>
  </AutoLink>
</template>

<script lang="ts" setup>
interface AutoLinkProps {
  color?: string
  href: string
  icon: string
  reload?: boolean
}

withDefaults(defineProps<AutoLinkProps>(), {
  color: 'primary',
  reload: false
})
</script>

<script lang="ts">
import { resolve } from '../scripts/color'

export default {
  inject: { colorScheme: { default: {} } },
  computed: {
    computedcolor(): string {
      return resolve(this.colorScheme, this.color)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';

a {
  column-gap: 4px;
  font-size: 20px;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 32px;
  user-select: none;

  @include mixins.rounded;
  @include mixins.with-fade;
  @include mixins.unit-padding;
  @include mixins.grid-center-items;

  p {
    justify-self: left;
    @include mixins.no-margin;
  }

  &:hover {
    background: var(--background-2);
    text-decoration: none;
  }

  &:active {
    background: var(--background-highlight);
  }
}

</style>
