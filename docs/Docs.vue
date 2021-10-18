<template>
  <Paintbrush>
    <Sidebar>
      <template #sidebar-top>
        <Title><PaintbrushLogo size="48px" /> Paintbrush</Title>
      </template>
      <template #sidebar-middle>
        <Button>test button</Button>
        <SecondaryButton>click here now</SecondaryButton>
        <DestructiveButton>Delete</DestructiveButton>
        <GhostButton>Cancel</GhostButton>
        <UserIcon>DF</UserIcon>
        <Text>test paragraph</Text>
        <Title>Title</Title>
        <Subtitle>Test subtitle</Subtitle>
      </template>
      <template #sidebar-bottom>
        <PoweredBy />
        <Copyright>Dániel Földi</Copyright>
      </template>
      <template #content>
        <Icon name="x"></Icon>
        <Tag closeable="true">ASDASD</Tag>
        <Link href="https://duckduckgo.com">DuckDuckGo</Link>
        <Quote from="Author">This is a quote. Oh yes it is</Quote>
        <Shortcut keyboard-key="F5" alt="true" shift="true"></Shortcut>
        <CodeView language="js" code="const x = 3;"></CodeView>
        <HighlightedText>This is important.</HighlightedText>
        <Image src="assets/test.jpg" caption alt="Test caption"></Image>
      </template>
    </Sidebar>
  </Paintbrush>
</template>

<script>
  import Icon from 'basic/Icon.vue'
  import Link from 'basic/Link.vue'
  import Subtitle from 'basic/Subtitle.vue'
  import Tag from 'basic/Tag.vue'
  import Text from 'basic/Text.vue'
  import Title from 'basic/Title.vue'
  import UserIcon from 'basic/UserIcon.vue'
  import Button from 'button/Button.vue'
  import DestructiveButton from 'button/DestructiveButton.vue'
  import GhostButton from 'button/GhostButton.vue'
  import SecondaryButton from 'button/SecondaryButton.vue'
  import Image from 'content/Image.vue'
  import CodeView from 'decorate/CodeView.vue'
  import Copyright from 'decorate/Copyright.vue'
  import HighlightedText from 'decorate/HighlightedText.vue'
  import Quote from 'decorate/Quote.vue'
  import Shortcut from 'decorate/Shortcut.vue'
  import Paintbrush from 'paintbrush/Paintbrush.vue'
  import PaintbrushLogo from 'paintbrush/PaintbrushLogo.vue'
  import PoweredBy from 'paintbrush/PoweredBy.vue'
  import Menubar from 'skeleton/Menubar.vue'
  import Sidebar from 'skeleton/Sidebar.vue'
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
      CodeView,
      Image,
      Title,
      Text,
      UserIcon,
      Quote,
      HighlightedText,
      Shortcut,
      Menubar,
      Sidebar,
      PoweredBy,
      PaintbrushLogo
    }
  }
</script>

<style lang="scss" scoped></style>
