<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat py-20 px-6"
    style="background-image: url('/images/fone.jpg')"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative max-w-3xl mx-auto text-center text-white">
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        <span class="text-green-400">Ретритный центр</span><br />СОНАТА
      </h1>
      <p class="mb-8 text-lg text-white">
        Место силы для благостного отдыха с мощной энергетикой реликтового леса, идеально подходит для:
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Globe class="text-green-600 mr-2" />
          <span>Ретриты</span>
        </button>
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Sparkles class="text-green-600 mr-2" />
          <span>Практики</span>
        </button>
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Music class="text-green-600 mr-2" />
          <span>Фестивали</span>
        </button>
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Flower class="text-green-600 mr-2" />
          <span>Йога-туры</span>
        </button>
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Zap class="text-green-600 mr-2" />
          <span>Медитации</span>
        </button>
        <button class="flex items-center justify-center bg-white/80 backdrop-blur-sm text-black shadow rounded-2xl p-4 hover:shadow-md transition cursor-pointer">
          <Heart class="text-green-600 mr-2" />
          <span>Здоровый отдых</span>
        </button>
      </div>

      <button
        @click="$emit('scroll-to-center')"
        class="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition text-lg cursor-pointer"
      >
        Подробнее
      </button>
    </div>
  </section>
</template>

<script setup>
import { Globe, Music, Zap, Sparkles, Flower, Heart } from 'lucide-vue-next';
</script>