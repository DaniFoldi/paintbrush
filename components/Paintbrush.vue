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
      <Meta :content="lightThemeColor" name="theme-color" />
      <Meta :content="darkThemeColor" name="theme-color" />
      <Meta :content="lightThemeColor" name="theme-color" />
      <Meta :content="lightBackgroundColor" name="apple-mobile-web-app-status-bar-style" />
      <Meta :content="primaryColor" name="msapplication-navbutton-color" />
      <Meta :content="appName" name="apple-mobile-web-app-title" />
      <Meta content="yes" name="apple-mobile-web-app-capable" />
      <Meta content="yes" name="mobile-web-app-capable" />
      <Meta :content="appName" name="application-name" />
      <Meta :content="lightBackgroundColor" name="msapplication-TileColor" />
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
  borderRadius: '4px',
  canonical: '',
  colorScheme: () => ({
    black: '#111111',
    black2: '#181818',
    blue: '#3e56f4',
    darkgray: '#555555',
    gray: '#aaaaaa',
    green: '#11e454',
    orange: '#ff6d1f',
    pink: '#ec368d',
    purple: '#7e09ec',
    red: '#ff3333',
    silver: '#dddddd',
    teal: '#22e0ff',
    white: '#ffffff',
    white2: '#efefef'
  }),
  darkBackgroundColor: 'black',
  darkBackgroundColorSecond: 'black2',
  darkTextColor: 'white',
  darkTextColorSecond: 'white2',
  darkThemeColor: 'black',
  description: '',
  favicon: '',
  keywords: '',
  lang: 'en_US',
  largeImage: '',
  largeImageAlt: '',
  lightBackgroundColor: 'white',
  lightBackgroundColorSecond: 'white2',
  lightTextColor: 'black',
  lightTextColorSecond: 'black2',
  lightThemeColor: 'white',
  manifest: '',
  ogType: 'website',
  pageTitle: '',
  primaryColor: 'blue',
  secondaryColor: 'purple',
  twitterHandle: '',
  twitterType: 'summary_large_image',
  unitSize: '4px',
  url: ''
})
</script>

<script lang="ts">
import { resolve } from '../scripts/color'

interface PaintbrushProps {
  appName?: string
  borderRadius?: string
  canonical?: string
  colorScheme?: Record<string, string>
  darkBackgroundColor?: string
  darkBackgroundColorSecond?: string
  darkTextColor?: string
  darkTextColorSecond?: string
  darkThemeColor?: string
  description?: string
  favicon?: string
  keywords?: string
  lang?: string
  largeImage?: string
  largeImageAlt?: string
  lightBackgroundColor?: string
  lightBackgroundColorSecond?: string
  lightTextColor?: string
  lightTextColorSecond?: string
  lightThemeColor?: string
  manifest?: string
  ogType?: string
  pageTitle?: string
  primaryColor?: string
  secondaryColor?: string
  twitterType?: string
  twitterHandle?: string
  unitSize?: string
  url?: string
}

const getVar = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

const setVar = (name: string, value: string) => {
  if (getVar(name) !== value) {
    document.documentElement.style.setProperty(name, value)
  }
}

const setColor = (scheme: Record<string, string>, primary: string, secondary: string, name: string, value: string) => {
  setVar(name, resolve(scheme, value, primary, secondary))
}

export default {
  provide() {
    return {
      colorScheme: this.colorScheme,
      paintbrush: this
    }
  },
  beforeMount() {
    const c = this.colorScheme
    const p = this.primaryColor
    const s = this.secondaryColor
    setColor(c, p, s, '--primary', this.primaryColor)
    setColor(c, p, s, '--secondary', this.secondaryColor)
    setColor(c, p, s, '--light-background', this.lightBackgroundColor)
    setColor(c, p, s, '--dark-background', this.darkBackgroundColor)
    setColor(c, p, s, '--light-text', this.lightTextColor)
    setColor(c, p, s, '--dark-text', this.darkTextColor)
    setColor(c, p, s, '--light-background-second', this.lightBackgroundColorSecond)
    setColor(c, p, s, '--dark-background-second', this.darkBackgroundColorSecond)
    setColor(c, p, s, '--light-text-second', this.lightTextColorSecond)
    setColor(c, p, s, '--dark-text-second', this.darkTextColorSecond)
    setColor(c, p, s, '--light-theme', this.lightThemeColor)
    setColor(c, p, s, '--dark-theme', this.darkThemeColor)
    setVar('--unit', this.unitSize)
    setVar('--radius', this.borderRadius)
  }
}
</script>

<style lang="scss">
@use '../assets/reset';
@use '../assets/theme';
@use '../assets/fonts';

@include reset.paintbrush;
@include theme.root;

body {
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
}
</style>
