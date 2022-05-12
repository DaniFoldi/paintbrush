<template>
  <MenubarContainer :wrap-content="false">
    <template #menubar-left>
      <MenubarLink href="https://paintbrush.danifoldi.com">
        Source
      </MenubarLink>
    </template>
    <template #content>
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
        <MultilineCode :code="code" />
        <ChartBar
          :data="chart"
          height="400px"
          :options="{ maintainAspectRatio: false }"
          width="800px"
        />
        <Shortcut color="secondary" :keys="[ 'mod', 'shift', 'k' ]" />
        <Copyright :start-year="2022">
          Dániel Földi.
        </Copyright>

        <Pagination :page="page" :total-items="100" />
        <Breadcrumbs :path="path" />
        <Highlight
          icon-color="orange"
          icon-name="warning"
          icon-variant="bold"
          warning
        >
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
        <ChartLine
          :data="chart2"
          height="400px"
          :options="{ maintainAspectRatio: false }"
          width="800px"
        />
      </Container>
    </template>
  </MenubarContainer>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../modules/icon-types'
  import type { TChartData } from 'vue-chartjs/dist/types'
  import { useState, ref } from '#imports'


  const check = ref(false)
  const focusActive = useState('focus-active', () => false)
  const code = `<div>
  hi
</div>`

  const layout = [{ width: '20px', place: 'center' }, { width: '40%' }, { width: 'auto', justify: 'end' }]

  const chart: TChartData<'bar'> = {
    labels: [
      'A',
      'B',
      'C',
      'D'
    ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: 'red',
        data: [ 20, -9, 7, 10 ]
      }
    ]
  }

  const chart2: TChartData<'line'> = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [ 40, 39, 10, 40, 39, 80, 40 ]
      }
    ]
  }

  function toggleFocus() {
    focusActive.value = !focusActive.value
  }

  const page = ref(1)
  const path = [{ iconName: 'folder' as IconTypes, text: 'Home' }, { iconName: 'file' as IconTypes, text: 'File' }]
</script>
