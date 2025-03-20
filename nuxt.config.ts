import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/ui'],
  
  // 🔹 Запрещаем индексацию поисковиками
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  }
});
