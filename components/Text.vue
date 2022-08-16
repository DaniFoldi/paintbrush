<!--!
  @version 2.0.0
  @icon text-aa
  @description Text component to display text
  @category Basic
-->

<template>
  <h1 v-if="element === 'h1'" :class="classes">
    <slot />
  </h1>
  <h2 v-else-if="element === 'h2'" :class="classes">
    <slot />
  </h2>
  <h3 v-else-if="element === 'h3'" :class="classes">
    <slot />
  </h3>
  <span v-else-if="element === 'span'" :class="classes">
    <slot />
  </span>
  <p v-else :class="classes">
    <slot />
  </p>
</template>

<script lang="ts" setup>
  import { computed, textFontSize, useThemeColor } from '#imports'


  interface TextProps {
    bold?: boolean // Bold text
    capitalize?: boolean // Capitalize text
    center?: boolean // Center text
    color?: string // Text color
    fontSize?: string // Override the default font size
    h1?: boolean // Use h1 tag
    h2?: boolean // Use h2 tag
    h3?: boolean // Use h3 tag
    h4?: boolean // Use h4 tag
    h5?: boolean // Use h5 tag
    h6?: boolean // Use h6 tag
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
    center: false,
    color: 'backgroundText',
    fontSize: 'default',
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
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

  const element = computed(() => {
    if (props.title || props.h1) {
      return 'h1'
    } else if (props.subtitle || props.h2) {
      return 'h2'
    } else if (props.sectiontitle || props.h3) {
      return 'h3'
    } else if (props.h4) {
      return 'h4'
    } else if (props.h5) {
      return 'h5'
    } else if (props.h6) {
      return 'h6'
    } else if (props.part) {
      return 'span'
    }
    return 'p'
  })


  const classes = computed(() => [
    props.bold ? 'bold' : '',
    props.capitalize ? 'capitalize' : '',
    props.center ? 'center' : '',
    props.important ? 'important' : '',
    props.inline ? 'inline' : '',
    props.italic ? 'italic' : '',
    props.light ? 'light' : '',
    props.underline ? 'underline' : '',
    props.uppercase ? 'uppercase' : ''
  ])

  const color = computed(() => useThemeColor(props.color).value)
  const fontsize = computed(() => props.fontSize === 'default' ? textFontSize(element.value) : props.fontSize)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';

  h1, h2, h3, h4, h5, h6 {
    @include mixins.double-unit-block-margin;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    color: v-bind(color);
    font-size: v-bind(fontsize);

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
      @include mixins.font('inter');
      font-weight: 800;
    }

    &.center {
      text-align: center;
    }
  }
</style>
