<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

// Данные номеров
const rooms = ref([
  {
    id: 1,
    title: "Эконом",
    price: "20 000₽",
    description: [
      "Односпальные или двухъярусные кровати",
      "Система климат-контроля",
      "Шкаф, тумбочки и журнальный столик",
      "Санузел с душевой",
      "Полотенца и фен",
      "Чайник, посуда",
      "Холодильник",
      "Wi-Fi",
      "Вид на сад/внутренний дворик/море (мансарда).",
    ],
    image: "/images/organizers.jpg",
  },
  {
    id: 2,
    title: "Стандарт",
    price: "35 000₽",
    description: [
      "Вместимость до 2-х гостей. Балкон",
      "Односпальные кровати",
      "Система климат-контроля",
      "Шкаф, тумбочки и журнальный столик",
      "Телевизор и Wi-Fi",
      "Санузел с душевой",
      "Полотенца и фен",
      "Чайник, посуда",
      "Холодильник",
      "Вид на сад/внутренний дворик",
    ],
    image: "/images/organizers.jpg",
  },
  {
    id: 3,
    title: "Улучшенный стандарт",
    price: "40 000₽",
    description: [
      "Вместимость до 3-х гостей. Балкон",
      "Две односпальных или одна двуспальная кровать",
      "Система климат-контроля",
      "Шкаф, тумбочки и журнальный столик",
      "Телевизор и Wi-Fi",
      "Раскладной диван",
      "Санузел с душевой",
      "Полотенца и фен",
      "Чайник, посуда",
      "Холодильник",
      "Вид на сад/внутренний дворик/море",
    ],
    image: "/images/organizers.jpg",
  },
  {
    id: 4,
    title: "Люкс",
    price: "45 000₽",
    description: [
      "Вместимость до 4-х гостей",
      "Одна двуспальная кровать, односпальные или двухъярусные кровати",
      "Раскладной диван",
      "Система климат-контроля",
      "Шкаф, тумбочки и журнальный столик",
      "Телевизор и Wi-Fi",
      "Санузел с душевой",
      "Полотенца и фен",
      "Чайник, посуда",
      "Холодильник",
      "Вид на сад/внутренний дворик/море",
    ],
    image: "/images/organizers.jpg",
  },
]);

// Модальное окно
const selectedRoom = ref(null);
const isOpen = ref(false);
const openModal = (room) => {
  selectedRoom.value = room;
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
    <div class="container mx-auto text-center">
      <!-- Заголовок -->
      <h2 class="text-4xl font-bold text-gray-900">Выберите категорию номера</h2>
      <p class="text-lg text-gray-700 mt-3">Наш ретрит-центр предлагает комфортные условия для отдыха</p>

      <!-- Сетка с номерами -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="room in rooms" :key="room.id" class="bg-white shadow-lg rounded-lg p-6">
          <img :src="room.image" class="w-full h-48 object-cover rounded-md" alt="Номер" />
          <h3 class="mt-4 text-2xl font-semibold text-gray-900">{{ room.title }}</h3>
          <p class="text-lg text-gray-600 mt-2">{{ room.price }}</p>

          <!-- Кнопки -->
          <div class="mt-4 flex justify-center gap-4">
            <button
              @click="openModal(room)"
              class="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-all"
            >
              Комплектация
            </button>
            <button
              class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all"
            >
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pop-up модальное окно -->
    <TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-50" @close="closeModal">
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <DialogPanel class="max-w-lg bg-white rounded-lg shadow-lg p-6">
            <DialogTitle class="text-2xl font-bold text-gray-900">
              {{ selectedRoom?.title }}
            </DialogTitle>
            <img :src="selectedRoom?.image" class="w-full h-48 object-cover rounded-md mt-4" />
            <ul class="mt-4 space-y-2 text-gray-700">
              <li v-for="item in selectedRoom?.description" :key="item" class="flex items-center gap-2">
                <BedDouble class="w-5 h-5 text-green-500" />
                {{ item }}
              </li>
            </ul>
            <div class="mt-6 flex justify-end">
              <button @click="closeModal" class="text-gray-600 hover:text-gray-900">
                Закрыть
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
