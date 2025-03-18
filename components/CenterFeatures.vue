<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Что есть в центре
        </h2>
      </div>

      <p class="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        Мы создали идеальные условия для комфортного отдыха и практик.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div v-for="feature in features" :key="feature.title" class="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div class="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
            <component :is="feature.icon" class="w-7 h-7 text-green-500" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600 transition">{{ feature.title }}</h3>
          <p class="mt-2 text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Baby, House, LandPlot, Waves } from 'lucide-vue-next';

const features = [
  {
    title: "Комфортные номера",
    description: "Уютные комнаты с красивым видом и всеми удобствами.",
    icon: House,
  },
  {
    title: "Бассейн",
    description: "Тёплый бассейн для расслабления и отдыха.",
    icon: Waves,
  },
  {
    title: "Залы для йоги",
    description: "Просторные и светлые залы для практик и медитации.",
    icon: LandPlot,
  },
  {
    title: "Детская комната",
    description: "Безопасное пространство для детей с играми и занятиями.",
    icon: Baby,
  }
];
</script>
