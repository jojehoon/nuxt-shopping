export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Shopping',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Shopping App' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    mode: `history`,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuratio n: https://go.nuxtjs.dev/config-build
  build: {},

  // Server setup
  server: {
    // port: process.env.NODE_ENV === 'production' ? null : 5000,
    port: process.env.NODE_ENV === 'production' ? null : 6600,
  },

  target: 'static',

  // ENV config
  env: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://my-json-server.typicode.com/jojehoon/nuxt-shopping-api'
        : 'http://localhost:3000',
  },
};
