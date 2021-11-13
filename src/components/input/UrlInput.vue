<template>
  <input :class="[valid ? '' : 'invalid']" @keydown="validateUrl" type="email" />
</template>

<script>
  // TODO improve
  const URL_REGEX =
    /((http|https)?:\/\/)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/
  export default {
    name: 'UrlInput',
    data() {
      return {
        valid: false
      }
    },
    methods: {
      validateUrl(event) {
        this.valid = URL_REGEX.test(event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  // TODO style
  @use '../../scss/constants';

  p {
    @include constants.reset;
    margin: constants.$base-size * 2 0;
  }
</style>
