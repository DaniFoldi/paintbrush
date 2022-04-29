<!--!
  @name Glue
  @version 0.1.0
  @icon columns
-->

<template>
  <div :class="{ split }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface GlueProps {
    split?: boolean
  }

  withDefaults(defineProps<GlueProps>(), {
    split: false
  })
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

div{
&.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--unit);

  ::v-deep(:last-child) {
    justify-self: end;
  }
}
::v-deep(*) {
  display: inline;
  margin-inline: 0;
}
::v-deep(p) {
  @include mixins.no-margin;
}
}
</style>
