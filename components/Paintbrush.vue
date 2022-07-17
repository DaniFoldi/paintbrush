<!--!
  @version 1.2.0
  @description Main component to be used everywhere
  @icon paintbrush
  @note This component should be wrapping every other Paintbrush component used, see Getting Started
-->

<template>
  <Container v-if="container" max>
    <slot />
  </Container>
  <slot v-else />
  <!-- eslint-disable-next-line vue/html-self-closing -- IDE syntax higlighting gets broken with self-closing -->
  <!-- <Style :children="htmlStyle"></Style> -->
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { kebabCaseName, resolve } from '../scripts/color'
  import { useTheme } from '../stores/theme'
  import packageJson from '../package.json'
  import { onMounted, ref, useHead, useThemeManager, setThemeColors, useThemeColor, handleShortcut } from '#imports'


  interface PaintbrushProps {
    appName?: string // Meta application name
    canonical?: string // Canonical url
    colorScheme?: Record<string, string> // Color scheme definitions
    container?: boolean // Wrap content in a container
    darkColors?: Record<string, string> // Dark scheme mappings
    description?: string // Meta, OG description
    favicon?: string // Favicon png
    faviconSvg?: string // Favicon svg
    keywords?: string[] // Meta keywords
    lang?: string // Language
    largeImage?: string // OG Large image
    largeImageAlt?: string // OG Large image alt
    lightColors?: Record<string, string> // Light scheme mappings
    manifest?: string // Manifest json
    ogType?: string // OG type
    pageTitle?: string // Page title
    twitterHandle?: string // Twitter handle
    twitterType?: string // Twitter website type
    url?: string // OG url
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

  useStyleTag(useThemeManager(lightVariables.value, darkVariables.value))
  const bodyClass = ref('motion-reduced')

  onMounted(() => {
    setTimeout(() => bodyClass.value = '', 200)
  })

  const theme = storeToRefs(useTheme())

  const backgroundColor = useThemeColor('background')
  const primaryColor = useThemeColor('primary')

  setThemeColors(props.colorScheme, props.lightColors, props.darkColors)

  useHead({
    bodyAttrs: { class: bodyClass },
    // eslint-disable-next-line unicorn/text-encoding-identifier-case -- for meta tags UTF-8 is needed
    charset: 'UTF-8',
    htmlAttrs: { 'data-theme': theme.theme, lang: props.lang.split('-')[0].split('_')[0] },
    link: [
      props.faviconSvg ? { color: primaryColor, href: props.faviconSvg, rel: 'mask-icon' } : {},
      props.canonical ? { href: props.canonical, rel: 'canonical' } : {},
      props.faviconSvg ? { href: props.faviconSvg, rel: 'icon', type: 'image/svg' } : {},
      props.favicon ? { href: props.favicon, rel: 'icon', type: 'image/png' } : {},
      props.favicon ? { href: props.favicon, rel: 'shortcut', type: 'image/png' } : {},
      props.favicon ? { href: props.favicon, rel: 'apple-touch-icon' } : {},
      props.manifest ? { href: props.manifest, rel: 'manifest' } : {}
    ].filter(Boolean),
    meta: [
      primaryColor ? { content: primaryColor, name: 'theme-color' } : {},
      backgroundColor ? { content: backgroundColor, name: 'apply-mobile-web-app-status-bar-style' } : {},
      primaryColor ? { content: primaryColor, name: 'msapplication-navbutton-color' } : {},
      props.appName ? { content: props.appName, name: 'apple-mobile-web-app-title' } : {},
      { content: 'yes', name: 'apple-mobile-web-app-capable' },
      { content: 'yes', name: 'mobile-web-app-capable' },
      props.appName ? { content: props.appName, name: 'application-name' } : {},
      backgroundColor ? { content: backgroundColor, name: 'msapplication-TileColor' } : {},
      props.favicon ? { content: props.favicon, name: 'msapplication-TitleImage' } : {},
      props.description ? { content: props.description, name: 'description' } : {},
      props.keywords ? { content: props.keywords.join(','), name: 'keywords' } : {},
      { content: 'width=device-width, initial-scale=1.0, viewport-fit=cover', name: 'viewport' },
      props.pageTitle ? { content: props.pageTitle, property: 'og:title' } : {},
      props.description ? { content: props.description, property: 'og:description' } : {},
      props.largeImage ? { content: props.largeImage, property: 'og:image' } : {},
      props.largeImageAlt ? { content: props.largeImageAlt, property: 'og:image:alt' } : {},
      props.url ? { content: props.url, property: 'og:url' } : {},
      props.ogType ? { content: props.ogType, property: 'og:type' } : {},
      props.appName ? { content: props.appName, property: 'og:site_name' } : {},
      props.lang ? { content: props.lang, property: 'og:locale' } : {},
      props.pageTitle ? { content: props.pageTitle, property: 'twitter:title' } : {},
      props.description ? { content: props.description, property: 'twitter:description' } : {},
      props.largeImage ? { content: props.largeImage, property: 'twitter:image' } : {},
      props.twitterType ? { content: props.twitterType, property: 'twitter:card' } : {},
      props.largeImageAlt ? { content: props.largeImageAlt, property: 'twitter:image:alt' } : {},
      props.twitterHandle ? { content: props.twitterHandle, property: 'twitter:creator' } : {},
      { content: 'True', property: 'HandheldFriendly' },
      { content: 'no-referrer-when-downgrade', name: 'referrer' },
      version ? { content: `Paintbrush ${version}`, name: 'generator' } : {}
    ].filter(Boolean),
    title: props.pageTitle ?? ''
  })

  onMounted(() => {
    document.addEventListener('keydown', handleShortcut)
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
