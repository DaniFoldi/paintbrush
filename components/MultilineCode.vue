<!--!
  @version 1.1.0
  @icon code
  @category Display
  @require highlight.js
  @description Highlight some source code
-->

<template>
  <pre><Runtime :class="classes" element="code" :rendered="highlight.value" /></pre>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import hljs from 'highlight.js/lib/common'


  interface MultilineCodeProps {
    code: string // Source code to highlight
    language?: string // Language to use
  }

  const props = withDefaults(defineProps<MultilineCodeProps>(), {
    language: 'auto'
  })

  const highlight = computed(() => {
    return props.language === 'auto' ? hljs.highlightAuto(props.code) : hljs.highlight(props.code, { language: props.language })
  })
  const classes = computed(() => [ 'hljs', highlight.value.language ].filter(Boolean).join(' '))
</script>

<style lang="scss">
  pre {

    code.hljs {
      display: block;
      // TODO update
      font-family: monospace;
      overflow-x: auto;
      //@include constants.reset;
      //@include constants.padded;
      //@include constants.rounded;
      //@include constants.shaded;
      .hljs-comment {
        color: #969896;
      }

      .hljs-tag {
        color: #b4b7b4;
      }

      .hljs-operator, .hljs-punctuation, .hljs-subst {
        color: #c5c8c6;
      }

      .hljs-operator {
        opacity: .7;
      }

      .hljs-bullet, .hljs-deletion, .hljs-name, .hljs-selector-tag, .hljs-template-variable, .hljs-variable {
        color: #cc342b;
      }

      .hljs-attr, .hljs-link, .hljs-literal, .hljs-number, .hljs-symbol, .hljs-variable.constant_ {
        color: #f96a38;
      }

      .hljs-title, .hljs-class .hljs-title, .hljs-title.class_ {
        color: #fba922;
      }

      .hljs-strong {
        color: #fba922;
        font-weight: 700;
      }

      .hljs-addition, .hljs-code, .hljs-string, .hljs-title.class_.inherited__ {
        color: #198844;
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
        color: #3971ed;
      }

      .hljs-keyword {
        color: #a36ac7;
      }

      .hljs-meta, .hljs-meta .hljs-keyword, .hljs-meta .hljs-string {
        color: #3971ed;
      }

      .diff .hljs-meta, .hljs-template-tag, .hljs-type {
        color: #a36ac7;
      }

      .hljs-emphasis {
        color: #a36ac7;
        font-style: italic;
      }

      .hljs-meta .hljs-keyword, .hljs-meta-keyword {
        font-weight: 700;
      }
    }
  }
</style>
