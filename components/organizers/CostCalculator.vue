<script setup>
import { ref } from "vue";
import { Phone, User } from "lucide-vue-next";

// Переменные для формы
const name = ref("");
const phone = ref("");

// Функция отправки формы (можно заменить на API)
const submitForm = () => {
  alert(`Имя: ${name.value}\nТелефон: ${phone.value}`);
};
</script>

<template>
  <div class="bg-gradient-to-b from-blue-100 to-white py-16 px-4">
    <div class="container mx-auto max-w-lg bg-white shadow-lg rounded-lg p-8">
      <!-- Заголовок -->
      <h2 class="text-3xl font-bold text-gray-900 text-center">Рассчитать стоимость</h2>
      <p class="text-lg text-gray-600 text-center mt-2">Оставьте свои данные, и мы свяжемся с вами</p>

      <!-- Форма -->
      <form @submit.prevent="submitForm" class="mt-6 space-y-4">
        <!-- Имя -->
        <div class="relative">
          <User class="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input
            v-model="name"
            type="text"
            placeholder="Ваше имя"
            required
            class="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>

        <!-- Телефон -->
        <div class="relative">
          <Phone class="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input
            v-model="phone"
            type="tel"
            placeholder="Ваш телефон"
            required
            class="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>

        <!-- Кнопка отправки -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Оставить заявку
        </button>
      </form>
    </div>
  </div>
</template>
