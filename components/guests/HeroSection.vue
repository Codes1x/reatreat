<template>
    <section class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
      <div class="w-full md:w-1/2 md:pr-8">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          <span class="text-[#143642]"> Отдохни с полной перезагрузкой! </span><br>в Сочи
        </h1>
        <p class="text-gray-600 mb-8 text-lg">
          Идеальное место для проведения ретритов, духовных практик, тренингов, йога-туров,
              мастер-классов, фестивалей и других мероприятий. Мы позаботились о вашем комфорте.
        </p>
  
        <div class="grid grid-cols-2 gap-4 mb-8">
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Globe class="text-[#143642] mr-2" />
            <span>Ретриты</span>
          </button>
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Sparkles class="text-[#143642] mr-2" />
            <span>Практики</span>
          </button>
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Music class="text-[#143642] mr-2" />
            <span>Фестивали</span>
          </button>
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Flower class="text-[#143642] mr-2" />
            <span>Йога-туры</span>
          </button>
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Zap class="text-[#143642] mr-2" />
            <span>Медитации</span>
          </button>
          <button class="flex items-center bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
            <Heart class="text-[#143642] mr-2" />
            <span>Здоровый отдых</span>
          </button>
        </div>
  
        <button class="bg-[#143642] text-white py-3 px-8 rounded-lg hover:bg-[#102c35] transition text-lg">
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
  </style>