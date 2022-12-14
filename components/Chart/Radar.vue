<!--!
  @version 0.2.0
  @icon globe-hemisphere-west
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A radar chart
-->

<template>
  <Radar :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Radar } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface RadarChartProps {
    data: ChartProps<'radar', (number | null)[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'radar', (number | null)[], unknown>['options'] // options for chart
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
