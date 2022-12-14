<!--!
  @version 0.2.0
  @icon chart-pie-slice
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A polar chart
-->

<template>
  <PolarArea :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { PolarArea } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface PolarChartProps {
    data: ChartProps<'polarArea', number[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'polarArea', number[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<PolarChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
