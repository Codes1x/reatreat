<template>
  <section class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between mt-[-50px]">
    <div class="w-full md:w-1/2 md:pr-8">
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        <span class="text-green-600">Ретритный центр</span><br>в Сочи
      </h1>
      <p class="text-gray-900 mb-8 text-lg">
        Место силы для благостного отдыха с мощной энергетикой реликтового леса, идеально подходит для:
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

      <button class="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition text-lg">
        Подробнее
      </button>
    </div>

    <div class="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
      <iframe
        src="https://player.vimeo.com/video/82701136"
        class="rounded-2xl w-full h-[300px] md:h-[400px] border-0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { Globe, Music, Zap, Sparkles, Flower, Heart } from 'lucide-vue-next';
</script>

<style scoped>
/* Можно добавить стили, если необходимо */
</style>
