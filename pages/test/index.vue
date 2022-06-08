<template>
  <Container class="scroll" max padded>
    <ThemeToggle />
    <ClientOnly>
      <Float :above="testRef" />
    </ClientOnly>
    <Text>
      asd
    </Text>
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
      <Button ref="testRef" ghost uppercase>
        ghost
      </Button>
    </ButtonGroup>
    <Text>Checkbox is {{ check }}</Text>
    <Checkbox v-model="check">
      Test
    </Checkbox>
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
    <IconLink href="/test" icon="confetti">
      Link
    </IconLink>
    <Button small>
      small
    </Button>
    <Button large>
      large button
    </Button>
    <TableContainer :layout="layout">
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
    <Container grid="repeat(auto-fit, minmax(250px, 1fr))">
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
    </Container>
    <TextArea v-model="textArea" resize="vertical" :rows="5" />

    <Stat :max="800" :value="500">
      With max
    </Stat>
    <Stat icon-name="airplane-tilt" :value="500">
      Without max
    </Stat>
    <Stat icon-color="red" icon-name="key" :max="20" :value="20">
      With icon color
    </Stat>
    <ClientOnly>
      <FocusMark :distance="12" :off="!focusActive" rounded="var(--double-unit)" :target="testRef2" />
    </ClientOnly>
    <Button color="pink" @click="toggleFocus">
      Toggle focus
    </Button>
    <Copyright :start-year="2022">
      Dániel Földi.
    </Copyright>
    <MultilineCode :code="code" />

    <Shortcut color="secondary" :keys="[ 'mod', 'shift', 'k' ]" />
    <Pagination ref="testRef2" :page="page" :total-items="100" />
    <Breadcrumbs :path="path" />
    <Highlight icon-color="orange" icon-name="warning" icon-variant="bold" warning>
      This is a warning
    </Highlight>
    <Highlight error>
      Error
    </Highlight>
    <Highlight quote>
      Quote
    </Highlight>
    <Highlight icon-name="check-circle" success>
      Success
    </Highlight>
    <Highlight :auto-wrap="false" info>
      <Text>
        <Text bold part>
          Bold
        </Text>
        <Text italic part>
          italic
        </Text>
      </Text>
    </Highlight>
    <Toggle />
    <ShapeCircle radius="200px" />
    <Transform rotate="45deg">
      <ShapeRectangle color="orange" width="150px" />
    </Transform>
    <Spinner :progress="20" />
    <Popup v-if="popup">
      <IconButton icon="x" @click="popup = false" />
    </Popup>
    <Button @click="popup = true">
      Show popup
    </Button>
    <Button disabled>
      disabled
    </Button>
  </Container>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../../modules/icon-types'
  import { useState, ref } from '#imports'


  const check = ref(false)
  const focusActive = useState('focus-active', () => false)
  const code = `<div>
  hi
</div>`

  const testRef = ref<HTMLElement | null>(null)
  const testRef2 = ref<HTMLElement | null>(null)

  const layout = [{ width: '20px', place: 'center' }, { width: '40%' }, { width: 'auto', justify: 'end' }]


  function toggleFocus() {
    focusActive.value = !focusActive.value
  }

  const page = ref(1)
  const path = [{ iconName: 'folder' as IconTypes, text: 'Home' }, { iconName: 'file' as IconTypes, text: 'File' }]

  const popup = ref(false)
  const textArea = ref('Type something')
</script>
