<template>
  <Container padded>
    <ThemeToggle />
    <Text>asd</Text>
    <Separator />
    <Icon name="gear" />
    <AutoLink href="https://paintbrush.danifoldi.com" reload>
      link
    </AutoLink>
    <ButtonGroup>
      <Button color="primary">
        button
      </Button>
      <Container :max="false" right-badge="5">
        <Button capitalize color="secondary">
          second button
        </Button>
      </Container>
      <Button color="primary" gradient="secondary">
        gradient
      </Button>
      <Button ghost uppercase>
        ghost
      </Button>
    </ButtonGroup>
    <Checkbox>Test</Checkbox>
    <Form>
      <Input label="Text" type="text" />
      <Input label="Email" type="email" />
      <Input label="Datetime" type="datetime" />
      <Input label="Tel" type="tel" />
      <Input label="Number" type="number" />
      <Input label="Password" type="password" />
    </Form>
    <TableContainer :layout="[{ width: '20px', place: 'center' }, { width: '40%' }, { width: 'auto', justify: 'end' }]">
      <template #content>
        <TableRow v-for="i in 5" :key="i">
          <Icon color="red" name="check" />
          <Text>{{ i }}</Text>
          <Text important>
            Hello
          </Text>
        </TableRow>
      </template>
    </TableContainer>
  </Container>
</template>
