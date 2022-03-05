<template>
  <pre>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <code :class="['hljs' ,language]" v-html="code" />
  </pre>
</template>

<script lang="ts" setup>
const language = 'js'

interface MultilineCodeProps {
  code: string
}

defineProps<MultilineCodeProps>()
</script>

<style lang="scss" scoped>
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
      color: #B4B7B4;
    }

    .hljs-operator, .hljs-punctuation, .hljs-subst {
      color: #C5C8C6;
    }

    .hljs-operator {
      opacity: .7;
    }

    .hljs-bullet, .hljs-deletion, .hljs-name, .hljs-selector-tag, .hljs-template-variable, .hljs-variable {
      color: #CC342B;
    }

    .hljs-attr, .hljs-link, .hljs-literal, .hljs-number, .hljs-symbol, .hljs-variable.constant_ {
      color: #F96A38;
    }

    .hljs-title, .hljs-class .hljs-title, .hljs-title.class_ {
      color: #FBA922;
    }

    .hljs-strong {
      color: #FBA922;
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
      color: #3971ED;
    }

    .hljs-keyword {
      color: #A36AC7;
    }

    .hljs-meta, .hljs-meta .hljs-keyword, .hljs-meta .hljs-string {
      color: #3971ED;
    }

    .diff .hljs-meta, .hljs-template-tag, .hljs-type {
      color: #A36AC7;
    }

    .hljs-emphasis {
      color: #A36AC7;
      font-style: italic;
    }

    .hljs-meta .hljs-keyword, .hljs-meta-keyword {
      font-weight: 700;
    }
  }
}
</style>
