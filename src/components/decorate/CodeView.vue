<template>
  <pre>
    <code :class="['hljs', this.highlightLanguage]" v-html="codeValue"></code>
  </pre>
</template>

<script>
  import highlightJsCommon from 'highlight.js/lib/common'
  import highlightJsCore from 'highlight.js/lib/core'
  export default {
    name: 'CodeView',
    props: {
      code: {
        type: String,
        required: true
      },
      language: {
        type: String,
        default: ''
      },
      ignoreIllegals: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        highlightLanguage: highlightJsCore.getLanguage(this.language) ?? ''
      }
    },
    computed: {
      codeValue() {
        return this.highlightLanguage === ''
          ? (() => {
              const result = highlightJsCore.highlightAuto(this.code)
              this.highlightLanguage = result.language
              return result.value
            })()
          : highlightJsCore.highlight(this.code, {
              language: this.language,
              ignoreIllegals: this.ignoreIllegals
            }).value
      }
    }
  }
</script>

<style lang="scss">
  // TODO scoped somehow
  @use '../../scss/constants';

  // TODO add color schemes (dark and light)

  pre {
    code.hljs {
      @include constants.reset;
      @include constants.padded;
      @include constants.rounded;
      @include constants.shaded;
      display: block;
      overflow-x: auto;
      font-family: monospace;

      .hljs-comment {
        color: #969896;
      }
      .hljs-tag {
        color: #b4b7b4;
      }
      .hljs-operator,
      .hljs-punctuation,
      .hljs-subst {
        color: #c5c8c6;
      }
      .hljs-operator {
        opacity: 0.7;
      }
      .hljs-bullet,
      .hljs-deletion,
      .hljs-name,
      .hljs-selector-tag,
      .hljs-template-variable,
      .hljs-variable {
        color: #cc342b;
      }
      .hljs-attr,
      .hljs-link,
      .hljs-literal,
      .hljs-number,
      .hljs-symbol,
      .hljs-variable.constant_ {
        color: #f96a38;
      }
      .hljs-class .hljs-title,
      .hljs-title,
      .hljs-title.class_ {
        color: #fba922;
      }
      .hljs-strong {
        font-weight: 700;
        color: #fba922;
      }
      .hljs-addition,
      .hljs-code,
      .hljs-string,
      .hljs-title.class_.inherited__ {
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
      .diff .hljs-meta,
      .hljs-keyword,
      .hljs-template-tag,
      .hljs-type {
        color: #a36ac7;
      }
      .hljs-emphasis {
        color: #a36ac7;
        font-style: italic;
      }
      .hljs-meta,
      .hljs-meta .hljs-keyword,
      .hljs-meta .hljs-string {
        color: #3971ed;
      }
      .hljs-meta .hljs-keyword,
      .hljs-meta-keyword {
        font-weight: 700;
      }
    }
  }
</style>
