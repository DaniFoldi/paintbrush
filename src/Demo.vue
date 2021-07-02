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
  </Paintbrush>
</template>

<script>
import Paintbrush from './components/structure/Paintbrush.vue'
import Button from './components/button/Button.vue'
import SecondaryButton from './components/button/SecondaryButton.vue'
import DestructiveButton from './components/button/DestructiveButton.vue'
import GhostButton from './components/button/GhostButton.vue'
import Paragraph from './components/basic/Paragraph.vue'
import Link from './components/basic/Link.vue'
import Subtitle from './components/basic/Subtitle.vue'
import Title from './components/basic/Title.vue'
import UserIcon from './components/basic/UserIcon.vue'
import Icon from './components/basic/Icon.vue'
import Tag from './components/basic/Tag.vue'
export default {
  el: '#app',
  components: {
    Paintbrush,
    Button,
    SecondaryButton,
    DestructiveButton,
    GhostButton,
    Link,
    Icon,
    Subtitle,
    Tag,
    Title,
    Paragraph,
    UserIcon
  }
}
</script>

<style lang="sass"></style>
