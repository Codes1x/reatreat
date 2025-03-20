<script setup>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Utensils, Leaf, Salad } from "lucide-vue-next";

// Данные для меню
const menuOptions = ref([
  {
    id: 1,
    title: "Вегетарианское меню",
    description: "Полноценное питание без мяса и рыбы.",
    priceAdult: "1800 ₽",
    priceChild: "Уточняйте у администратора",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Веганское меню",
    description: "Полностью растительное питание без продуктов животного происхождения.",
    priceAdult: "1800 ₽",
    priceChild: "Уточняйте у администратора",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Сыроедческое меню",
    description: "Питание на основе сырых и минимально обработанных продуктов.",
    priceAdult: "1800 ₽",
    priceChild: "Уточняйте у администратора",
    icon: Salad,
  },
]);
</script>

<template>
  <div class="bg-gradient-to-b from-green-100 to-white py-16 px-4">
    <div class="container mx-auto text-center">
      <!-- Заголовок -->
      <h2 class="text-4xl font-bold text-gray-900">Питание в ретрит-центре</h2>
      <p class="text-lg text-gray-700 mt-2">
        Выберите сбалансированное и здоровое питание, подходящее именно вам.
      </p>

      <!-- Блоки с меню -->
      <div class="mt-10 max-w-2xl mx-auto space-y-4">
        <Disclosure v-for="option in menuOptions" :key="option.id" v-slot="{ open }">
          <div class="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <DisclosureButton class="flex items-center justify-between w-full text-left">
              <div class="flex items-center space-x-4">
                <component :is="option.icon" class="w-8 h-8 text-green-600" />
                <span class="text-2xl font-semibold text-gray-900">{{ option.title }}</span>
              </div>
              <span class="text-green-600 text-lg transition-transform duration-200" 
                :class="{ 'rotate-180': open }">▼</span>
            </DisclosureButton>

            <DisclosurePanel class="mt-4 text-gray-800">
              <p class="text-gray-600">{{ option.description }}</p>
              <ul class="mt-3 space-y-1">
                <li>🍽️ Взрослая порция (завтрак, обед, ужин) – <strong>{{ option.priceAdult }}</strong></li>
                <li>🍼 Детская порция (завтрак, обед, ужин) – <strong>{{ option.priceChild }}</strong></li>
              </ul>
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>

      <!-- Раздельное питание -->
      <div class="mt-10 text-gray-700">
        <p class="text-lg">Также у нас есть варианты <strong>раздельного питания</strong>. Свяжитесь с администратором для уточнения.</p>
      </div>
    </div>
  </div>
</template>
