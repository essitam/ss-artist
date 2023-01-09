export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sidstarkman',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
   "gsap"
 ]
},
gsap: {
  extraPlugins: {
   scrollTo: true,
   scrollTrigger: true,
   motionPath: true
 },
  extraEases: {
    expoScaleEase: true
  }
/* Module Options */
},
googleFonts: {
  families: {
    'DM+Serif+Text': true,
    'Josefin+Sans': true,
    Lato: [100, 300],
    Raleway: {
      wght: [100, 400],
      ital: [100]
    },
  }
}
}
