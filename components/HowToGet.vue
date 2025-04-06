<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Как добраться
      </h2>
      <p class="text-center text-gray-600 mb-10">
        Удобные способы добраться до нашего ретрит-центра
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <!-- На машине -->
        <div class="bg-white rounded-xl shadow p-6">
          <div class="flex items-start gap-4">
            <Car class="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">На машине</h3>
              <p class="text-gray-600 mt-1">
                В навигаторе введите <span class="font-medium">«Соната», г. Сочи, ул. Декабристов</span>
              </p>
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center text-green-600 font-semibold mt-2 hover:underline"
              >
                Открыть маршрут
                <ArrowRight class="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <!-- Поезд -->
        <div class="bg-white rounded-xl shadow p-6">
          <div class="flex items-start gap-4">
            <Train class="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Поезд</h3>
              <p class="text-gray-600 mt-1">
                До станции Лоо<br />
                <span class="font-medium text-gray-900">50 мин на машине</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Адрес -->
        <div class="bg-white rounded-xl shadow p-6">
          <div class="flex items-start gap-4">
            <MapPin class="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Адрес</h3>
              <p class="text-gray-600 mt-1">
                Сочи, ул. Декабристов
              </p>
            </div>
          </div>
        </div>

        <!-- Самолет -->
        <div class="bg-white rounded-xl shadow p-6">
          <div class="flex items-start gap-4">
            <Plane class="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Самолет</h3>
              <p class="text-gray-600 mt-1">
                Аэропорт Сочи<br />
                <span class="font-medium text-gray-900">1 ч 30 мин на машине</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, MapPin, Plane, Train, ArrowRight } from 'lucide-vue-next'
</script>
