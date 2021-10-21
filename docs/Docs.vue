<template>
  <Paintbrush>
    <Sidebar>
      <template #sidebar-top>
        <PaintbrushTitle />
      </template>
      <template #sidebar-middle>
        <SidebarEntry color="blue" href="/setup" icon="gear-six" label="Setup" />
        <SidebarEntry color="purple" href="/components" icon="cube" label="Components" />
        <SidebarEntry color="teal" href="/examples" icon="brackets-curly" label="Examples" />
        <SidebarEntry color="orange" href="/links" icon="link" label="Links" />
      </template>
      <template #sidebar-bottom>
        <PoweredBy />
      </template>
      <template #content>
        <CenterContents>
          <Button>test button</Button>
          <SecondaryButton>click here now</SecondaryButton>
          <DestructiveButton>Delete</DestructiveButton>
          <GhostButton>Cancel</GhostButton>
          <UserIcon>DF</UserIcon>
          <Text>test paragraph</Text>
          <Title>Title</Title>
          <Subtitle>Test subtitle</Subtitle>
          <Icon name="x"></Icon>
          <Tag closeable>ASDASD</Tag>
          <Link href="https://duckduckgo.com">DuckDuckGo</Link>
          <Quote from="Author">This is a quote. Oh yes it is</Quote>
          <Shortcut keyboard-key="F5" alt shift></Shortcut>
          <CodeView code="const x = 3;"></CodeView>
          <HighlightedText>This is important.</HighlightedText>
          <Image src="assets/test.jpg" caption alt="Test caption"></Image>
          <Copyright>Dániel Földi</Copyright>
        </CenterContents>
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
  import PaintbrushTitle from 'paintbrush/PaintbrushTitle.vue'
  import PoweredBy from 'paintbrush/PoweredBy.vue'
  import Menubar from 'skeleton/Menubar.vue'
  import Sidebar from 'skeleton/Sidebar.vue'
  import SidebarEntry from 'skeleton/SidebarEntry.vue'
  import CenterContents from 'structure/CenterContents.vue'
  export default {
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
      PaintbrushTitle,
      SidebarEntry,
      CenterContents
    }
  }
</script>

<style lang="scss" scoped></style>
