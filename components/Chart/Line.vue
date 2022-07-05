<!--!
  @icon chart-line
  @version 0.1.2
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A line chart
-->

<template>
  <Line :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Line } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface LineChartProps {
    data: TChartData<'line', (number | ScatterDataPoint | null)[], unknown> // chart data to render
    height?: string // height of chart
    options?: TChartOptions<'line'> // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<LineChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
