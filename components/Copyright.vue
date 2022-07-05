<!--!
  @icon copyright
  @version 1.1.0
  @category Misc
  @description Display copyright information of a site
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
  import { useThemeColor, computed } from '#imports'


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


  const color = useThemeColor(props.color)
  const years = computed(() => props.startYear === props.endYear ? props.startYear : `${props.startYear} - ${props.endYear}`)
</script>

<style lang="scss" scoped>
  blockquote {
    color: v-bind(color);

    i {
      margin-right: 1px;
      vertical-align: middle;
    }
  }
</style>
