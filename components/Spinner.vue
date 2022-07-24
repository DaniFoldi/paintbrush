<!--!
  @category Basic
  @version 1.1.0
  @icon circle-notch
  @description Display a loading indicator
-->

<!--##
  <Spinner />
-->

<template>
  <div class="spinner-container" :class="containerClasses">
    <div class="spinner spinner1" />
    <div class="spinner spinner2" />
    <div class="spinner spinner3" />
  </div>
</template>

<script lang="ts" setup>
  import { computed, useThemeColor } from '#imports'


  interface SpinnerProps {
    circles?: boolean // Circles mode
    color?: string // Spinner color
    progress?: number // Progress of the action
  }

  const props = withDefaults(defineProps<SpinnerProps>(), {
    circles: true,
    color: 'primary',
    progress: 0
  })

  const containerClasses = {
    'spinner-circles': props.circles
  }

  const color = computed(() => useThemeColor(props.color).value)
</script>

<style lang="scss" scoped>
  @keyframes grow {

    from {
      transform: scale(1);
    }

    to {
      transform: scale(0);
    }
  }

  div.spinner-circles {
    display: inline-grid;
    gap: var(--unit);
    grid-template-columns: repeat(3, 1fr);

    div.spinner {
      animation-direction: alternate;
      animation-duration: .6s;
      animation-iteration-count: infinite;
      animation-name: grow;
      animation-timing-function: ease-in-out;
      background: v-bind(color);
      border-radius: 50%;
      height: 16px;
      width: 16px;
    }

    div.spinner1 {
      animation-delay: 0s;
    }

    div.spinner2 {
      animation-delay: .2s;
    }

    div.spinner3 {
      animation-delay: .4s;
    }
  }
</style>
