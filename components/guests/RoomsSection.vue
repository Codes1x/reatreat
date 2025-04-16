<template>
  <div class="py-16 px-4 max-w-7xl mx-auto">
    <h2 class="text-3xl font-semibold mb-10 text-center text-green-700">Наши номера</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RoomCard
        v-for="(room, index) in rooms"
        :key="index"
        :title="room.title"
        :beds="room.beds"
        :area="room.area"
        :preview="room.preview"
        @show-popup="openPopup(index)"
      />
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
      @click.self="showModal = false"
    >
      <div class="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full relative cursor-default">
        <button
          @click="showModal = false"
          class="absolute top-3 right-4 text-gray-400 hover:text-black text-2xl cursor-pointer"
        >&times;</button>

        <h3 class="text-xl font-semibold mb-4 text-green-700">
          {{ selectedRoom.title }}
        </h3>

        <!-- Галерея -->
        <div class="grid grid-cols-2 gap-2 mb-6 overflow-y-auto max-h-[300px]">
          <div
            v-for="(img, i) in selectedRoom.gallery || placeholderImages"
            :key="i"
            class="overflow-hidden rounded-xl h-32"
          >
            <img :src="img" alt="Фото номера" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Иконки -->
        <div class="flex gap-4 justify-center mb-6">
          <Sun class="w-6 h-6" />
          <Users class="w-6 h-6" />
          <BedDouble class="w-6 h-6" />
          <AirVent class="w-6 h-6" />
          <Tv class="w-6 h-6" />
          <ShowerHead class="w-6 h-6" />
        </div>

        <p class="text-gray-700 whitespace-pre-line">{{ selectedRoom.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RoomCard from './RoomCard.vue'
import { Sun, Users, BedDouble, AirVent, Tv, ShowerHead } from 'lucide-vue-next'

const showModal = ref(false)
const selectedRoom = ref({})

const openPopup = (index) => {
  selectedRoom.value = rooms[index]
  showModal.value = true
}

const placeholderImages = Array(4).fill('').map((_, i) => `/images/placeholder-${i + 1}.png`)

const rooms = [
  {
    title: 'Двухкомнатные Аппартаменты',
    beds: 6,
    area: '35 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-01.jpg',
    gallery: [
      '/images/hotel/1/foto-nomer-01-01.png',
      '/images/hotel/1/foto-nomer-01-02.png',
      '/images/hotel/1/foto-nomer-01-03.png',
      '/images/hotel/1/foto-nomer-01-04.png',
      '/images/hotel/1/foto-nomer-01-05.png',
      '/images/hotel/1/foto-nomer-01-06.png',
      '/images/hotel/1/foto-nomer-01-07.png',
      '/images/hotel/1/foto-nomer-01-08.png',
      '/images/hotel/1/foto-nomer-01-09.png',
      '/images/hotel/1/foto-nomer-01-11.png',
      '/images/hotel/1/foto-nomer-01-12.png',
      '/images/hotel/1/foto-nomer-01-13.png',
      '/images/hotel/1/foto-nomer-01-14.png',
      '/images/hotel/1/foto-nomer-01-15.png'
    ],
    description: `Добро пожаловать в наши уютные 2-х комнатные апартаменты!
Здесь вы найдете комфортабельную гостиную для отдыха и сна, а также удобную спальню.
Полностью оборудованная кухня и современные удобства обеспечат приятное проживание.
Наслаждайтесь видом на природу с балкона и уютной атмосферой внутри.`
  },
  {
    title: 'Двухместный Комфорт, без балкона, с видом на двор, 1 большая кровать',
    beds: 2,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-02.jpg',
    description: `Добро пожаловать в уютный номер "Комфорт" гостиницы Соната! ...`
  },
  {
    title: 'Двухместный Комфорт, с балконом, вид на двор',
    beds: 2,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-03.jpg',
    description: `Просторный номер с одной большой кроватью и балконом ...`
  },
  {
    title: 'Трехкомнатные Аппартаменты',
    beds: 6,
    area: '35 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-04.jpg',
    description: `Просторные 3-х комнатные апартаменты ...`
  },
  {
    title: 'Трехместный Комфорт, без балкона, вид на двор',
    beds: 3,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-05.jpg',
    description: `Уютные 3-х местные номера с видом на дворик ...`
  },
  {
    title: 'Трехместный Комфорт, с балконом, вид на двор',
    beds: 3,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-06.jpg',
    description: `Роскошный номер с балконом и видом во двор ...`
  },
  {
    title: 'Трехместный Комфорт, с балконом, вид на море',
    beds: 3,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-07.jpg',
    description: `Уютный номер с балконом и видом на море ...`
  },
  {
    title: 'Четырехместный Комфорт, без балкона, вид на двор',
    beds: 4,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-08.jpg',
    description: `4-х местный номер с видом на двор ...`
  },
  {
    title: 'Четырехместный Комфорт, с балконом, вид на море',
    beds: 4,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-09.jpg',
    description: `Комфортный 4-х местный номер с балконом и видом на море ...`
  },
  {
    title: 'Четырехместный Комфорт, с террасой и видом на море',
    beds: 4,
    area: '18 кв. м.',
    preview: '/images/hotel/nomer-fond/nomer-fond-10.jpg',
    description: `Роскошный номер с террасой и видом на море ...`
  }
]
</script>
