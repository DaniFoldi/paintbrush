<template>
  <Container class="scroll" max padded>
    <ClientOnly>
      <Float :above="testRef" />
    </ClientOnly>
    <Text>
      {{ $t('test') }}
    </Text>
    <Separator />
    <Icon name="gear" />
    <AutoLink href="https://paintbrush.danifoldi.com" reload>
      link
    </AutoLink>
    <Button ref="testRef" ghost uppercase>
      ghost
    </Button>
    <Separator />
    <Container>
      <OptionGroup v-model="defaultOption" :options="options" />
      <Text inline>
        | Currently selected: {{ defaultOption }}
      </Text>
    </Container>
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
    <!-- <Text subtitle>
      {{ $t('test') }}
      </Text> -->
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
    <Textarea v-model="textArea" resize="vertical" :rows="5" />

    <ClientOnly>
      <FocusMark
        :distance="12"
        :off="!focusActive"
        rounded="var(--double-unit)"
        :target="testRef2"
      />
    </ClientOnly>
    <Button color="pink" @click="toggleFocus">
      Toggle focus
    </Button>
    <Copyright :start-year="2022">
      Dániel Földi.
    </Copyright>
    <MultilineCode :code="code" />
    <Separator />
    <Text inline>
      Just some text
    </Text>
    <InlineCode code="<p>Just some text</p>" language="html" />
    <Text inline>
      surrounding inline code.
    </Text>

    <Separator />
    <Shortcut color="secondary" :keys="[ 'mod', 'shift', 'k' ]" />
    <Pagination ref="testRef2" :page="page" :total-items="100" />
    <Breadcrumbs :path="path" />

    <Toggle />
    <ShapeCircle radius="200px" />
    <Transform rotate="45deg">
      <ShapeRectangle color="orange" width="150px" />
    </Transform>
    <Popup v-if="popup">
      <IconButton icon="x" @click="popup = false" />
    </Popup>
    <Button @click="popup = true">
      Show popup
    </Button>
    <Button disabled>
      disabled
    </Button>
    <Dropdown :items="dropdownItems" title="Test Dropdown" />
    <Separator />
    <Container>
      <Spoiler title="Click Me">
        <Text>
          Hello there
        </Text>
      </Spoiler>
    </Container>
    <Separator />
    <Container>
      <RadioButton id="option1" name="test">
        Option 1
      </RadioButton>
      <RadioButton id="option2" name="test">
        Option 2
      </RadioButton>
      <RadioButton id="option3" name="test">
        Option 3
      </RadioButton>
    </Container>
  </Container>
</template>

<script lang="ts" setup>
  /* eslint-disable no-alert */
  import { useState, ref } from '#imports'
  import { IconTypes } from '../../../modules/icon-types'


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

  const options = [ 'option 1', 'option 2', 'option 3' ]
  const defaultOption = ref(options[1])

  const textArea = ref('Type something')

  onMounted(() => {
    defineShortcut({
      combo: {
        key: 'k',
        mod: true
      },
      handler: () => alert('Hello, notification')
    })
  })

  const dropdownItems = [
    {
      category: 'Category 1',
      name: 'Test 1'
    },
    {
      category: 'Category 1',
      name: 'Test 5',
      tags: [ 'A', 'B' ]
    },
    {
      category: 'Category 1',
      name: 'Test 6',
      tags: [ 'C' ]
    },
    {
      category: 'Category 2',
      name: 'Test 2',
      tags: [ 'A', 'C' ]
    },
    {
      category: 'Category 3',
      name: 'Test 3'
    },
    {
      category: 'Category 3',
      name: 'Test 4',
      tags: [ 'D', 'E', 'F' ]
    }
  ]

  useNotification().push({ title: 'hi', iconName: 'alarm' })
</script>
