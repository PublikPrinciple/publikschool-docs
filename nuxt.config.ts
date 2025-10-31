export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  },
  routeRules: {
    '/**': { prerender: true }
  },
  nitro: {
    preset: 'vercel'
  }
})
