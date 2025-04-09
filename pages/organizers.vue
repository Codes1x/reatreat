<script setup>
import PageHeader from '@/components/organizers/PageHeader.vue'

import HeroSection from "@/components/organizers/HeroSection.vue";
import RetreatIntro from "@/components/organizers/RetreatIntro.vue";
import VenuesAndSpaces from "@/components/organizers/VenuesAndSpaces.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";

import RetreatExtras from "@/components/organizers/RetreatExtras.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";
import ContactForm from "@/components/ContactForm.vue";

import Events from "@/components/events/Events.vue";
import ContactUs from "@/components/ContactUs.vue";
import Reels from "@/components/Reels.vue";
</script>

<template>
  <div>
    <!-- Заголовок страницы -->
    <PageHeader
      title="Организаторам"
      subtitle="Создайте уникальное мероприятие в ретрит-пространстве «Соната»"
    />

    <!-- Основной контент -->
    <HeroSection />
    <RetreatIntro />
    <VenuesAndSpaces />
    <PhotoGallery />
   
    
    <RetreatExtras />
    <Reels />
    <CateringOptions />

    <ContactForm />
    <Events />
    <ContactUs />
  </div>
</template>
