<!--!
  @version 1.1.0
  @icon text-aa
  @description Text component to display text
  @usage <Text>Lorem ipsum dolor sit amet</Text>
  @category Basic
-->
<template>
  <h1 v-if="mode === 'h1'" :class="classes">
    <slot />
  </h1>
  <h2 v-else-if="mode === 'h2'" :class="classes">
    <slot />
  </h2>
  <h3 v-else-if="mode === 'h3'" :class="classes">
    <slot />
  </h3>
  <span v-else-if="mode === 'part'" :class="classes">
    <slot />
  </span>
  <p v-else :class="classes">
    <slot />
  </p>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface TextProps {
    bold?: boolean // Bold text
    capitalize?: boolean // Capitalize text
    gradient?: boolean // Gradient text
    important?: boolean // Important text
    inline?: boolean // Inline text
    italic?: boolean // Italic text
    light?: boolean // Light text
    part?: boolean // Render as span within other Text component
    sectiontitle?: boolean // Render as h3
    subtitle?: boolean // Render as h2
    title?: boolean // Render as h1
    underline?: boolean // Underline text
    uppercase?: boolean // Uppercase text
  }

  const props = withDefaults(defineProps<TextProps>(), {
    bold: false,
    capitalize: false,
    gradient: false,
    important: false,
    inline: false,
    italic: false,
    light: false,
    part: false,
    sectiontitle: false,
    subtitle: false,
    title: false,
    underline: false,
    uppercase: false
  })

  let mode = 'normal'
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
  } else if (props.part) {
    mode = 'part'
  }

  if (props.bold) {
    if (props.light) {
      console.warn('Text: Only one of the following props should be set: bold, light')
    }
    if (props.important) {
      console.warn('Text: Only one of the following props should be set: bold, important')
    }
  } else if (props.light && props.important) {
    console.warn('Text: Only one of the following props should be set: bold, light')
  }

  const classes = computed(() => [
    props.bold ? 'bold' : '',
    props.capitalize ? 'capitalize' : '',
    props.gradient ? 'gradient' : '',
    props.important ? 'important' : '',
    props.inline ? 'inline' : '',
    props.italic ? 'italic' : '',
    props.light ? 'light' : '',
    props.underline ? 'underline' : '',
    props.uppercase ? 'uppercase' : ''
  ])
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  h1, h2, h3, p, span {
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

    &.inline {
      display: inline;
    }

    &.underline {
      @include mixins.underline;
    }

    &.important {
      font-weight: 800;
      @include mixins.font('inter');
    }

    &.gradient {
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      background-clip: text;
      color: transparent;
      font-style: normal;
    }
  }
</style>
