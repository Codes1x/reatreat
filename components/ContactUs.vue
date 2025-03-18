<template>
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
          Связь с нами
        </h2>
        <p class="mt-4 text-lg text-gray-600 text-center">
          Свяжитесь с нами удобным способом.
        </p>
  
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Блок с контактами -->
          <div class="space-y-4">
            <a href="https://wa.me/79234567890" target="_blank"
              class="flex items-center px-4 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
              <WhatsappIcon class="w-6 h-6 mr-3" />
              Написать в WhatsApp
            </a>
  
            <a href="https://t.me/username" target="_blank"
              class="flex items-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
              <TelegramIcon class="w-6 h-6 mr-3" />
              Написать в Telegram
            </a>
  
            <a href="https://vk.com/username" target="_blank"
              class="flex items-center px-4 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition">
              <VkIcon class="w-6 h-6 mr-3" />
              Написать в ВКонтакте
            </a>
  
            <div class="flex items-center text-gray-700 text-lg font-semibold">
              <PhoneIcon class="w-6 h-6 text-gray-600 mr-3" />
              <a href="tel:+79234567890" class="hover:text-blue-600">+7 (923) 456-78-90</a>
            </div>
          </div>
  
          <!-- Блок с картой -->
          <div class="h-64 md:h-auto bg-blue-100 flex items-center justify-center text-gray-700 text-lg font-semibold rounded-lg shadow-md">
            <span>Тут будет карта</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { PhoneIcon } from "@heroicons/vue/24/solid";
  import { PaperAirplaneIcon as TelegramIcon } from "@heroicons/vue/24/solid";
  import { ChatBubbleLeftEllipsisIcon as WhatsappIcon } from "@heroicons/vue/24/solid";
  import { ChatBubbleLeftRightIcon as VkIcon } from "@heroicons/vue/24/solid";
  </script>
  