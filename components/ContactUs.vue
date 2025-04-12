<template>
  <section class="bg-[#f9fbfa] py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-10 items-start">
      <!-- Контактные данные -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Связь с нами</h2>
        <p class="text-gray-600 mb-6">Выберите удобный способ, чтобы связаться с нами.</p>

        <div class="space-y-4">
          <a
            href="tel:+79181118959"
            class="w-full flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-xl shadow transition text-sm"
          >
            <MessageCircle class="w-5 h-5 mr-2" />
            WhatsApp
          </a>

          <a
            href="tel:+79181118959"
            class="w-full flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-xl shadow transition text-sm"
          >
            <Send class="w-5 h-5 mr-2" />
            Telegram
          </a>

          <a
            href="tel:+79181118959"
            class="w-full flex items-center bg-[#3b5998] hover:bg-[#334f88] text-white font-medium px-4 py-2 rounded-xl shadow transition text-sm"
          >
            <MessageSquare class="w-5 h-5 mr-2" />
            ВКонтакте
          </a>

          <div class="flex items-start text-gray-800 mt-4 flex-col gap-2">
            <div class="flex items-center">
              <Phone class="w-5 h-5 mr-2" />
              <span class="text-lg font-medium">+7 918 111-89-59</span>
            </div>
            <div class="flex items-center">
              <Phone class="w-5 h-5 mr-2" />
              <span class="text-lg font-medium">+7 (988) 145-74-00</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Карта -->
      <div class="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CHVoYMkz"
          class="w-full h-full border-0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, Send, MessageCircle, MessageSquare } from 'lucide-vue-next'
</script>