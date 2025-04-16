<template>
  <div class="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition-transform hover:scale-[1.01]">
    <div class="h-48 w-full overflow-hidden">
      <img :src="preview" alt="Номер" class="w-full h-full object-cover" />
    </div>
    <div class="p-5 flex flex-col justify-between grow">
      <h3 class="text-xl font-semibold text-green-700 mb-2">
        {{ title }}
      </h3>
      <div class="text-gray-600 text-sm mb-1">🛏 Кол-во основных мест: {{ beds }}</div>
      <div class="text-gray-600 text-sm mb-4">📐 Площадь: {{ area }}</div>
      <button
        @click="$emit('show-popup')"
        class="mt-auto text-sm text-green-700 font-semibold hover:underline cursor-pointer"
      >
        ПОДРОБНЕЕ... →
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'beds', 'area', 'preview'])
</script>
