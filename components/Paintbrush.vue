<!--!
  @version 1.0.0
  @description Main component to be used everywhere
  @usage
  <Paintbrush ...>
  __<Text>Hello world</Text>
  </Paintbrush>
  @icon paintbrush
  @note This component should be wrapping every other Paintbrush component used, see Getting Started
-->

<template>
  <Container v-if="container" max>
    <slot />
  </Container>
  <slot v-else />

  <Html :lang="lang.split('-')[0].split('_')[0]">
    <Head>
      <!-- eslint-disable-next-line vue/html-self-closing -- IDE syntax higlighting gets broken with self-closing -->
      <Style :children="htmlStyle"></Style>
      <Title>{{ pageTitle }}</Title>
    </Head>
    <Body :class="bodyClass" />
  </Html>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { kebabCaseName, resolve } from '../scripts/color'
  import { useTheme } from '../stores/theme'
  import packageJson from '../package.json'
  import { onMounted, ref, useHead, useThemeManager, setThemeColors, useThemeColor } from '#imports'


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
    twitterHandle?: string
    twitterType?: string
    url?: string
  }

  const props = withDefaults(defineProps<PaintbrushProps>(), {
    appName: '',
    canonical: '',
    colorScheme: () => ({
      black: '#111111',
      blue: '#3E56F4',
      darkergray: '#363636',
      darkestgray: '#252525',
      darkgray: '#555555',
      gray: '#AAAAAA',
      green: '#11E454',
      lightergray: '#E2E2E2',
      lightestgray: '#EFEFEF',
      lightgray: '#DDDDDD',
      orange: '#FF6D1F',
      pink: '#EC368D',
      purple: '#7E09EC',
      red: '#FF3333',
      teal: '#22E0FF',
      white: '#FFFFFF'
    }),
    container: true,
    darkColors: () => ({
      background: 'black',
      background2: 'darkestgray',
      backgroundHighlight: 'darkergray',
      badge: 'red',
      disabled: 'gray',
      doubleUnit: '8px',
      primary: 'blue',
      radius: '4px',
      secondary: 'purple',
      text: 'white',
      text2: 'lightestgray',
      textOnBadge: 'white',
      textOnPrimary: 'white',
      textOnSecondary: 'white',
      textShade: 'gray',
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
      badge: 'red',
      disabled: 'gray',
      doubleUnit: '8px',
      primary: 'blue',
      radius: '4px',
      secondary: 'purple',
      text: 'black',
      text2: 'darkestgray',
      textOnBadge: 'white',
      textOnPrimary: 'white',
      textOnSecondary: 'white',
      textShade: 'gray',
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

  const version = packageJson.version

  const lightVariables = computed(() => Object.keys(props.lightColors).map(color => `--${kebabCaseName(color)}: ${resolve(props.colorScheme, props.lightColors[color])};`).join(' '))
  const darkVariables = computed(() => Object.keys(props.darkColors).map(color => `--${kebabCaseName(color)}: ${resolve(props.colorScheme, props.darkColors[color])};`).join(' '))

  const htmlStyle = useThemeManager(lightVariables.value, darkVariables.value)
  const bodyClass = ref('motion-reduced')

  onMounted(() => {
    setTimeout(() => bodyClass.value = '', 250)
  })

  const theme = storeToRefs(useTheme())

  const themeColor = useThemeColor('theme')
  const backgroundColor = useThemeColor('background')
  const primaryColor = useThemeColor('primary')

  setThemeColors(props.colorScheme, props.lightColors, props.darkColors)

  useHead({
    // eslint-disable-next-line unicorn/text-encoding-identifier-case -- for meta tags utf-8 is needed
    charset: 'UTF-8',
    htmlAttrs: { 'data-theme': theme.theme },
    link: [
      { color: primaryColor, href: props.faviconSvg, rel: 'mask-icon' },
      { href: props.canonical, rel: 'canonical' },
      { href: props.faviconSvg, rel: 'icon', type: 'image/svg' },
      { href: props.favicon, rel: 'icon', type: 'image/png' },
      { href: props.favicon, rel: 'shortcut', type: 'image/png' },
      { href: props.favicon, rel: 'apple-touch-icon' },
      (props.manifest ? { href: props.manifest, rel: 'manifest' } : {}),
      { href: 'https://cdnjs.com', rel: 'dns-prefetch' }
    ],
    meta: [
      { content: themeColor, name: 'theme-color' },
      { content: backgroundColor, name: 'apply-mobile-web-app-status-bar-style' },
      { content: primaryColor, name: 'msapplication-navbutton-color' },
      { content: props.appName, name: 'apple-mobile-web-app-title' },
      { content: 'yes', name: 'apple-mobile-web-app-capable' },
      { content: 'yes', name: 'mobile-web-app-capable' },
      { content: props.appName, name: 'application-name' },
      { content: backgroundColor, name: 'msapplication-TileColor' },
      { content: props.favicon, name: 'msapplication-TitleImage' },
      { content: props.description, name: 'description' },
      { content: props.keywords.join(','), name: 'keywords' },
      { content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover', name: 'viewport'  },
      { content: props.pageTitle, property: 'og:title' },
      { content: props.description, property: 'og:description' },
      { content: props.largeImage, property: 'og:image' },
      { content: props.largeImageAlt, property: 'og:image:alt' },
      { content: props.url, property: 'og:url' },
      { content: props.ogType, property: 'og:type' },
      { content: props.appName, property: 'og:site_name' },
      { content: props.lang, property: 'og:locale' },
      { content: props.pageTitle, property: 'twitter:title' },
      { content: props.description, property: 'twitter:description' },
      { content: props.largeImage, property: 'twitter:image' },
      { content: props.twitterType, property: 'twitter:card' },
      { content: props.largeImageAlt, property: 'twitter:image:alt' },
      { content: props.twitterHandle, property: 'twitter:creator' },
      { content: 'True', property: 'HandheldFriendly' },
      { content: 'no-referrer-when-downgrade', name: 'referrer' },
      { content: `Paintbrush ${version}`, name: 'generator' }
    ]
  })
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

  .motion-reduced {

    &, &::before, &::after {
      @include mixins.reduced-motion;
    }
  }
</style>
