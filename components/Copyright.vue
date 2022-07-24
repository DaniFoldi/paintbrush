<!--!
  @icon copyright
  @version 1.1.0
  @category Misc
  @description Display copyright information of a site
-->

<template>
  <Text :color="color">
    <Icon color="inherit" name="copyright" />
    <Text color="inherit" part>
      {{ years }}
      <slot />
    </Text>
  </Text>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface CopyrightProps {
    color?: string // Icon and text color
    endYear?: number // Displayed end year
    startYear?: number // Displayed start year
  }

  const props = withDefaults(defineProps<CopyrightProps>(), {
    color: 'text',
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear()
  })


  const years = computed(() => props.startYear === props.endYear ? props.startYear : `${props.startYear} - ${props.endYear}`)
</script>
