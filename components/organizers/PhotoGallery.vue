<template>
  <div class="columns-2 sm:columns-3 md:columns-4 gap-4" ref="galleryRef">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="mb-4 break-inside-avoid cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
      @click="openGallery(index)"
    >
      <img :src="img.src" class="w-full h-auto object-cover rounded-xl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const galleryRef = ref(null)

const imageNames = [
  "photo_2025-04-09_15-17-51.jpg",
  "photo_2025-04-09_15-17-53.jpg",
  "photo_2025-04-09_15-17-54 (2).jpg",
  "photo_2025-04-09_15-17-55.jpg",
  "photo_2025-04-09_15-17-56.jpg",
  "photo_2025-04-09_15-17-57.jpg",
  "photo_2025-04-09_15-17-58.jpg",
  "photo_2025-04-09_15-17-58 (2).jpg",
  "photo_2025-04-09_15-17-59.jpg",
  "photo_2025-04-09_15-18-00.jpg",
  "photo_2025-04-09_15-18-01.jpg",
  "photo_2025-04-09_15-18-01 (2).jpg",
  "photo_2025-04-09_15-18-02.jpg",
  "photo_2025-04-09_15-18-02 (2).jpg",
  "photo_2025-04-09_15-18-08.jpg",
  "photo_2025-04-09_15-18-18.jpg",
  "photo_2025-04-09_15-18-23.jpg",
  "photo_2025-04-09_15-18-28.jpg",
  "photo_2025-04-09_15-18-30.jpg",
  "photo_2025-04-09_15-18-31.jpg",
  "photo_2025-04-09_15-18-33.jpg",
  "photo_2025-04-09_15-18-35.jpg",
  "photo_2025-04-09_15-18-53.jpg",
  "photo_2025-04-09_15-18-55.jpg",
  "photo_2025-04-09_15-19-17.jpg",
  "photo_2025-04-09_15-19-28.jpg",
]

const images = imageNames.map((filename) => ({
  src: `/images/sonata/${filename}`,
  w: 1200,
  h: 900
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
/* Для мягкого скролла, без обрезания */
img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
