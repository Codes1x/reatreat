<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Пространство для практик
        </h2>
      </div>

      <p class="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        Мы создали пространство, где каждый элемент поддерживает ваше состояние и практику.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div class="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
            <component :is="feature.icon" class="w-7 h-7 text-green-500" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600 transition">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Waves,
  Mountain,
  Sofa,
  Droplets,
  Bed
} from 'lucide-vue-next'

const features = [
  {
    title: 'Уникальное расположение',
    description: 'Шаговая доступность к морю, медитации на пляже, утренние и вечерние практики под звуки прибоя.',
    icon: Waves
  },
  {
    title: 'Открытые площадки',
    description: 'Две просторные площадки с панорамным видом на море и горы — идеальны для йоги, цигун и дыхательных практик.',
    icon: Mountain
  },
  {
    title: 'Уютный крытый зал',
    description: 'С креплениями для гамаков. Подходит для мастер-классов, трансформационных игр и отдыха.',
    icon: Sofa
  },
  {
    title: 'Бассейн с подогревом',
    description: 'Место для релаксации, водных практик или восстановления после насыщенного дня.',
    icon: Droplets
  },
  {
    title: 'Комфортные номера',
    description: 'Уютные, светлые, продуманные до мелочей — чтобы каждый гость чувствовал себя как дома.',
    icon: Bed
  },
  {
    title: 'Инвентарь для практик',
    description: 'Коврики, кирпичи, пледы, ремни — всё предоставляется бесплатно.',
    icon: Bed
  }
]
</script>
