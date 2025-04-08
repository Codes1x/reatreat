<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" ref="galleryRef">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="w-full h-48 bg-red-500 rounded-xl cursor-pointer transition-transform hover:scale-105 duration-300"
      @click="openGallery(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const galleryRef = ref(null)

const images = Array.from({ length: 15 }, (_, i) => ({
  src: `https://via.placeholder.com/800x600/ff0000/ffffff?text=Фото+${i + 1}`,
  w: 800,
  h: 600
}))

let lightbox

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galleryRef.value,
    children: 'div',
    pswpModule: () => import('photoswipe'),
    dataSource: images
  })
  lightbox.init()
})

onUnmounted(() => {
  lightbox?.destroy()
})

const openGallery = (index) => {
  lightbox.loadAndOpen(index)
}
</script>

<style scoped>
/* Добавим плавное появление модального окна галереи */
.pswp__img {
  border-radius: 12px;
}
</style>
