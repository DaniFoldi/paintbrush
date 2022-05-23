<!--!
  @version 0.1.1
  @icon globe-hemisphere-west
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
-->

<template>
  <Radar :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Radar } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface RadarChartProps {
    data: TChartData<'radar', (number | null)[], unknown> // chart data to render
    height?: string // height of chart
    options?: TChartOptions<'radar'> // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<RadarChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
