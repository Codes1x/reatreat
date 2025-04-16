<template>
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="$emit('close')"
    >
      <div class="bg-white rounded-xl p-6 max-w-lg w-full text-center relative">
        <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
        <p class="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button
          class="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded"
          @click="$emit('close')"
        >
          Закрыть
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['title'])
  </script>
  