<template>
  <section class="bg-white rounded-3xl shadow-xl px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto text-gray-800 space-y-10">
    <div class="text-center space-y-4">
      <h1 class="text-3xl md:text-5xl font-bold text-[#143642] uppercase">Длительное проживание</h1>
      <h2 class="text-xl md:text-2xl font-semibold text-[#143642]">
        🌿 Зимовка в «Сонате» – работайте удалённо в раю у моря! 🌊
      </h2>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
        Тёплый климат, пальмы и ласковое море вместо серых городских будней – 
        <em class="text-green-700 not-italic">это возможно этой зимой!</em>
      </p>
    </div>

    <p class="text-gray-700 text-base md:text-lg leading-relaxed">
      <strong class="text-[#143642]">Ретрит-центр «Соната»</strong> приглашает digital-кочевников, фрилансеров и всех, кто хочет
      <em>прожить зиму в гармонии с природой</em>, не отрываясь от работы.
    </p>

    <!-- Оформленный список преимуществ -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6">
      <h3 class="text-xl font-semibold text-[#143642] italic text-center">Почему «Соната» – идеальное место для зимовки?</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(item, index) in reasons"
          :key="index"
          class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition"
        >
          <div class="text-green-600 text-xl mt-1">✅</div>
          <div>
            <p class="font-semibold text-[#143642]">{{ item.title }}</p>
            <p class="text-gray-700 text-sm md:text-base">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-6 space-y-4 text-center">
      <p class="text-2xl font-bold text-[#143642]">Стоимость зимовки — от 45 000 ₽</p>
      <p class="text-lg font-semibold text-green-700">🔥 Бронируйте сейчас – солнце и вдохновение ждут вас!</p>

      <div class="text-gray-800 text-base space-y-2">
        <p>📍 <strong>Подарите себе зиму мечты – в «Сонате»!</strong></p>
        <p>
          📩 Оставьте заявку: 
          <a href="mailto:retreat@sonata.ru" class="text-[#143642] underline hover:text-green-700">retreat@sonata.ru</a>
        </p>
      </div>

      <p class="text-sm text-gray-500 italic">P.S. Места ограничены – успевайте захватить лучшие даты! 🌞</p>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    title: "Первая береговая линия",
    description: "Просыпайтесь под шум волн!"
  },
  {
    title: "Стабильный интернет",
    description: "Работайте без стресса."
  },
  {
    title: "3-разовое питание",
    description: "Вкусно и полезно."
  },
  {
    title: "Йога, прогулки у моря, бассейн",
    description: "Забота о теле и душе."
  },
  {
    title: "Нетворкинг, настольные игры, экскурсии",
    description: "Новые знакомства и вдохновение."
  },
  {
    title: "Горы, море, лыжи и сноуборд",
    description: "Абхазия рядом!"
  },
  {
    title: "Уютные номера",
    description: "Комфорт после насыщенного дня."
  }
]
</script>

<style scoped>
</style>
