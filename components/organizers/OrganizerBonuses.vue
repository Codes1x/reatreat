<template>
    <section class="container mx-auto px-4 py-10">
      <h2 class="text-3xl font-bold text-center text-green-900">Бонусы для организаторов</h2>
      <p class="text-center text-gray-600 mb-6">Выбирайте удобный вариант для вашего мероприятия</p>
  
      <TabGroup>
        <TabList class="flex space-x-4 border-b border-gray-200 pb-2">
          <Tab v-for="(bonus, index) in bonuses" :key="index" v-slot="{ selected }">
            <button
              class="px-4 py-2 text-lg font-semibold"
              :class="selected ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'"
            >
              {{ bonus.title }}
            </button>
          </Tab>
        </TabList>
  
        <TabPanels class="mt-6">
          <TabPanel v-for="(bonus, index) in bonuses" :key="index">
            <div class="grid md:grid-cols-2 items-center gap-6 bg-white shadow-md rounded-lg p-6">
              <!-- Блок изображения -->
              <div class="relative">
                <img
                  :src="bonus.image"
                  :alt="bonus.title"
                  class="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-md"
                />
              </div>
  
              <!-- Блок текста -->
              <div>
                <h3 class="text-2xl font-bold text-green-900 mb-2">{{ bonus.title }}</h3>
                <ul class="text-gray-700 list-disc pl-5 space-y-2">
                  <li v-for="(perk, i) in bonus.perks" :key="i">{{ perk }}</li>
                </ul>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  </template>
  
  <script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  
  const bonuses = [
    {
      title: "От 10 номеров",
      image: "/images/organizers.jpg",
      perks: [
        "Номер 'Люкс' для организатора бесплатно",
        "Малый зал 60кв.м - бесплатно",
        "Большой зал 120кв.м - 50% скидка",
        "Баня + Хаммам - бесплатно 1 час",
      ],
    },
    {
      title: "От 15 номеров",
      image: "/images/organizers.jpg",
      perks: [
        "Номер 'Люкс' для организатора бесплатно",
        "Малый зал 60кв.м - бесплатно",
        "Большой зал 120кв.м - 50% скидка",
        "Баня + Хаммам - бесплатно 2 часа",
        "Костровая зона - бесплатно",
      ],
    },
    {
      title: "От 20 номеров",
      image: "/images/organizers.jpg",
      perks: [
        "Два номера 'Люкс' бесплатно",
        "Малый зал 60кв.м - бесплатно",
        "Большой зал 120кв.м - бесплатно",
        "Баня + Хаммам - бесплатно 3 часа",
        "Костровая зона + чайная церемония - бесплатно",
      ],
    },
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
  