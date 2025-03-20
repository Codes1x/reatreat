<template>
  <div class="w-full max-w-4xl mx-auto py-10 text-center">
    <!-- Заголовок -->
    <h2 class="text-3xl font-semibold text-gray-800">Фотогалерея</h2>
    <p class="text-gray-600 mt-2">Посмотрите, как выглядит наш ретрит-центр и его окрестности.</p>

    <!-- Основной Swiper -->
    <swiper
      :modules="[Navigation, Thumbs]"
      :spaceBetween="20"
      :slidesPerView="1"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      class="rounded-lg shadow-lg overflow-hidden mt-6"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="relative w-full h-96">
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-lg" />
        </div>
      </swiper-slide>
    </swiper>

    <!-- Миниатюры -->
    <swiper
      :modules="[Thumbs]"
      :spaceBetween="10"
      :slidesPerView="5"
      :watchSlidesProgress="true"
      @swiper="setThumbsSwiper"
      class="mt-4"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-full h-20 object-cover rounded cursor-pointer" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      { src: "/images/guests.jpg", alt: "Гостиный дом" },
      { src: "/images/organizers.jpg", alt: "Организаторы на мероприятии" },
      { src: "/images/user1.jpg", alt: "Гости центра" },
      { src: "/images/user2.jpg", alt: "Спокойная атмосфера" },
      { src: "/images/user3.jpg", alt: "Расслабляющая природа" },
    ];

    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return { images, Navigation, Thumbs, thumbsSwiper, setThumbsSwiper };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: black;
}

.swiper-slide-thumb-active img {
  border: 2px solid #008080;
}
</style>
