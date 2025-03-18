<template>
    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
          Как добраться
        </h2>
        <p class="mt-4 text-lg text-gray-600 text-center">
          Удобные способы доехать до нашего ретрит-центра.
        </p>
  
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Адрес -->
          <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
            <MapPin class="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Адрес</h3>
              <p class="text-gray-600">Сочи, п. Лоо</p>
            </div>
          </div>
  
          <!-- Поезд -->
          <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
            <TrainFrontIcon class="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Поезд</h3>
              <p class="text-gray-600">До станции Лоо (2 мин на машине)</p>
            </div>
          </div>
  
          <!-- Машина -->
          <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
            <CarFront class="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-gray-900">На машине</h3>
              <p class="text-gray-600">
                В навигаторе: гостиница Соната (г. Сочи, ул. Декабристов)
              </p>
            </div>
          </div>
  
          <!-- Самолет -->
          <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
            <Plane class="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Самолет</h3>
              <p class="text-gray-600">
                Аэропорт Сочи. Есть электрички прямо из аэропорта, но редко.
                Удобнее доехать на такси или автобусе до ж/д вокзала Адлер (15 мин),
                затем скоростная электричка Ласточка до Горного воздуха (10 мин пешком)
                или до Лоо (5 мин на машине).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

import { CarFront, MapPin, Plane, TrainFrontIcon } from "lucide-vue-next";

  </script>
  
  