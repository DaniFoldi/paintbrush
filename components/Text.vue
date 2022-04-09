<!--!
@name Text
@version 1.0.0
@description Text component to display text
@usage <Text>Lorem ipsum dolor sit amet</Text>
-->
<template>
  <h1 v-if="mode==='h1'" :class="classes">
    <slot />
  </h1>
  <h2 v-else-if="mode==='h2'" :class="classes">
    <slot />
  </h2>
  <h3 v-else-if="mode==='h3'" :class="classes">
    <slot />
  </h3>
  <p v-else :class="classes">
    <slot />
  </p>
</template>

<script lang="ts" setup>
interface TextProps {
  bold?: boolean
  italic?: boolean
  light?: boolean
  sectiontitle?: boolean
  subtitle?: boolean
  title?: boolean
  underline?: boolean
}

const props = withDefaults(defineProps<TextProps>(), {
  bold: false,
  italic: false,
  light: false,
  sectiontitle: false,
  subtitle: false,
  title: false,
  underline: false
})

let mode = 'body'
if (props.title) {
  mode = 'h1'
  if (props.subtitle || props.sectiontitle) {
    console.warn('Text: Only one of the following props should be set: title, subtitle, sectiontitle')
  }
} else if (props.subtitle) {
  mode = 'h2'
  if (props.sectiontitle) {
    console.warn('Text: Only one of the following props should be set: title, subtitle, sectiontitle')
  }
} else if (props.sectiontitle) {
  mode = 'h3'
}

const classes = [
  props.bold ? 'bold' : '',
  props.italic ? 'italic' : '',
  props.light ? 'light' : '',
  props.underline ? 'underline' : ''
]
</script>

<style lang="scss" scoped>
@use '../assets/mixins';

h1, h2, h3, p {
  @include mixins.vertical-unit-margin;
  @include mixins.standard-text;

  &.bold {
    @include mixins.bold;
  }

  &.italic {
    @include mixins.italic;
  }

  &.light {
    @include mixins.light;
  }

  &.underline {
    @include mixins.underline;
  }
}
</style>
