<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Лучшие условия для организаторов ретритов
      </h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Если ты проводишь ретрит, мы сделаем всё, чтобы твоя работа была лёгкой, а участники остались в восторге:
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-start gap-3">
            <CheckCircle class="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p class="font-semibold text-gray-900">При группе от 8 человек</p>
              <p class="text-gray-600 text-sm mt-1">Номер организатору бесплатно!</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-start gap-3">
            <CheckCircle class="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p class="font-semibold text-gray-900">Ретрит «под ключ»</p>
              <p class="text-gray-600 text-sm mt-1">От разработки программы до подбора мастеров и экскурсий.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-start gap-3">
            <CheckCircle class="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p class="font-semibold text-gray-900">Поддержка на всех этапах</p>
              <p class="text-gray-600 text-sm mt-1">Даже если это твой первый опыт — поможем всё продумать.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'
</script>
