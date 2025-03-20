<script setup>
import { ref } from "vue";
import { Star } from "lucide-vue-next";

// Временные данные о коучах
const coaches = ref([
  { id: 1, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 2, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 3, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 4, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 5, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 6, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 7, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 8, name: "Имя коуча", photo: "/images/user1.jpg" },
  { id: 9, name: "Имя коуча", photo: "/images/user1.jpg" },
]);
</script>

<template>
  <div class="bg-gradient-to-b from-green-100 to-white py-16 px-4">
    <div class="container mx-auto text-center">
      <!-- Заголовок -->
      <h2 class="text-4xl font-bold text-gray-900 flex items-center justify-center space-x-2">
        <Star class="w-8 h-8 text-yellow-500" />
        <span>Известные организаторы России и СНГ выбирают нас!</span>
      </h2>
      <p class="text-lg text-gray-700 mt-3">
        Нашей площадке доверяют уже более <strong>500 организаторов</strong>. 
        Ретрит-центр — единственный в России с таким расположением, вместимостью до 130 человек одновременно и полностью вегетарианской кухней.
      </p>

      <!-- Блок с коучами -->
      <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div v-for="coach in coaches" :key="coach.id" class="bg-white shadow-lg rounded-lg p-4 text-center">
          <img :src="coach.photo" class="w-full h-48 object-cover rounded-md" alt="Коуч" />
          <h3 class="mt-3 text-lg font-semibold text-gray-900">{{ coach.name }}</h3>
        </div>
      </div>

      <!-- Описание центра -->
      <div class="mt-16 max-w-3xl mx-auto text-center">
        <p class="text-lg text-gray-700">
          Мы предлагаем наше пространство для аренды преподавателям различных практик. В пространстве воплощен 
          подход бережного отношения к природе на основании Ведических знаний об индивидуальных личностях, 
          энергетике человека и ее взаимодействии со Вселенной.
        </p>
        <p class="mt-4 text-lg text-gray-700">
          Всего нами было посажено около <strong>1400 деревьев, кустов и экзотических растений</strong>, собранных со всего мира.
        </p>
      </div>
    </div>
  </div>
</template>
