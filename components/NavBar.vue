<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap items-center justify-between gap-y-4">

          <!-- Левая часть: логотип -->
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
            <Leaf class="h-8 w-8 text-green-600" />
            <span class="text-xl font-semibold text-gray-900 whitespace-nowrap">Соната</span>
          </NuxtLink>

          <!-- Меню (только на xl и выше) -->
          <div class="hidden xl:flex flex-wrap items-center gap-x-4 text-sm font-medium text-gray-900">
            <NuxtLink v-if="route.path !== '/'" class="hover:text-green-600" to="/">Главная</NuxtLink>
            <NuxtLink class="hover:text-green-600" to="/organizers">Организаторам</NuxtLink>
            <NuxtLink class="hover:text-green-600" to="/guests">Для гостей</NuxtLink>
            <NuxtLink class="hover:text-green-600" to="/long-stay">Длительное проживание</NuxtLink>
            <NuxtLink class="hover:text-green-600" to="/events">Мероприятия</NuxtLink>
          </div>

          <!-- Контакты и кнопка (только на xl и выше) -->
          <div class="hidden xl:flex items-center gap-4 text-sm">
            <div class="flex items-center gap-3">
              <a href="https://wa.me/79528361437" target="_blank"><MessageCircle class="h-5 w-5 text-green-500" /></a>
              <a href="https://t.me/sonatalooyoga" target="_blank"><SendHorizonal class="h-5 w-5 text-blue-500" /></a>
              <Phone class="h-5 w-5 text-gray-800" />
              <a href="tel:+79181118959" class="hover:text-green-600 text-gray-800">+7 (918)-111-89-59</a>
            </div>
            <button @click="showPopup = true" class="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition text-sm cursor-pointer">
              Заказать звонок
            </button>
          </div>

          <!-- Мобильное меню -->
          <div class="xl:hidden ml-auto">
            <Popover v-slot="{ open }">
              <PopoverButton @click="toggleMenu" class="outline-none">
                <Menu class="h-8 w-8 text-gray-900" />
              </PopoverButton>

              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4"
              >
                <div
                  v-if="menuOpen"
                  class="absolute top-full left-0 w-full bg-white py-6 px-4 flex flex-col items-center space-y-4 font-medium z-50 shadow-lg text-center"
                >
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/">Главная</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/organizers">Организаторам</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/guests">Для гостей</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/long-stay">Длительное проживание</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/sales">Акции</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/events">Мероприятия</NuxtLink>
                  <NuxtLink @click="closeMenu" class="hover:text-green-600" to="/#contacts">Контакты</NuxtLink>

                  <div class="flex items-center justify-center gap-4 pt-4">
                    <a href="https://wa.me/79528361437" target="_blank"><MessageCircle class="h-6 w-6 text-green-500" /></a>
                    <a href="https://t.me/sonatalooyoga" target="_blank"><SendHorizonal class="h-6 w-6 text-blue-500" /></a>
                  </div>

                  <div class="flex items-center justify-center gap-2 pt-4">
                    <Phone class="h-6 w-6 text-gray-900" />
                    <a href="tel:+79181118959" class="text-gray-900 hover:text-green-600">+7 (918)-111-89-59</a>
                  </div>

                  <button @click="showPopup = true; closeMenu()" class="mt-4 px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 w-full max-w-xs mx-auto cursor-pointer">
                    Заказать звонок
                  </button>
                </div>
              </transition>
            </Popover>
          </div>
        </div>
      </div>
    </nav>

    <!-- Popup -->
    <transition name="fade">
      <div v-if="showPopup" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center px-4">
        <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
          <button @click="showPopup = false" class="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl leading-none cursor-pointer">×</button>
          <h3 class="text-xl font-semibold text-center text-[#143642] mb-4">Оставьте заявку</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input v-model="form.name" type="text" required placeholder="Ваше имя" class="w-full px-4 py-2 border rounded-md" />
            <input v-model="form.phone" type="tel" required placeholder="Телефон или WhatsApp" class="w-full px-4 py-2 border rounded-md" />
            <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium cursor-pointer">Отправить</button>
          </form>
          <p v-if="formSuccess" class="text-center text-green-600 mt-4">Спасибо! Ваша заявка отправлена.</p>
        </div>
      </div>
    </transition>

    <main class="pt-28 transition-all duration-500">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Leaf, Menu, MessageCircle, SendHorizonal, Phone } from 'lucide-vue-next'
import { Popover, PopoverButton } from '@headlessui/vue'

const menuOpen = ref(false)
const showPopup = ref(false)
const form = ref({ name: '', phone: '' })
const formSuccess = ref(false)
const route = useRoute()

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('overflow-hidden', menuOpen.value)
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const handleSubmit = async () => {
  try {
    const res = await fetch('https://formspree.io/f/mpwpkwan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (res.ok) {
      formSuccess.value = true
      form.value.name = ''
      form.value.phone = ''
      setTimeout(() => {
        showPopup.value = false
        formSuccess.value = false
      }, 3000)
    } else {
      alert('Ошибка при отправке формы')
    }
  } catch (err) {
    console.error(err)
    alert('Ошибка соединения')
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>