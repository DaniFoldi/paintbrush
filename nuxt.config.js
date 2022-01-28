export default {
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }
    ],
    link: [{ rel: 'icon', href: '/favicon.png' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxt/content'],
  build: {}
}
