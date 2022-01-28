<template>
  <CenterContents>
    <Button>test button</Button>
    <ButtonGroup>
      <SecondaryButton>click here now</SecondaryButton>
      <DestructiveButton>Delete</DestructiveButton>
      <GhostButton>Cancel</GhostButton>
    </ButtonGroup>
    <UserIcon>DF</UserIcon>
    <Text>test paragraph</Text>
    <Title>Title</Title>
    <Subtitle>Test subtitle</Subtitle>
    <Icon name="x"></Icon>
    <Tag closeable>ASDASD</Tag>
    <Link href="https://duckduckgo.com">DuckDuckGo</Link>
    <Quote from="Author">This is a quote. Oh yes it is</Quote>
    <Shortcut keyboard-key="F5" :alt="true" shift="true"></Shortcut>
    <CodeView code="const x = 3;"></CodeView>
    <HighlightedText>This is important.</HighlightedText>
    <Image src="assets/test.jpg" caption alt="Test caption"></Image>
    <Copyright>Dániel Földi</Copyright>
  </CenterContents>
</template>
