<template>
  <section class="container mx-auto px-4 py-12">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900">
        У нас вы можете <span class="text-green-600">отдохнуть телом и душой</span> или
        <span class="text-green-600">организовать своё мероприятие</span>
      </h2>
      <p class="text-gray-600 mt-2">Выберите подходящий вариант и узнайте больше о наших возможностях.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="group overflow-hidden rounded-2xl shadow-lg">
        <img src="/images/organizers.jpg" alt="Для организаторов" class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div class="p-6 text-center">
          <h3 class="text-lg font-semibold text-gray-900">Для организаторов</h3>
          <p class="text-gray-600 mt-2">Проведите мероприятие в живописном месте с комфортными условиями.</p>
          <button class="mt-4 px-6 py-2 text-white bg-green-600 rounded-xl hover:bg-green-700 transition">Подробнее</button>
        </div>
      </div>
      <div class="group overflow-hidden rounded-2xl shadow-lg">
        <img src="/images/guests.jpg" alt="Для гостей" class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div class="p-6 text-center">
          <h3 class="text-lg font-semibold text-gray-900">Для гостей</h3>
          <p class="text-gray-600 mt-2">Наслаждайтесь отдыхом в уединённом месте с природой и комфортом.</p>
          <button class="mt-4 px-6 py-2 text-white bg-green-600 rounded-xl hover:bg-green-700 transition">Подробнее</button>
        </div>
      </div>
    </div>
  </section>
</template>
