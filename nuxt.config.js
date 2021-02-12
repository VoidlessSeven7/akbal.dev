import TailwindConfig from './tailwind.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alejandro Akbal - Software developer',

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'Alejandro Akbal is a software developer. He enjoys many things: web development, design, accessibility, SEO, servers, tutorials, and everything in between.',
      },

      // Colors
      {
        hid: 'color-scheme',
        name: 'color-scheme',
        content: 'dark',
      },

      {
        hid: 'theme-color',
        name: 'theme-color',
        content: TailwindConfig.theme.extend.colors.brand,
      },

      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Alejandro Akbal',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://og-image.akbal.dev/**Alejandro Akbal** Software developer.png?theme=light&md=1&fontSize=125px&widths=350&heights=350',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://akbal.dev',
      },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'https://cdn.statically.io/img/raw.githubusercontent.com/h=32,w=32,q=90/AlejandroAkbal/brand/main/src/assets/Logo_white.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/global.css',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  sitemap: {
    hostname: 'https://akbal.dev',

    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}
