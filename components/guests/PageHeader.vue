<template>
    <div class="bg-[#f5f8f6] py-14 px-6 md:px-12 text-center rounded-b-2xl shadow">
      <h1 class="text-3xl md:text-5xl font-bold text-[#143642] mb-2">{{ title }}</h1>
      <p class="text-lg md:text-xl text-gray-700">{{ subtitle }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    subtitle: String
  })
  </script>
  