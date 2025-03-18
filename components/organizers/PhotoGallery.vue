<template>
    <section class="py-16 px-8 text-center">
      <h2 class="text-4xl font-bold text-teal-700 mb-4">Фотогалерея</h2>
      <p class="text-gray-600 mb-8">Ознакомьтесь с нашим ретрит-центром через фотографии</p>
  
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a
          v-for="(image, index) in images"
          :key="index"
          :href="image"
          class="gallery-item overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
        >
          <img :src="image" class="w-full h-48 object-cover">
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import lightGallery from "lightgallery";
  
  // Импорт стилей LightGallery
  import "lightgallery/css/lightgallery.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-thumbnail.css";
  
  const images = [
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg",
    "images/organizers.jpg"
  ];
  
  onMounted(() => {
    lightGallery(document.querySelector(".grid"), {
      selector: ".gallery-item",
      thumbnail: true,
      zoom: true
    });
  });
  </script>
  
  <style scoped>
  .gallery-item {
    display: block;
    transition: transform 0.3s ease-in-out;
  }
  .gallery-item:hover {
    transform: scale(1.05);
  }
  </style>
  