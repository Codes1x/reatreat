
<template>
  <section class="py-16 bg-gray-50 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Рядом с нами находятся
        </h2>
        <p class="mt-4 text-gray-600">
          Уникальные места и достопримечательности в шаговой доступности.
        </p>
      </div>

      <div class="relative mt-10">
        <!-- Градиенты -->
        <div class="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div class="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <!-- Стрелка влево -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Стрелка вправо -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Скроллируемый блок -->
        <div
          ref="scrollContainer"
          class="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div class="flex gap-6 w-max px-6">
            <div
              v-for="(place, index) in loopedPlaces"
              :key="index"
              class="min-w-[280px] lg:min-w-[320px] max-w-[320px] h-[480px] bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex-shrink-0 snap-start flex flex-col"
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
              <div class="mt-auto pt-4 flex items-center text-green-600 font-medium">
                <MapPin class="w-5 h-5 mr-1" />
                {{ place.distance }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin } from 'lucide-vue-next'
import { ref, computed } from 'vue'

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
  {
    title: "Аквапарк АкваЛоо",
    description: "Единственный из аквапарков Черноморского побережья, который работает круглый год.",
    distance: "1 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Церковь Симона Кананита",
    description: "Одно из главных украшений курортного поселка.",
    distance: "3 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Дача доктора Павлова (1907 год)",
    description: "Самая красивая дача в округе Сочи.",
    distance: "5.8 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Лестница Шереметева",
    description: "Лестница к бывшему дому графа.",
    distance: "3.1 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Водопад Райское наслаждение",
    description: "Очень лёгкий и красивый маршрут. Идеально для похода.",
    distance: "8.8 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Развалины Византийского храма",
    description: "На вершине 300-метровой горы.",
    distance: "1.5 км от нас",
    image: "/images/1.jpg"
  },
  {
    title: "Набережная «Горный воздух»",
    description: "Один из лучших пляжей в Большом Сочи для отдыхающих.",
    distance: "600 м от нас",
    image: "/images/1.jpg"
  }
]

const loopedPlaces = computed(() => [...places, ...places])
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
