<template>
  <footer class="bg-[#143642] text-white py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">
      
      <!-- Логотип и описание -->
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <Leaf class="w-8 h-8 text-green-500" />
          <span class="text-2xl font-bold">Соната</span>
        </div>
        <p class="text-gray-300 text-sm">
          Ретрит-центр в Сочи для организаторов, гостей и всех, кто ищет гармонию с природой.
        </p>
      </div>

      <!-- Навигация -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Навигация</h3>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li><NuxtLink to="/organizers" class="hover:text-white">Организаторам</NuxtLink></li>
          <li><NuxtLink to="/guests" class="hover:text-white">Для гостей</NuxtLink></li>
          <li><NuxtLink to="/long-stay" class="hover:text-white">Длительное проживание</NuxtLink></li>
          <li><NuxtLink to="/sales" class="hover:text-white">Акции</NuxtLink></li>
          <li><NuxtLink to="/events" class="hover:text-white">Мероприятия</NuxtLink></li>
          <li><NuxtLink to="/#contacts" class="hover:text-white">Контакты</NuxtLink></li>
        </ul>
      </div>

      <!-- Контакты -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Контакты</h3>
        <p class="text-gray-300 text-sm mb-1">📍 Сочи, п. Лоо</p>
        <p class="text-gray-300 text-sm">
          📞 <a href="tel:+79181118959" class="hover:text-white">+7 (918) 111-89-59</a> 
        </p>
        <p class="text-gray-300 text-sm">
          📧 <a href="mailto:retreat@sonata.ru" class="hover:text-white">retreat@sonata.ru</a>
        </p>
      </div>

      <!-- Соцсети -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Мы на связи</h3>
        <div class="flex gap-4 mt-2">
          <a href="https://wa.me/79528361437" target="_blank" class="text-gray-300 hover:text-white" aria-label="WhatsApp">
            <MessageCircle class="w-6 h-6" />
          </a>
          <a href="https://t.me/sonatalooyoga" target="_blank" class="text-gray-300 hover:text-white" aria-label="Telegram">
            <Send class="w-6 h-6" />
          </a>
          <a href="https://vk.com/yourgroup" target="_blank" class="text-gray-300 hover:text-white" aria-label="VK">
            <MessageSquare class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Нижний блок -->
    <div class="text-center mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400">
      © 2025 Ретрит центр «Соната». Все права защищены.
    </div>
  </footer>
</template>

<script setup>
import { Leaf, MessageCircle, Send, MessageSquare } from 'lucide-vue-next'
import { NuxtLink } from '#components'
</script>
