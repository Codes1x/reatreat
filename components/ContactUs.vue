<template>
  <section class="bg-[#f9fbfa] py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <!-- Контактные данные -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Связь с нами</h2>
        <p class="text-gray-600 mb-6">Выберите удобный способ, чтобы связаться с нами.</p>

        <div class="space-y-4">
          <a
            href="https://wa.me/79234567890"
            class="flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-xl shadow transition"
            target="_blank"
          >
            <MessageCircle class="w-5 h-5 mr-2" />
            WhatsApp
          </a>

          <a
            href="https://t.me/yourusername"
            class="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-xl shadow transition"
            target="_blank"
          >
            <Send class="w-5 h-5 mr-2" />
            Telegram
          </a>

          <a
            href="https://vk.com/yourgroup"
            class="flex items-center bg-[#3b5998] hover:bg-[#334f88] text-white font-medium px-5 py-3 rounded-xl shadow transition"
            target="_blank"
          >
            <MessageSquare class="w-5 h-5 mr-2" />
            ВКонтакте
          </a>

          <div class="flex items-center text-gray-800 mt-4">
            <Phone class="w-5 h-5 mr-2" />
            <span class="text-lg font-medium">+7 (923) 456-78-90</span>
          </div>
        </div>
      </div>

      <!-- Карта -->
      <div class="w-full h-[300px] rounded-xl overflow-hidden shadow">
        <iframe
          class="w-full h-full border-0"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A135b22c3ec07a34e38d0c7e7f0665f2b856be7bb5d6c9ccdf83795e77602d6b6&amp;source=constructor"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, Send, MessageCircle, MessageSquare } from 'lucide-vue-next'
</script>
