<!--!
  @icon chart-bar
  @version 0.2.0
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A bar chart
-->

<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Bar } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface BarChartProps {
    data: ChartProps<'bar', number[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'bar', number[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<BarChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
