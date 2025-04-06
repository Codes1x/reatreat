
<template>
    <section class="max-w-6xl mx-auto px-6 py-16">
      <h1 class="text-3xl md:text-4xl font-bold text-[#143642] text-center mb-10">Расписание мероприятий</h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
        >
          <img :src="event.image" :alt="event.title" class="h-60 object-cover w-full" />
          <div class="p-5 flex flex-col flex-grow">
            <h2 class="text-xl font-semibold text-[#143642] mb-2">{{ event.title }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ event.date }}</p>
            <p class="text-gray-700 mb-4 flex-grow">{{ event.description }}</p>
            <button class="mt-auto bg-[#143642] text-white py-2 px-4 rounded-md hover:bg-[#0f2d35] transition w-fit">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const events = [
    {
      title: "MIX YOGA FEST",
      date: "04–11 июля 2025",
      description: "Целая неделя практик, лекций, общения и отдыха в дружелюбной и вдохновляющей атмосфере.",
      image: "/images/1.jpg",
    },
    {
      title: "Путь к себе",
      date: "22–28 апреля 2025",
      description: "Авторский тур с Яной Эктовой в Нараяна центре. Включено: проживание, питание, практики.",
      image: "/images/1.jpg",
    }
  ];
  </script>
  
  <style scoped>
  </style>
  