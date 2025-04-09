<template>
  <section class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-stretch justify-between mt-[-50px]">
    <div class="w-full md:w-1/2 md:pr-8 flex flex-col justify-center">
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        <span class="text-green-600">Пространство для ваших мероприятий</span><br />в Сочи
      </h1>
      <p class="text-gray-900 mb-8 text-lg">
        Дорогой друг! Мы с радостью приветствуем тебя в уютном пространстве ретритного отеля «Соната» — месте, где созданы все условия для глубокого погружения в практику, отдыха души и тела. Здесь каждый твой ретрит станет особенным, а участники будут уезжать с чувством благодарности и желанием вернуться снова:
      </p>

      <div class="grid grid-cols-2 gap-4 mb-8">
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Globe class="text-green-600 mr-2" />
          <span>Ретриты</span>
        </button>
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Sparkles class="text-green-600 mr-2" />
          <span>Практики</span>
        </button>
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Music class="text-green-600 mr-2" />
          <span>Фестивали</span>
        </button>
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Flower class="text-green-600 mr-2" />
          <span>Йога-туры</span>
        </button>
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Zap class="text-green-600 mr-2" />
          <span>Медитации</span>
        </button>
        <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
          <Heart class="text-green-600 mr-2" />
          <span>Здоровый отдых</span>
        </button>
      </div>

      <button
        @click="$emit('scroll-to-center')"
        class="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition text-lg"
      >
        Подробнее
      </button>
    </div>

    <div class="w-full md:w-1/2 flex justify-center items-stretch mt-8 md:mt-0">
      <div class="rounded-2xl shadow-lg overflow-hidden w-full h-auto border border-gray-200">
        <img
          src="/images/photo_2024-10-25_15-43-44.jpg"
          alt="Йога на открытом воздухе"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe, Music, Zap, Sparkles, Flower, Heart } from 'lucide-vue-next';
</script>

<style scoped>
img {
  border-radius: 16px;
}
</style>
