<template>
  <Container article max>
    <Container>
      <IconLink href="/test" icon="confetti">
        Link
      </IconLink>
      <Button small>
        small
      </Button>
      <Button large>
        large button
      </Button>

      <ChartBubble :data="bubble" />
      <ChartDoughnut :data="doughnut" />
      <ChartPie :data="pie" />
      <ChartPolar :data="polar" />
      <ChartRadar :data="radar" />
      <ChartScatter :data="scatter" />
    </Container>
  </Container>
</template>

<script lang="ts" setup>
  import type { TChartData } from 'vue-chartjs/dist/types'


  const bubble: TChartData<'bubble'> = {
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

  const doughnut: TChartData<'doughnut'> = {
    labels: [ 'VueJs', 'EmberJs', 'ReactJs', 'AngularJs' ],
    datasets: [
      {
        backgroundColor: [ '#41B883', '#E46651', '#00D8FF', '#DD1B16' ],
        data: [ 40, 20, 80, 10 ]
      }
    ]
  }

  const pie: TChartData<'pie'> = {
    labels: [ 'VueJs', 'EmberJs', 'ReactJs', 'AngularJs' ],
    datasets: [
      {
        backgroundColor: [ '#41B883', '#E46651', '#00D8FF', '#DD1B16' ],
        data: [ 40, 20, 80, 10 ]
      }
    ]
  }

  const polar: TChartData<'polarArea'> = {
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

  const radar: TChartData<'radar'> = {
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
