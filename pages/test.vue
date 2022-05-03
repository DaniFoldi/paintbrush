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
      <Input :auto-wrap="false" type="text">
        <Text>
          <Text important part>
            Text
          </Text>
          <Text italic part>
            input
          </Text>
        </Text>
      </Input>
      <Input type="email">
        Email
      </Input>
      <Input type="datetime">
        Datetime
      </Input>
      <Input type="tel">
        Tel
      </Input>
      <Input type="number">
        Number
      </Input>
      <Input type="password">
        Password
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
    <Card>
      <Form>
        <Input type="email">
          Email address
        </Input>
        <Input type="password">
          Password
        </Input>
      </Form>
    </Card>
  </Container>
</template>
