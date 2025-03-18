<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Рядом с нами находятся
        </h2>
      </div>

      <p class="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        Уникальные места и достопримечательности в шаговой доступности.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div v-for="place in places" :key="place.title" class="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <!-- Добавляем картинку -->
          <img :src="place.image" alt="place.name" class="w-full h-48 object-cover rounded-lg mb-4" />

          <h3 class="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600 transition">{{ place.title }}</h3>
          <p class="mt-2 text-gray-600">{{ place.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const places = [
  {
    title: "Развалины Византийского храма",
    description: "На самой вершине 300-метровой горы.",
    image: "/images/organizers.jpg",  // Здесь подставь путь к картинке
  },
  {
    title: "Набережная «Горный воздух»",
    description: "Один из лучших пляжей в Большом Сочи для отдыхающих.",
    image: "/images/organizers.jpg",  // Здесь подставь путь к картинке
  },
  {
    title: "Церковь Симона Кананита",
    description: "Одно из главных украшений курортного поселка.",
    image: "/images/organizers.jpg",  // Здесь подставь путь к картинке
  },
  {
    title: "Дача доктора Павлова (1907 год)",
    description: "Самая красивая дача в округе Сочи.",
    image: "/images/organizers.jpg",  // Здесь подставь путь к картинке
  }
];
</script>

<style scoped>
/* Можно добавить дополнительные стили по необходимости */
</style>
