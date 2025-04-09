<template>
    <section
      class="relative bg-[#f0f5f4] py-16 px-6 md:px-12 rounded-b-3xl overflow-hidden"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-[#143642]">
          {{ title }}
        </h1>
        <p class="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
  
      <!-- Optional Background Icon -->
      <div
        class="absolute right-6 bottom-6 opacity-10 text-green-600 text-[120px] pointer-events-none hidden md:block"
      >
        🌿
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    subtitle: {
      type: String,
      default: ''
    }
  })
  </script>
  