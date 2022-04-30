<template>
  <Container padded>
    <ThemeToggle />
    <Text>asd</Text>
    <Icon name="gear" />
    <AutoLink href="https://paintbrush.danifoldi.com" reload>
      link
    </AutoLink>
    <ButtonGroup>
      <Button color="primary">
        button
      </Button>
      <Button capitalize color="secondary">
        second button
      </Button>
      <Button color="primary" gradient="secondary">
        gradient
      </Button>
      <Button ghost uppercase>
        ghost
      </Button>
    </ButtonGroup>
    <Checkbox>Test</Checkbox>
    <Form>
      <Input label="Username" />
      <Input label="Password" type="password" />
    </Form>
  </Container>
</template>
