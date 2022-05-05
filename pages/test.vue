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
    <ParallaxDisplay>
      <ParallaxItem :initial-opacity="0.7">
        <Card inline>
          <Form>
            <Input type="email">
              Email address
            </Input>
            <Input type="password">
              Password
            </Input>
          </Form>
        </Card>
      </ParallaxItem>
    </ParallaxDisplay>
    <ParallaxDisplay>
      <ParallaxItem :offset="-1">
        <Card inline>
          <Form>
            <Input type="email">
              Email address
            </Input>
            <Input type="password">
              Password
            </Input>
          </Form>
        </Card>
      </ParallaxItem>
    </ParallaxDisplay>
    <ParallaxDisplay>
      <ParallaxItem :rotated-opacity="0">
        <Card inline>
          <Form>
            <Input type="email">
              Email address
            </Input>
            <Input type="password">
              Password
            </Input>
          </Form>
        </Card>
      </ParallaxItem>
    </ParallaxDisplay>
    <Stat :max="800" :value="500">
      With max
    </Stat>
    <Stat icon-name="airplane-tilt" :value="500">
      Without max
    </Stat>
    <Stat
      icon-color="red"
      icon-name="key"
      :max="20"
      :value="20"
    >
      With icon color
    </Stat>
    <FocusMark
      height="300px"
      left="400px"
      :off="!focusActive"
      rounded
      top="300px"
      width="300px"
    />
    <Button color="pink" @click="toggleFocus">
      Toggle focus
    </Button>
  </Container>
</template>

<script lang="ts" setup>
  import { useState } from '#imports'


  const focusActive = useState('focus-active', () => false)

  function toggleFocus() {
    focusActive.value = !focusActive.value
  }
</script>
