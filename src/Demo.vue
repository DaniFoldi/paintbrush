<template>
  <Paintbrush>
    <Menubar>
      <template #menubar-center>
        <Text>hello?</Text>
      </template>
      <template #content>
        <Sidebar>
          <template #sidebar-top> test </template>
          <template #sidebar-bottom> test </template>
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
          <template #content>
            <Icon name="x"></Icon>
            <Tag closeable="true">ASDASD</Tag>
            <Link href="https://duckduckgo.com">DuckDuckGo</Link>
            <Copyright>Dániel Földi</Copyright>
            <PoweredBy href="https://paintbrush.design">Paintbrush</PoweredBy>
            <Quote from="Author">This is a quote. Oh yes it is</Quote>
            <Shortcut keyboard-key="F5" alt="true" shift="true"></Shortcut>
            <CodeView language="js" code="const x = 3;"></CodeView>
            <HighlightedText>This is important.</HighlightedText>
            <Image src="assets/test.jpg" caption alt="Test caption"></Image>
          </template>
        </Sidebar>
      </template>
    </Menubar>
  </Paintbrush>
</template>

<script>
  import Icon from './components/basic/Icon.vue'
  import Link from './components/basic/Link.vue'
  import Subtitle from './components/basic/Subtitle.vue'
  import Tag from './components/basic/Tag.vue'
  import Text from './components/basic/Text.vue'
  import Title from './components/basic/Title.vue'
  import UserIcon from './components/basic/UserIcon.vue'
  import Button from './components/button/Button.vue'
  import DestructiveButton from './components/button/DestructiveButton.vue'
  import GhostButton from './components/button/GhostButton.vue'
  import SecondaryButton from './components/button/SecondaryButton.vue'
  import Image from './components/content/Image.vue'
  import CodeView from './components/decorate/CodeView.vue'
  import Copyright from './components/decorate/Copyright.vue'
  import HighlightedText from './components/decorate/HighlightedText.vue'
  import PoweredBy from './components/decorate/PoweredBy.vue'
  import Quote from './components/decorate/Quote.vue'
  import Shortcut from './components/decorate/Shortcut.vue'
  import Menubar from './components/skeleton/Menubar.vue'
  import Sidebar from './components/skeleton/Sidebar.vue'
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
      CodeView,
      Image,
      Title,
      Text,
      UserIcon,
      Quote,
      HighlightedText,
      Shortcut,
      Menubar,
      Sidebar
    }
  }
</script>

<style lang="scss" scoped></style>
