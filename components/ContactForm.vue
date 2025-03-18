<template>
    <section class="py-16 bg-gray-100">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Остались вопросы?
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Заполните форму, и наш администратор подробно расскажет о нашем ретрит-центре.
        </p>
  
        <form @submit.prevent="submitForm" class="mt-8 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              v-model="name"
              placeholder="Ваше имя"
              class="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
            <input
              type="tel"
              v-model="phone"
              placeholder="Ваш телефон"
              class="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Отправить
          </button>
        </form>
  
        <div class="mt-6 flex justify-center items-center space-x-3">
          <ChatBubbleLeftRightIcon class="w-6 h-6 text-green-500" />
          <a
            href="https://wa.me/79999999999"
            target="_blank"
            class="text-lg text-blue-600 font-medium hover:underline"
          >
            Или напишите нам в WhatsApp
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/solid";
  
  const name = ref("");
  const phone = ref("");
  
  const submitForm = () => {
    alert(`Спасибо, ${name.value}! Мы перезвоним вам на номер ${phone.value}.`);
    name.value = "";
    phone.value = "";
  };
  </script>
  