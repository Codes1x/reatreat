<template>
  <section
    class="bg-cover bg-center bg-no-repeat py-20 px-6 md:px-10"
    style="background-image: url('/images/1.jpg')"
  >
    <div class="bg-white/90 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto p-8 shadow-xl">
      <h2 class="text-3xl md:text-4xl font-bold text-[#143642] text-center mb-4">
        Остались вопросы?
      </h2>
      <p class="text-center text-gray-700 mb-8 text-lg">
        Напишите нам — с радостью расскажем, подберем даты и поможем всё организовать 🙌
      </p>

      <!-- Форма с fetch-запросом -->
      <form @submit.prevent="submitForm" class="grid gap-4">
        <input
          v-model="name"
          name="name"
          type="text"
          placeholder="Ваше имя"
          required
          class="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#143642]"
        />
        <input
          v-model="phone"
          name="phone"
          type="tel"
          placeholder="Телефон или WhatsApp"
          required
          class="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#143642]"
        />
        <button
          type="submit"
          :disabled="loading"
          class="bg-[#143642] text-white py-3 px-6 rounded-md hover:bg-[#102c35] transition text-lg disabled:opacity-50"
        >
          {{ loading ? 'Отправка...' : 'Отправить' }}
        </button>
      </form>

      <!-- Сообщение об успехе -->
      <p
        v-if="success"
        class="text-green-600 mt-6 text-center text-lg font-medium"
      >
        🎉 Спасибо! Мы свяжемся с вами в ближайшее время.
      </p>

      <div class="text-center mt-6">
        <a
          href="https://wa.me/79123456789"
          class="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.17 1.6 6L0 24l6.25-1.6a12.13 12.13 0 005.75 1.46c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 22c-1.88 0-3.73-.5-5.34-1.46l-.38-.23-3.72.96.98-3.61-.25-.37A10.13 10.13 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.18.28-.74.91-.9 1.1-.17.18-.34.21-.63.07-.28-.14-1.2-.45-2.3-1.45-.85-.76-1.42-1.7-1.58-1.98-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.48.1-.2.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.65-.49l-.55-.01c-.2 0-.5.07-.76.36s-1 1-.98 2.42c.02 1.41 1 2.78 1.14 2.97.14.2 1.93 2.96 4.68 4.15.65.28 1.15.45 1.54.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.89-1.32.23-.66.23-1.22.16-1.34-.08-.11-.25-.18-.52-.31z"
            />
          </svg>
          <span>или напишите в WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const phone = ref('')
const success = ref(false)
const loading = ref(false)

const submitForm = async () => {
  loading.value = true
  const res = await fetch('https://formspree.io/f/mpwpkwan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      phone: phone.value
    })
  })

  loading.value = false

  if (res.ok) {
    success.value = true
    name.value = ''
    phone.value = ''
  } else {
    alert('Произошла ошибка. Попробуйте позже.')
  }
}
</script>

<style scoped>
/* ничего не требуется — всё через Tailwind */
</style>
