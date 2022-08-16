<!--!
  @version 1.3.1
  @description Main component to be used everywhere
  @icon paintbrush
  @note This component should be wrapping every other Paintbrush component used, see Getting Started
-->

<template>
  <Container v-if="container" max>
    <slot />
  </Container>
  <slot v-else />
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, computed, useHead, useStyleTag, useThemeManager, setThemeColors, useThemeColor, handleShortcut } from '#imports'
  import { useTheme } from '../stores/theme'
  import packageJson from '../package.json'


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
      'aqua-0': '#ffffff',
      'aqua-1': '#cffffe',
      'aqua-2': '#00fffc',
      'aqua-3': '#00e5e2',
      'aqua-4': '#00c5c3',
      'aqua-5': '#00a6a4',
      'aqua-6': '#008987',
      'aqua-7': '#006c6b',
      'aqua-8': '#005150',
      'aqua-9': '#003635',
      'aqua-10': '#001d1c',
      'azure-0': '#ffffff',
      'azure-1': '#f2f6ff',
      'azure-2': '#dae6ff',
      'azure-3': '#b6ceff',
      'azure-4': '#82b2ff',
      'azure-5': '#3197ff',
      'azure-6': '#007cda',
      'azure-7': '#0062ae',
      'azure-8': '#004984',
      'azure-9': '#00315b',
      'azure-10': '#001934',
      'blue-0': '#ffffff',
      'blue-1': '#cde5ff',
      'blue-2': '#93ccff',
      'blue-3': '#30b5ff',
      'blue-4': '#0099dd',
      'blue-5': '#007eb7',
      'blue-6': '#006492',
      'blue-7': '#004b6f',
      'blue-8': '#00344e',
      'blue-9': '#001e2f',
      'blue-10': '#000000',
      'gray-0': '#f6f6f6',
      'gray-1': '#e2e2e2',
      'gray-2': '#c6c6c6',
      'gray-3': '#ababab',
      'gray-4': '#919191',
      'gray-5': '#777777',
      'gray-6': '#5e5e5e',
      'gray-7': '#474747',
      'gray-8': '#303030',
      'gray-9': '#1b1b1b',
      'gray-10': '#0a0a0a',
      'green-0': '#ffffff',
      'green-1': '#ecffec',
      'green-2': '#caffca',
      'green-3': '#89ff8b',
      'green-4': '#00f715',
      'green-5': '#00dd11',
      'green-6': '#00bd0d',
      'green-7': '#009608',
      'green-8': '#006d04',
      'green-9': '#004602',
      'green-10': '#002400',
      'indigo-0': '#ffffff',
      'indigo-1': '#dce1ff',
      'indigo-2': '#b8c3ff',
      'indigo-3': '#93a6ff',
      'indigo-4': '#6889ff',
      'indigo-5': '#2a6cff',
      'indigo-6': '#0054d7',
      'indigo-7': '#003fa5',
      'indigo-8': '#002a76',
      'indigo-9': '#00184a',
      'indigo-10': '#000000',
      'lime-0': '#ffffff',
      'lime-1': '#f0ffe0',
      'lime-2': '#d6ffa1',
      'lime-3': '#b6fb00',
      'lime-4': '#a9e800',
      'lime-5': '#97d000',
      'lime-6': '#80b200',
      'lime-7': '#658d00',
      'lime-8': '#486600',
      'lime-9': '#2d4100',
      'lime-10': '#152100',
      'orange-0': '#ffffff',
      'orange-1': '#fff3f1',
      'orange-2': '#ffded8',
      'orange-3': '#ffbeb0',
      'orange-4': '#ff9575',
      'orange-5': '#f96800',
      'orange-6': '#ce5500',
      'orange-7': '#a44200',
      'orange-8': '#7c3000',
      'orange-9': '#551f00',
      'orange-10': '#300e00',
      'pink-0': '#ffffff',
      'pink-1': '#ffd9e0',
      'pink-2': '#ffb1c0',
      'pink-3': '#ff86a1',
      'pink-4': '#ff4d81',
      'pink-5': '#ea0064',
      'pink-6': '#bc004f',
      'pink-7': '#90003b',
      'pink-8': '#660028',
      'pink-9': '#3f0016',
      'pink-10': '#000000',
      'purple-0': '#ffffff',
      'purple-1': '#e6deff',
      'purple-2': '#cfbdff',
      'purple-3': '#b99aff',
      'purple-4': '#a576ff',
      'purple-5': '#934bff',
      'purple-6': '#8100f5',
      'purple-7': '#6200bd',
      'purple-8': '#440087',
      'purple-9': '#290055',
      'purple-10': '#000000',
      'red-0': '#ffffff',
      'red-1': '#ffdada',
      'red-2': '#ffb3b3',
      'red-3': '#ff8889',
      'red-4': '#ff5354',
      'red-5': '#ef0007',
      'red-6': '#c00004',
      'red-7': '#930002',
      'red-8': '#690001',
      'red-9': '#410000',
      'red-10': '#000000',
      'teal-0': '#ffffff',
      'teal-1': '#e8fff6',
      'teal-2': '#bfffe7',
      'teal-3': '#61ffd1',
      'teal-4': '#00f1be',
      'teal-5': '#00d8aa',
      'teal-6': '#00b891',
      'teal-7': '#009273',
      'teal-8': '#006a52',
      'teal-9': '#004434',
      'teal-10': '#002319',
      'yellow-0': '#ffffff',
      'yellow-1': '#fff9f1',
      'yellow-2': '#ffefda',
      'yellow-3': '#ffe2b3',
      'yellow-4': '#ffce67',
      'yellow-5': '#edb700',
      'yellow-6': '#cb9c00',
      'yellow-7': '#a17b00',
      'yellow-8': '#755900',
      'yellow-9': '#4b3800',
      'yellow-10': '#271c00'
    }),
    container: true,
    darkColors: () => ({
      background: 'gray-9',
      backgroundText: 'gray-0',
      disabled: 'gray-5',
      doubleUnit: '8px',
      highlightBackground: 'gray-7',
      highlightText: 'gray-0',
      menuBackground: 'gray-10',
      menuText: 'gray-0',
      primary: 'blue-4',
      primaryText: 'gray-10',
      radius: '4px',
      secondary: 'aqua-4',
      secondaryText: 'gray-0',
      shadow: 'gray-6',
      shadowText: 'gray-4',
      theme: 'primary',
      transparentize: '3f',
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
      background: 'gray-1',
      backgroundText: 'gray-10',
      disabled: 'gray-5',
      doubleUnit: '8px',
      highlightBackground: 'gray-3',
      highlightText: 'gray-10',
      menuBackground: 'gray-0',
      menuText: 'gray-10',
      primary: 'azure-5',
      primaryText: 'gray-10',
      radius: '4px',
      secondary: 'aqua-4',
      secondaryText: 'gray-10',
      shadow: 'gray-4',
      shadowText: 'gray-6',
      theme: 'primary',
      transparentize: '3f',
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

  useStyleTag(useThemeManager(props.colorScheme, props.lightColors, props.darkColors))
  setThemeColors(props.colorScheme, props.lightColors, props.darkColors)
  const bodyClass = ref('motion-reduced')

  onMounted(() => {
    setTimeout(() => bodyClass.value = '', 200)
  })

  const theme = storeToRefs(useTheme())
  const backgroundColor = computed(() => useThemeColor('background'))
  const primaryColor = computed(() => useThemeColor('primary'))

  useHead({
    bodyAttrs: { class: bodyClass },
    // eslint-disable-next-line unicorn/text-encoding-identifier-case -- for meta tags UTF-8 is needed
    charset: 'UTF-8',
    htmlAttrs: { 'data-theme': theme.theme, lang: props.lang.split('-')[0].split('_')[0] },
    link: [
      props.faviconSvg ? { color: primaryColor.value, href: props.faviconSvg, rel: 'mask-icon' } : {},
      props.canonical ? { href: props.canonical, rel: 'canonical' } : {},
      props.faviconSvg ? { href: props.faviconSvg, rel: 'icon', type: 'image/svg' } : {},
      props.favicon ? { href: props.favicon, rel: 'icon', type: 'image/png' } : {},
      props.favicon ? { href: props.favicon, rel: 'shortcut', type: 'image/png' } : {},
      props.favicon ? { href: props.favicon, rel: 'apple-touch-icon' } : {},
      props.manifest ? { href: props.manifest, rel: 'manifest' } : {}
    ].filter(Boolean),
    meta: [
      primaryColor.value ? { content: primaryColor.value, name: 'theme-color' } : {},
      backgroundColor.value ? { content: backgroundColor.value, name: 'apply-mobile-web-app-status-bar-style' } : {},
      primaryColor.value ? { content: primaryColor.value, name: 'msapplication-navbutton-color' } : {},
      props.appName ? { content: props.appName, name: 'apple-mobile-web-app-title' } : {},
      { content: 'yes', name: 'apple-mobile-web-app-capable' },
      { content: 'yes', name: 'mobile-web-app-capable' },
      props.appName ? { content: props.appName, name: 'application-name' } : {},
      backgroundColor.value ? { content: backgroundColor.value, name: 'msapplication-TileColor' } : {},
      props.favicon ? { content: props.favicon, name: 'msapplication-TitleImage' } : {},
      props.description ? { content: props.description, name: 'description' } : {},
      props.keywords.length > 0 ? { content: props.keywords.join(','), name: 'keywords' } : {},
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
  @use '~/assets/fonts';
  @use '~/assets/mixins';
  @use '~/assets/reset';
  @use '~/assets/colors';
  @use '~/node_modules/phosphor-icons/src/css/icons.css';

  @include reset.paintbrush;
  @include fonts.inter;
  @include fonts.playfair-display;
  @include fonts.raleway;

  body {
    @include fonts.font('raleway');
    @include colors.standard-background;
    @include colors.standard-color;
    @include mixins.fade('background', 'color');
  }

  .motion-reduced {

    &, &::before, &::after {
      @include mixins.reduced-motion;
    }
  }
</style>
