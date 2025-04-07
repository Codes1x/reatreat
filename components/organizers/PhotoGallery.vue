<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay } from 'swiper/modules'

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg'
]
</script>

<template>
  <section class="py-16 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-10">Фото галерея центра</h2>
    <ClientOnly>
      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="4"
        :space-between="24"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="max-w-7xl mx-auto"
      >
        <SwiperSlide
          v-for="(img, index) in images"
          :key="index"
          class="rounded-xl overflow-hidden"
        >
          <img
            :src="img"
            alt="Фото центра"
            class="object-cover w-full h-[320px] transition-transform duration-300 hover:scale-105"
          />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </section>
</template>
