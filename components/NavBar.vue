<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Leaf class="h-10 w-10 text-green-600" />
          <span class="text-2xl font-semibold text-gray-900">Соната</span>
        </NuxtLink>

        <div class="hidden md:flex space-x-8 items-center font-medium text-gray-900">
          <NuxtLink
            v-if="route.path !== '/'"
            class="hover:text-green-600 transition-colors"
            to="/"
          >Главная</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/organizers">Организаторам</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/guests">Для гостей</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/long-stay">Длительное проживание</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/sales">Акции</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/events">Мероприятия</NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <div class="flex items-center gap-3">
            <a href="#" aria-label="WhatsApp"><MessageCircle class="h-6 w-6 text-green-500" /></a>
            <a href="#" aria-label="Telegram"><Send class="h-6 w-6 text-blue-500" /></a>
          </div>

          <div class="flex items-center gap-2">
            <Phone class="h-6 w-6 text-gray-900" />
            <a href="tel:+79234567890" class="text-gray-900 hover:text-green-600 transition-colors">
              +7 (923) 456-78-90
            </a>
          </div>

          <button class="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-sm whitespace-nowrap">
            Заказать звонок
          </button>
        </div>

        <!-- Мобильное меню -->
        <div class="md:hidden">
          <Popover v-slot="{ open }">
            <PopoverButton @click="toggleMenu" class="outline-none">
              <Menu class="h-8 w-8 text-gray-900" />
            </PopoverButton>

            <transition
              enter-active-class="transition duration-500 ease-in-out transform"
              enter-from-class="-translate-y-5 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-500 ease-in-out transform"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-5 opacity-0"
            >
              <div v-if="menuOpen" class="absolute top-full left-0 w-full bg-white py-6 flex flex-col items-center space-y-6 font-medium rounded-lg z-50 shadow-lg">
                <NuxtLink v-if="route.path !== '/'" @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/">Главная</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/organizers">Организаторам</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/guests">Для гостей</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/long-stay">Длительное проживание</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/#contacts">Контакты</NuxtLink>

                <div class="flex items-center gap-4 pt-4">
                  <a href="#"><MessageCircle class="h-7 w-7 text-green-500" /></a>
                  <a href="#"><Send class="h-7 w-7 text-blue-500" /></a>
                </div>

                <div class="flex items-center gap-3 pt-4">
                  <Phone class="h-7 w-7 text-gray-900" />
                  <a href="tel:+79234567890" class="text-lg text-gray-900 hover:text-green-600">+7 (923) 456-78-90</a>
                </div>

                <button class="px-5 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md w-4/5 text-center">
                  Заказать звонок
                </button>
              </div>
            </transition>
          </Popover>
        </div>
      </div>
    </nav>

    <main class="transition-all duration-500 pt-32">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Leaf, Menu, MessageCircle, Send, Phone } from 'lucide-vue-next'
import { Popover, PopoverButton } from '@headlessui/vue'

const menuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('overflow-hidden', menuOpen.value)
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}
</script>
