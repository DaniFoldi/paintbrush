<template>
  <Paintbrush>
    <Button>test button</Button>
    <SecondaryButton>click here now</SecondaryButton>
    <DestructiveButton>Delete</DestructiveButton>
    <GhostButton>Cancel</GhostButton>
    <UserIcon>DF</UserIcon>
    <Paragraph>test paragraph</Paragraph>
    <Title>Title</Title>
    <Subtitle>Test subtitle</Subtitle>
    <Icon name="x"></Icon>
    <Tag closeable="true">ASDASD</Tag>
    <Link href="https://duckduckgo.com">DuckDuckGo</Link>
    <Copyright>Dániel Földi</Copyright>
    <PoweredBy href="https://paintbrush.design">Paintbrush</PoweredBy>
    <Quote from="Author">This is a quote. Oh yes it is</Quote>
  </Paintbrush>
</template>

<script>
  import Icon from './components/basic/Icon.vue'
  import Link from './components/basic/Link.vue'
  import Paragraph from './components/basic/Paragraph.vue'
  import Subtitle from './components/basic/Subtitle.vue'
  import Tag from './components/basic/Tag.vue'
  import Title from './components/basic/Title.vue'
  import UserIcon from './components/basic/UserIcon.vue'
  import Button from './components/button/Button.vue'
  import DestructiveButton from './components/button/DestructiveButton.vue'
  import GhostButton from './components/button/GhostButton.vue'
  import SecondaryButton from './components/button/SecondaryButton.vue'
  import Copyright from './components/decorate/Copyright.vue'
  import PoweredBy from './components/decorate/PoweredBy.vue'
  import Quote from './components/decorate/Quote.vue'
  import Paintbrush from './components/structure/Paintbrush.vue'
  export default {
    el: '#app',
    components: {
      Paintbrush,
      Button,
      SecondaryButton,
      DestructiveButton,
      GhostButton,
      Copyright,
      PoweredBy,
      Link,
      Icon,
      Subtitle,
      Tag,
      Title,
      Paragraph,
      UserIcon,
      Quote
    }
  }
</script>

<style lang="sass"></style>
