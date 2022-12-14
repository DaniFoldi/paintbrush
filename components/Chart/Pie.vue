<!--!
  @icon chart-pie
  @version 0.2.0
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A pie chart
-->

<template>
  <Pie :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Pie } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface PieChartProps {
    data: ChartProps<'pie', number[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'pie', number[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<PieChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
