<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Leaf class="h-10 w-10 text-green-600" />
          <span class="text-2xl font-semibold text-gray-900">Соната</span>
        </NuxtLink>

        <div class="hidden md:flex space-x-8 items-center font-medium text-gray-900">
          <NuxtLink v-if="route.path !== '/'" class="hover:text-green-600 transition-colors" to="/">Главная</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/organizers">Организаторам</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/guests">Для гостей</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/long-stay">Длительное проживание</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/sales">Акции</NuxtLink>
          <NuxtLink class="hover:text-green-600 transition-colors" to="/events">Мероприятия</NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <div class="flex items-center gap-3">
            <a href="https://wa.me/79528361437" aria-label="WhatsApp" target="_blank"><MessageCircle class="h-6 w-6 text-green-500" /></a>
            <a href="https://t.me/sonatalooyoga" aria-label="Telegram" target="_blank"><SendHorizonal class="h-6 w-6 text-blue-500" /></a>
          </div>

          <div class="flex items-center gap-2">
            <Phone class="h-6 w-6 text-gray-900" />
            <a href="tel:+79528361437" class="text-gray-900 hover:text-green-600 transition-colors">
              +7 (952) 836-14-37
            </a>
          </div>

          <button @click="showPopup = true" class="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-sm whitespace-nowrap">
            Заказать звонок
          </button>
        </div>

        <div class="md:hidden">
          <Popover v-slot="{ open }">
            <PopoverButton @click="toggleMenu" class="outline-none">
              <Menu class="h-8 w-8 text-gray-900" />
            </PopoverButton>

            <transition enter-active-class="transition duration-500 ease-in-out transform" enter-from-class="-translate-y-5 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-500 ease-in-out transform" leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-5 opacity-0">
              <div v-if="menuOpen" class="absolute top-full left-0 w-full bg-white py-6 flex flex-col items-center space-y-6 font-medium rounded-lg z-50 shadow-lg">
                <NuxtLink v-if="route.path !== '/'" @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/">Главная</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/organizers">Организаторам</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/guests">Для гостей</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/long-stay">Длительное проживание</NuxtLink>
                <NuxtLink @click="closeMenu" class="text-gray-900 hover:text-green-600" to="/#contacts">Контакты</NuxtLink>

                <div class="flex items-center gap-4 pt-4">
                  <a href="https://wa.me/79528361437" target="_blank"><MessageCircle class="h-7 w-7 text-green-500" /></a>
                  <a href="https://t.me/sonatalooyoga" target="_blank"><SendHorizonal class="h-7 w-7 text-blue-500" /></a>
                </div>

                <div class="flex items-center gap-3 pt-4">
                  <Phone class="h-7 w-7 text-gray-900" />
                  <a href="tel:+79528361437" class="text-lg text-gray-900 hover:text-green-600">+7 (952) 836-14-37</a>
                </div>

                <button @click="showPopup = true; closeMenu()" class="px-5 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md w-4/5 text-center">
                  Заказать звонок
                </button>
              </div>
            </transition>
          </Popover>
        </div>
      </div>
    </nav>

    <!-- Popup форма -->
    <transition name="fade">
      <div v-if="showPopup" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
        <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
          <button @click="showPopup = false" class="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl leading-none">×</button>
          <h3 class="text-xl font-semibold text-center text-[#143642] mb-4">Оставьте заявку</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input v-model="form.name" type="text" name="name" required placeholder="Ваше имя" class="w-full px-4 py-2 border rounded-md" />
            <input v-model="form.phone" type="tel" name="phone" required placeholder="Телефон или WhatsApp" class="w-full px-4 py-2 border rounded-md" />
            <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">Отправить</button>
          </form>
          <p v-if="formSuccess" class="text-center text-green-600 mt-4">Спасибо! Ваша заявка отправлена.</p>
        </div>
      </div>
    </transition>

    <main class="transition-all duration-500 pt-32">
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
      body: JSON.stringify({ name: form.value.name, phone: form.value.phone })
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
