<!--!
  @icon copyright
  @version 1.0.0
-->

<template>
  <Text>
    <Icon color="inherit" name="copyright" />
    <Text part>
      {{ years }}
      <slot />
    </Text>
  </Text>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface CopyrightProps {
    endYear?: number
    startYear?: number
  }

  const props = withDefaults(defineProps<CopyrightProps>(), {
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  })


  const years = computed(() => props.startYear === props.endYear ? props.startYear : `${props.startYear} - ${props.endYear}`)
</script>

<style lang="scss" scoped>
  i {
    margin-right: 1px;
    vertical-align: middle;
  }
</style>
