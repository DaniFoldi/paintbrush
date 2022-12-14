<!--!
  @icon chart-line
  @version 0.2.0
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A line chart
-->

<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Line } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface LineChartProps {
    data: ChartProps<'line', (number | ScatterDataPoint | null)[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'line', (number | ScatterDataPoint | null)[], unknown>['options'] // options for chart
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
