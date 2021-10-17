<template>
  <a :href="href"
    ><Icon key=":icon"></Icon><Text>{{ label }}</Text></a
  >
</template>

<script>
  export default {
    name: 'SidebarEntry',
    props: {
      href: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';
</style>
