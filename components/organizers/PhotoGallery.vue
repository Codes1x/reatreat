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
  "IMG_6173.JPG", "IMG_6188.JPG", "IMG_6191.JPG",
  "IMG_6204.JPG", "IMG_6206.JPG", "IMG_6207.JPG",
  "IMG_6208.JPG", "IMG_6210.JPG",
  "IMG_6212.JPG", "IMG_6214.JPG", "IMG_6216.JPG",
  "IMG_6223.JPG", "IMG_6224.JPG", "IMG_6228.JPG",
  "IMG_6234.JPG", "IMG_6237_jpg.JPG",
  "IMG_6240.JPG", "IMG_6242.JPG", "IMG_6244.JPG",
  "IMG_6245.JPG", "IMG_6247.JPG", "IMG_6248.JPG",
  "IMG_6251.JPG",

  "photo_2025-04-09_15-17-51.jpg", "photo_2025-04-09_15-17-53.jpg", "photo_2025-04-09_15-17-56.jpg",
  "photo_2025-04-09_15-17-58.jpg", "photo_2025-04-09_15-18-01.jpg", "photo_2025-04-09_15-18-01 (2).jpg",
  "photo_2025-04-09_15-18-02.jpg", "photo_2025-04-09_15-18-02 (2).jpg", "photo_2025-04-09_15-18-08.jpg",
  "photo_2025-04-09_15-18-33.jpg", "photo_2025-04-09_15-19-17.jpg", "photo_2025-04-09_15-19-28.jpg",

  "XXXL (11).webp", "XXXL (15).webp", "XXXL (18).webp",
  "XXXL (20).webp", "XXXL (24).webp", "XXXL (25).webp",
  "XXXL (26).webp", "XXXL (33).webp", "XXXL (34).webp",
  "XXXL (36).webp", "XXXL (37).webp", "XXXL (38).webp",
  "XXXL (41).webp", "XXXL (43).webp", "XXXL (44).webp",
  "XXXL (50).webp", "XXXL (54).webp", "XXXL (55).webp",
  "XXXL (57).webp", "XXXL (61).webp", "XXXL (71).webp",
  "XXXL (78).webp", "XXXL (91).webp", "XXXL.webp"
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
