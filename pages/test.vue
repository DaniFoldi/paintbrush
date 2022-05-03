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
      <Input type="text">
        <Text>Text</Text>
      </Input>
      <Input type="email">
        <Text>Email</Text>
      </Input>
      <Input type="datetime">
        <Text>Datetime</Text>
      </Input>
      <Input type="tel">
        <Text>Tel</Text>
      </Input>
      <Input type="number">
        <Text>Number</Text>
      </Input>
      <Input type="password">
        <Text>Password</Text>
      </Input>
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
    <Text subtitle>
      {{ $t('test') }}
    </Text>
  </Container>
</template>
