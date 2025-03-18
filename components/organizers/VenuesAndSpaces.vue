<template>
    <section class="py-16 px-8 text-center">
      <h2 class="text-4xl font-bold text-teal-700 mb-4">Залы и площадки для ваших мероприятий</h2>
      <p class="text-gray-600 mb-8">Площадки в лесу и залы с панорамными окнами и видом на море полностью оборудованы всем необходимым</p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(venue, index) in venues" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="venue.image" :alt="venue.title" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="text-lg font-semibold text-teal-700 mb-2">{{ venue.title }}</h3>
            <p class="text-sm text-gray-600">{{ venue.description }}</p>
            <button class="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const venues = [
    {
      title: "Большой зал 240 м²",
      description: "Просторный зал с хорошей шумоизоляцией и подогреваемыми полами",
      image: "images/organizers.jpg"
    },
    {
      title: "Большой зал 120 м²",
      description: "С музыкальным оборудованием",
      image: "images/organizers.jpg"
    },
    {
      title: "Малый зал 60 м²",
      description: "Оборудованный для йоги",
      image: "images/organizers.jpg"
    },
    {
      title: "Эксплуатируемая кровля 130 м²",
      description: "Свежий воздух и вид на море",
      image: "images/organizers.jpg"
    },
    {
      title: "Площадка в лесу большая 90 м²",
      description: "Сеть 220В, свет",
      image: "images/organizers.jpg"
    },
    {
      title: "Площадка в лесу малая 40 м²",
      description: "Сеть 220В, свет",
      image: "images/organizers.jpg"
    },
    {
      title: "Костровая площадка с очагом",
      description: "Располагаются до 60 человек",
      image: "images/organizers.jpg"
    },
    {
      title: "Кафе Veg/Vegan/Raw/Detox/Ayurvedic",
      description: "Вкуснейшая, сбалансированная, одухотворённая вегетарианская еда",
      image: "images/organizers.jpg"
    }
  ];
  </script>
  
  <style scoped>
  button {
    transition: transform 0.2s ease-in-out;
  }
  button:hover {
    transform: translateY(-2px);
  }
  </style>
  