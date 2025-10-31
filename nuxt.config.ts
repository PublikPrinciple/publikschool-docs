export default defineNuxtConfig({
  extends: 'docus',
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  }
})
