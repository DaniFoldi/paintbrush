<!--!
  @name Paintbrush
  @version 1.0.0
  @description Main component to be used everywhere
  @usage
  <Paintbrush>
  <Text>Hello world</Text>
  </Paintbrush>

  @note This component should be wrapping every other Paintbrush component used
-->
<!-- TODO add props to documentation -->
<template>
  <Container v-if="container">
    <slot />
  </Container>
  <slot v-else />

  <Html :lang="lang.split('-')[0].split('_')[0]">
    <Head>
      <!-- stylelint-disable no-empty-source -->
      <!-- eslint-disable-next-line vue/html-self-closing -- IDE syntax higlighting gets broken with self-closing -->
      <Style :children="htmlStyle"></Style>
      <!-- <Meta :content="colorMap.theme" name="theme-color" /> -->
      <!-- <Meta :content="colorMap.background" name="apple-mobile-web-app-status-bar-style" /> -->
      <!-- <Meta :content="colorMap.primary" name="msapplication-navbutton-color" /> -->
      <Meta :content="appName" name="apple-mobile-web-app-title" />
      <Meta content="yes" name="apple-mobile-web-app-capable" />
      <Meta content="yes" name="mobile-web-app-capable" />
      <Meta :content="appName" name="application-name" />
      <!-- <Meta :content="colorMap.background" name="msapplication-TileColor" /> -->
      <Meta :content="favicon" name="msapplication-TileImage" />
      <Meta :content="description" name="description" />
      <Meta :content="keywords.join(',')" name="keywords" />
      <Meta content="width=device-width, initial-scale=1.0, max-scale=1.0, viewport-fit=cover" name="viewport" />
      <Meta :content="pageTitle" property="og:title" />
      <Meta :content="description" property="og:description" />
      <Meta :content="largeImage" property="og:image" />
      <Meta :content="largeImageAlt" property="og:image:alt" />
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
      <Link :href="faviconSvg" rel="icon" type="image/svg" />
      <Link :href="favicon" rel="icon" type="image/png" />
      <Link :href="favicon" rel="apple-touch-icon" />
      <Link v-if="manifest" :href="manifest" rel="manifest" />
      <Link href="https://cdnjs.com" rel="dns-prefetch" />
    </Head>
  </Html>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { kebabCaseName, resolve } from '../scripts/color'
  import { style } from '../scripts/theme'


  interface PaintbrushProps {
    appName?: string
    canonical?: string
    colorScheme?: Record<string, string>
    container?: boolean
    darkColors?: Record<string, string>
    description?: string
    favicon?: string
    faviconSvg?: string
    keywords?: string[]
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

  const props = withDefaults(defineProps<PaintbrushProps>(), {
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
    container: true,
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
      theme: 'black',
      unit: '4px'
    }),
    description: '',
    favicon: '',
    faviconSvg: '',
    keywords: () => [],
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
      theme: 'blue',
      unit: '4px'
    }),
    manifest: '',
    ogType: 'website',
    pageTitle: '',
    twitterHandle: '',
    twitterType: 'summary_large_image',
    url: ''
  })

  const lightVariables = computed(() => Object.keys(props.lightColors).map(color => `--${kebabCaseName(color)}: ${resolve(props.colorScheme, props.lightColors[color])};`).join(' '))
  const darkVariables = computed(() => Object.keys(props.darkColors).map(color => `--${kebabCaseName(color)}: ${resolve(props.colorScheme, props.darkColors[color])};`).join(' '))

  const htmlStyle = style(lightVariables.value, darkVariables.value)
</script>

<style lang="scss">
@use '../assets/fonts';
@use '../assets/mixins';
@use '../assets/reset';
@use '../node_modules/phosphor-icons/src/css/icons.css';

@include reset.paintbrush;
@include fonts.inter;
@include fonts.playfair-display;
@include fonts.raleway;

body {
  @include mixins.font('raleway');
  @include mixins.standard;
  @include mixins.with-fade;
}
</style>
