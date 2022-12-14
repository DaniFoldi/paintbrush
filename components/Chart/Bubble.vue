<!--!
  @version 0.2.0
  @icon dots-six-vertical
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
  @description A bubble chart
-->

<template>
  <Bubble :data="data" :options="options" />
</template>

<script lang="ts" setup>
  import { Bubble } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
  import type { BubbleDataPoint } from 'chart.js'
  import type { ChartProps } from 'vue-chartjs'


  interface BubbleChartProps {
    data: ChartProps<'bubble', BubbleDataPoint[], unknown>['data'] // chart data to render
    height?: string // height of chart
    options?: ChartProps<'bubble', BubbleDataPoint[], unknown>['options'] // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<BubbleChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, PointElement, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
