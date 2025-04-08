<template>
  <section class="bg-white rounded-3xl shadow-xl px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto text-gray-800 space-y-8">
    <h2 class="text-2xl md:text-3xl font-bold text-[#143642] text-center">
      В стоимость проживания включено:
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="(item, index) in included"
        :key="index"
        class="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
      >
        <div class="text-green-600 text-xl mt-1">✔️</div>
        <div class="text-sm md:text-base text-gray-800 leading-snug" v-html="item"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const included = [
  "<strong>Комфортные номера</strong> 4-х категорий на любой бюджет",
  "Гладильная станция",
  "Коммуналка, полностью всё включено",
  "Большой открытый бассейн для взрослых, также есть и детский, шезлонги",
  "Утренняя йога с инструктором — <em>за donation</em>",
  "Залы для йоги",
  "Тренажерный зал, настольный теннис",
  "Площадки для практик",
  "Уборка в номере (смена белья) — <em>по запросу</em>",
  "Высокоскоростной Wi-Fi по всей территории и даже в лесу",
  "Электричество включено",
  "Парковка под видеонаблюдением"
]
</script>

<style scoped>
</style>
