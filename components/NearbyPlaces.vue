<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="w-full flex justify-center">
        <div class="text-center max-w-4xl">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Наши уникальные места
          </h2>
          <p class="mt-4 text-gray-600">
            Уникальные места и достопримечательности в шаговой доступности.
          </p>
        </div>
      </div>

      <div class="relative mt-10">
        <div class="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div ref="scrollContainer" class="overflow-x-auto snap-x snap-mandatory scroll-smooth">
          <div class="flex gap-6 w-max px-6">
            <div
              v-for="(place, index) in places"
              :key="index"
              class="min-w-[250px] lg:min-w-[300px] max-w-[300px] h-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex-shrink-0 snap-start flex flex-col items-center text-center"
            >
              <img
                :src="place.image"
                :alt="place.title"
                class="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-900">
                {{ place.title }}
              </h3>
              <p class="mt-2 text-gray-600 line-clamp-3">
                {{ place.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -350, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 350, behavior: 'smooth' })

  if (
    scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >=
    scrollContainer.value.scrollWidth - 10
  ) {
    setTimeout(() => {
      scrollContainer.value.scrollTo({ left: 0, behavior: 'auto' })
    }, 400)
  }
}

const places = [
  { title: "Аквапарк АкваЛоо", description: "Круглогодичный аквапарк Черноморского побережья.", image: "/images/2.png" },
  { title: "Церковь Симона Кананита", description: "Одно из главных украшений курортного поселка.", image: "/images/11.png" },
  { title: "Дача доктора Павлова", description: "Самая красивая дача в округе Сочи.", image: "/images/5.png" },
  { title: "Лестница Шереметева", description: "Лестница к бывшему дому графа.", image: "/images/6.png" },
  { title: "Водопад Райское наслаждение", description: "Очень лёгкий и красивый маршрут.", image: "/images/7.png" },
  { title: "Развалины Византийского храма", description: "На вершине 300-метровой горы.", image: "/images/Rectangle_66.png" },
  { title: "Набережная «Горный воздух»", description: "Один из лучших пляжей в Большом Сочи.", image: "/images/3.jpg" }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
</style>