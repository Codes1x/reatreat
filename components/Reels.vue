<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-[#143642] mb-10">
          Галерея вдохновения
        </h2>
  
        <Swiper
          :slides-per-view="1.2"
          :space-between="16"
          :breakpoints="{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 }
          }"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :modules="[Autoplay]"
          class="reels-swiper"
        >
          <SwiperSlide v-for="(video, index) in videos" :key="index" class="rounded-xl overflow-hidden shadow-md">
            <video
              :src="video"
              autoplay
              muted
              loop
              playsinline
              class="w-full h-64 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  import { Autoplay } from 'swiper/modules';
  
  const videos = [
    '/videos/reel1.mp4',
    '/videos/reel2.mp4',
    '/videos/reel3.mp4',
    '/videos/reel4.mp4',
    '/videos/reel5.mp4'
  ];
  </script>
  
  <style scoped>
  .reels-swiper ::v-deep .swiper-slide {
    transition: transform 0.3s ease;
  }
  .reels-swiper ::v-deep .swiper-slide:hover {
    transform: scale(1.02);
  }
  </style>
  