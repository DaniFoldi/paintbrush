<!--!
  @category Display
  @version 1.3.0
  @icon code-simple
  @require highlight.js
  @description Display code in a simple way, inline
-->

<template>
  <Runtime
    class="hljs"
    :class="highlight.split(' ')[0]"
    element="code"
    :rendered="highlight"
  />
</template>

<script lang="ts" setup>
  import { getHighlighter } from 'shiki-es'
  import { computed } from '#imports'


  interface InlineCodeProps {
    code?: string // Source code to highlight
    language?: string // Language to use
  }

  const props = withDefaults(defineProps<InlineCodeProps>(), {
    code: '',
    language: 'javascript'
  })


  const highlighter = await getHighlighter({ themes: [ 'github-dark' ] })

  const highlight = computed(() => {
    if (props.language === 'none') {
      return props.code
    }
    return highlighter.codeToHtml(props.code, { lang: props.language })
  })
</script>

<style lang="scss">
  @use '#paintbrush/assets/fonts.scss' as fonts;

  code.hljs {
    @include fonts.font('source-code-pro');

    overflow-x: auto;

    // @include constants.reset;
    // @include constants.padded;
    // @include constants.rounded;
    // @include constants.shaded;
    .hljs-comment {
      color: var(--gray-5);
    }

    .hljs-tag {
      color: var(--gray-6);
    }

    .hljs-operator, .hljs-punctuation, .hljs-subst {
      color: var(--gray-7);
    }

    .hljs-operator {
      opacity: .7;
    }

    .hljs-bullet, .hljs-deletion, .hljs-name, .hljs-selector-tag, .hljs-template-variable, .hljs-variable {
      color: var(--red-5);
    }

    .hljs-attr, .hljs-link, .hljs-literal, .hljs-number, .hljs-symbol, .hljs-variable.constant_ {
      color: var(--orange-5);
    }

    .hljs-title, .hljs-class .hljs-title, .hljs-title.class_ {
      color: var(--orange-6);
    }

    .hljs-strong {
      color: var(--orange-6);
      font-weight: 700;
    }

    .hljs-addition, .hljs-code, .hljs-string, .hljs-title.class_.inherited__ {
      color: var(--green-5);
    }

    .hljs-attribute,
    .hljs-built_in,
    .hljs-doctag,
    .hljs-function .hljs-title,
    .hljs-keyword.hljs-atrule,
    .hljs-quote,
    .hljs-regexp,
    .hljs-section,
    .hljs-title.function_,
    .ruby .hljs-property {
      color: var(--blue-4);
    }

    .hljs-keyword {
      color: var(--purple-5);
    }

    .hljs-meta, .hljs-meta .hljs-keyword, .hljs-meta .hljs-string {
      color: var(--blue-5);
    }

    .diff .hljs-meta, .hljs-template-tag, .hljs-type {
      color: var(--purple-4);
    }

    .hljs-emphasis {
      color: var(--purple-5);
      font-style: italic;
    }

    .hljs-meta .hljs-keyword, .hljs-meta-keyword {
      font-weight: 700;
    }
  }
</style>
