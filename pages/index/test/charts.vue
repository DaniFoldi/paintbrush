<template>
  <Container article max>
    <Container>
      <ChartBar
        :data="bar"
        height="400px"
        :options="{ maintainAspectRatio: false }"
        width="800px"
      />
      <ChartBubble :data="bubble" />
      <ChartDoughnut :data="doughnut" />
      <ChartLine
        :data="line"
        height="400px"
        :options="{ maintainAspectRatio: false }"
        width="800px"
      />
      <ChartPie :data="pie" />
      <ChartPolar :data="polar" />
      <ChartRadar :data="radar" />
      <ChartScatter :data="scatter" />
    </Container>
  </Container>
</template>

<script lang="ts" setup>
  import type { ChartProps } from 'vue-chartjs'


  const bar: ChartProps<'bar', number[], unknown>['data'] = {
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

  const bubble: ChartProps<'bubble'>['data'] = {
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [
          {
            x: 20,
            y: 25,
            r: 5
          },
          {
            x: 40,
            y: 10,
            r: 10
          },
          {
            x: 30,
            y: 22,
            r: 30
          }
        ]
      },
      {
        label: 'Data Two',
        backgroundColor: '#7C8CF8',
        data: [
          {
            x: 10,
            y: 30,
            r: 15
          },
          {
            x: 20,
            y: 20,
            r: 10
          },
          {
            x: 15,
            y: 8,
            r: 30
          }
        ]
      }
    ]
  }

  const doughnut: ChartProps<'doughnut'>['data'] = {
    labels: [ 'VueJs', 'EmberJs', 'ReactJs', 'AngularJs' ],
    datasets: [
      {
        backgroundColor: [ '#41B883', '#E46651', '#00D8FF', '#DD1B16' ],
        data: [ 40, 20, 80, 10 ]
      }
    ]
  }

  const line: ChartProps<'line'>['data'] = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [ 40, 39, 10, 40, 39, 80, 40 ]
      }
    ]
  }

  const pie: ChartProps<'pie'>['data'] = {
    labels: [ 'VueJs', 'EmberJs', 'ReactJs', 'AngularJs' ],
    datasets: [
      {
        backgroundColor: [ '#41B883', '#E46651', '#00D8FF', '#DD1B16' ],
        data: [ 40, 20, 80, 10 ]
      }
    ]
  }

  const polar: ChartProps<'polarArea', number[], unknown>['data'] = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: '#fff',
        data: [ 65, 59, 90, 81, 56, 55, 40 ],
        hoverBackgroundColor: '#fff',
        hoverBorderColor: 'rgba(179,181,198,1)',
        label: 'My First dataset'
      },
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: '#fff',
        data: [ 28, 48, 40, 19, 96, 27, 100 ],
        hoverBackgroundColor: '#fff',
        hoverBorderColor: 'rgba(255,99,132,1)',
        label: 'My Second dataset'
      }
    ]
  }

  const radar: ChartProps<'radar'>['data'] = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        data: [ 65, 59, 90, 81, 56, 55, 40 ],
        label: 'My First dataset',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)'
      },
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        data: [ 28, 48, 40, 19, 96, 27, 100 ],
        label: 'My Second dataset',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)'
      }
    ]
  }

  const scatter = {
    datasets: [
      {
        backgroundColor: '#f87979',
        borderColor: '#f87979',
        data: [
          {
            x: -2,
            y: 4
          },
          {
            x: -1,
            y: 1
          },
          {
            x: 0,
            y: 0
          },
          {
            x: 1,
            y: 1
          },
          {
            x: 2,
            y: 4
          }
        ],
        fill: false,
        label: 'Scatter Dataset 1'
      },
      {
        backgroundColor: '#7acbf9',
        borderColor: '#7acbf9',
        data: [
          {
            x: -2,
            y: -4
          },
          {
            x: -1,
            y: -1
          },
          {
            x: 0,
            y: 1
          },
          {
            x: 1,
            y: -1
          },
          {
            x: 2,
            y: -4
          }
        ],
        fill: false,
        label: 'Scatter Dataset 2'
      }
    ]
  }
</script>
