<!--!
@name Paintbrush
@version 1.0.0
@description Main component to be used everywhere
@usage <Paintbrush></Paintbrush>

@note This component should be wrapping every other Paintbrush component used
@todo Add props to documentation, check one per page
-->
<template>
  <slot />
  <Html>
    <Head>
      <Meta charset="UTF-8" />
      <Meta :content="colorMap.theme" name="theme-color" />
      <Meta :content="colorMap.background" name="apple-mobile-web-app-status-bar-style" />
      <Meta :content="colorMap.primary" name="msapplication-navbutton-color" />
      <Meta :content="appName" name="apple-mobile-web-app-title" />
      <Meta content="yes" name="apple-mobile-web-app-capable" />
      <Meta content="yes" name="mobile-web-app-capable" />
      <Meta :content="appName" name="application-name" />
      <Meta :content="colorMap.background" name="msapplication-TileColor" />
      <Meta :content="favicon" name="msapplication-TileImage" />
      <Meta :content="description" name="description" />
      <Meta :content="keywords" name="keywords" />
      <Meta content="width=device-width, initial-scale=1.0 viewport-fit=cover" name="viewport" />
      <Meta :content="pageTitle" property="og:title" />
      <Meta :content="description" property="og:description" />
      <Meta :content="largeImage" property="og:image" />
      <Meta :content="url" property="og:url" />
      <Meta :content="ogType" property="og:type" />
      <Meta :content="appName" property="og:site_name" />
      <Meta :content="lang" property="og:locale" />
      <Meta :content="pageTitle" property="twitter:title" />
      <Meta :content="description" property="twitter:description" />
      <Meta :content="largeImage" property="twitter:image" />
      <Meta :content="twitterType" property="twitter:card" />
      <Meta :content="largeImageAlt" property="twitter:image:alt" />
      <Meta :content="twitterHandle" property="twitter:creator" />
      <Title>{{ pageTitle }}</Title>
      <Link :href="canonical" rel="canonical" />
      <Link :href="favicon" rel="icon" type="image/png" />
      <Link :href="favicon" rel="apple-touch-icon" />
      <Link :href="manifest" rel="manifest" />
      <Link href="https://cdnjs.com" rel="dns-prefetch" />
    </Head>
  </Html>
</template>

<script lang="ts" setup>
withDefaults(defineProps<PaintbrushProps>(), {
  appName: '',
  canonical: '',
  colorScheme: () => ({
    black: '#111',
    blue: '#3E56F4',
    darkergray: '#252525',
    darkestgray: '#1A1A1A',
    darkgray: '#555',
    gray: '#AAA',
    green: '#11E454',
    lightergray: '#E2E2E2',
    lightestgray: '#EFEFEF',
    lightgray: '#DDD',
    orange: '#FF6D1F',
    pink: '#EC368D',
    purple: '#7E09EC',
    red: '#F33',
    teal: '#22E0FF',
    white: '#FFF'
  }),
  darkColors: () => ({
    background: 'black',
    background2: 'darkestgray',
    backgroundHighlight: 'darkergray',
    primary: 'blue',
    radius: '4px',
    secondary: 'purple',
    text: 'white',
    textOnPrimary: 'white',
    textOnSecondary: 'white',
    unit: '4px'
  }),
  description: '',
  favicon: '',
  keywords: '',
  lang: 'en_US',
  largeImage: '',
  largeImageAlt: '',
  lightColors: () => ({
    background: 'white',
    background2: 'lightestgray',
    backgroundHighlight: 'lightergray',
    primary: 'blue',
    radius: '4px',
    secondary: 'purple',
    text: 'black',
    textOnPrimary: 'white',
    textOnSecondary: 'white',
    unit: '4px'
  }),
  manifest: '',
  ogType: 'website',
  pageTitle: '',
  twitterHandle: '',
  twitterType: 'summary_large_image',
  url: ''
})
</script>

<script lang="ts">
import { kebabCaseName, resolve } from '../scripts/color'
import { computed } from 'vue'

interface PaintbrushProps {
  appName?: string
  canonical?: string
  colorScheme?: Record<string, string>
  darkColors?: Record<string, string>
  description?: string
  favicon?: string
  keywords?: string
  lang?: string
  largeImage?: string
  largeImageAlt?: string
  lightColors?: Record<string, string>
  manifest?: string
  ogType?: string
  pageTitle?: string
  twitterType?: string
  twitterHandle?: string
  url?: string
}

export default {
  provide() {
    return {
      colorScheme: computed(() => this.colorScheme),
      paintbrush: this
    }
  },
  data() {
    return { darkTheme: true }
  },
  computed: {
    colorMap() {
      return this.darkTheme ? this.darkColors : this.lightColors
    }
  },
  beforeMount() {
    this.updateTheme()
  },
  methods: {
    updateTheme(useDarkTheme?: boolean) {
      this.darkTheme = useDarkTheme ?? !this.darkTheme

      for (const color in this.colorMap) {
        const variableName = kebabCaseName(color)
        const newValue = resolve(this.colorScheme, this.colorMap[color])
        const oldValue = getComputedStyle(document.documentElement).getPropertyValue(variableName)

        if (newValue !== oldValue) {
          document.documentElement.style.setProperty(variableName, newValue)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@use '../assets/reset';
@use '../assets/fonts';
@use '../node_modules/phosphor-icons/src/css/icons.css';
@use '../assets/mixins';

@include reset.paintbrush;

body {
  @include mixins.font('raleway');
  @include mixins.standard;
  @include mixins.with-fade;
}
</style>
