<!--!
  @name Text
  @version 1.1.0
  @icon text-aa
  @description Text component to display text
  @usage <Text>Lorem ipsum dolor sit amet</Text>
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
  interface TextProps {
    bold?: boolean
    capitalize?: boolean
    gradient?: boolean
    important?: boolean
    inline?: boolean
    italic?: boolean
    light?: boolean
    part?: boolean
    sectiontitle?: boolean
    subtitle?: boolean
    title?: boolean
    underline?: boolean
    uppercase?: boolean
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

  const classes = [
    props.bold ? 'bold' : '',
    props.capitalize ? 'capitalize' : '',
    props.gradient ? 'gradient' : '',
    props.important ? 'important' : '',
    props.inline ? 'inline' : '',
    props.italic ? 'italic' : '',
    props.light ? 'light' : '',
    props.underline ? 'underline' : '',
    props.uppercase ? 'uppercase' : ''
  ]
</script>

<style lang="scss" scoped>
  @use '../assets/mixins';

  h1, h2, h3, p, span {
    @include mixins.standard-text;

    &:not(:first-child) {
      margin-top: var(--unit);
    }

    &:not(:last-child) {
      margin-bottom: var(--unit);
    }

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
