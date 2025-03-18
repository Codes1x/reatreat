<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Что говорят наши гости?
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Реальные отзывы людей, которые посетили наш центр.
      </p>
    </div>

    <div class="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
      >
        <img
          :src="review.image"
          class="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
          alt="Фото гостя"
        />
        <h3 class="mt-4 text-lg font-semibold text-gray-900">
          {{ review.name }}
        </h3>
        <p class="text-sm text-gray-500">{{ review.role }}</p>
        <p class="mt-4 text-gray-700 text-sm leading-relaxed">
          "{{ review.text }}"
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: "Анна Петрова",
    role: "Посетитель",
    text: "Это место подарило мне незабываемый опыт! Чистый воздух, уютная атмосфера и забота персонала сделали отдых идеальным.",
    image: "/images/user1.jpg",
  },
  {
    name: "Максим Иванов",
    role: "Организатор мероприятия",
    text: "Провел здесь йога-ретрит — всё было на высшем уровне! Отличные залы, комфортные номера и природа просто потрясающая.",
    image: "/images/user2.jpg",
  },
  {
    name: "Екатерина Смирнова",
    role: "Гость",
    text: "Мне понравилось сочетание спокойствия и комфорта. Это действительно место силы, куда хочется вернуться.",
    image: "/images/user3.jpg",
  },
];
</script>
