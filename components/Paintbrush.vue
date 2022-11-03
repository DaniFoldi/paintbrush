<!--!
  @version 1.4.0
  @description Main component to be used everywhere
  @icon paintbrush
  @note This component should be wrapping every other Paintbrush component used, see Getting Started
-->

<template>
  <Container v-if="container" max>
    <slot />
  </Container>
  <slot v-else />
  <PaintbrushGantari v-if="fonts.includes('gantari')" />
  <PaintbrushInter v-if="fonts.includes('inter')" />
  <PaintbrushManrope v-if="fonts.includes('manrope')" />
  <PaintbrushPhosphorIcons v-if="fonts.includes('phosphor-icons')" />
  <PaintbrushPlayfairDisplay v-if="fonts.includes('playfair-display')" />
  <PaintbrushRaleway v-if="fonts.includes('raleway')" />
  <PaintbrushSourceCodePro v-if="fonts.includes('source-code-pro')" />
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, computed, useHead, useStyleTag, useThemeManager, setThemeColors, useThemeColor, handleShortcut, provide, usePaintbrushMeta } from '#imports'
  import { useTheme } from '../stores/theme'
  import packageJson from '../package.json'
  import { defaultPaintbrushPage, PaintbrushPage, fontMap, Font } from '../types/page'
  import { paintbrushColorScheme, paintbrushDarkColors, paintbrushLightColors } from '../types/theme'


  interface PaintbrushProps {
    appName?: string // Meta application name
    canonical?: string // Canonical url
    colorScheme?: Record<string, string> // Color scheme definitions
    container?: boolean // Wrap content in a container
    darkColors?: Record<string, string> // Dark scheme mappings
    defaultMeta?: Partial<PaintbrushPage> // Default rendering options
    description?: string // Meta, OG description
    favicon?: string // Favicon png
    faviconSvg?: string // Favicon svg
    fonts?: Font[] // Fonts to load
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
    colorScheme: () => paintbrushColorScheme,
    container: true,
    darkColors: () => paintbrushDarkColors,
    defaultMeta: () => defaultPaintbrushPage,
    description: '',
    favicon: '',
    faviconSvg: '',
    fonts: () => [ 'source-code-pro', 'gantari', 'manrope', 'phosphor-icons' ],
    keywords: () => [],
    lang: 'en_US',
    largeImage: '',
    largeImageAlt: '',
    lightColors: () => paintbrushLightColors,
    manifest: '',
    ogType: 'website',
    pageTitle: '',
    twitterHandle: '',
    twitterType: 'summary_large_image',
    url: ''
  })


  provide('pb-page', props.defaultMeta)

  const version = packageJson.version

  useStyleTag(useThemeManager(props.colorScheme, props.lightColors, props.darkColors))
  setThemeColors(props.colorScheme, props.lightColors, props.darkColors)
  const bodyClass = ref('motion-reduced')

  onMounted(() => {
    setTimeout(() => bodyClass.value = '', 200)
  })

  const theme = storeToRefs(useTheme())
  const backgroundColor = computed(() => useThemeColor('background').value)
  const primaryColor = computed(() => useThemeColor('primary').value)
  const font = computed(() => usePaintbrushMeta(props.defaultMeta).content.fontFamily as Font)

  useStyleTag(computed(() => `body { font-family: ${fontMap[font.value]}; }`))

  useHead({
    bodyAttrs: { class: bodyClass },
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
      // eslint-disable-next-line unicorn/text-encoding-identifier-case -- for meta tags UTF-8 is needed
      { charset: 'UTF-8' },
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
  @use '#paintbrush/assets/fonts.scss' as fonts;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/reset.scss' as reset;
  @use '#paintbrush/assets/colors.scss' as colors;

  @include reset.paintbrush;

  body {
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
