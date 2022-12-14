<!--!
  @version 0.2.0
  @icon dots-nine
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A scatter chart
-->

<template>
  <Scatter :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Scatter } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface ScatterChartProps {
    data: ChartProps<'scatter', (number | ScatterDataPoint | null)[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'scatter', (number | ScatterDataPoint | null)[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<ScatterChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
