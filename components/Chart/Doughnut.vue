<!--!
  @version 0.2.0
  @icon chart-pie
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A doughnut chart
-->

<template>
  <Doughnut :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Doughnut } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface DoughnutChartProps {
    data: ChartProps<'doughnut', number[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'doughnut', number[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<DoughnutChartProps>(), {
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
