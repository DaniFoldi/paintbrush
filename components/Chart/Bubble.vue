<!--!
  @version 0.1.1
  @icon dots-six-vertical
  @category Chart
-->
<template>
  <Bubble :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Bubble } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
  import type { BubbleDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface BubbleChartProps {
    data: TChartData<'bubble', BubbleDataPoint[], unknown>
    height?: string
    options?: TChartOptions<'bubble'>
    width?: string
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
