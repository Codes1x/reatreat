<script setup>
import PageHeader from '@/components/guests/PageHeader.vue'
import RoomsSection from '@/components/guests/RoomsSection.vue'
import HeroSection from "@/components/HeroSection.vue";
import Reels from "@/components/Reels.vue";
import CenterFeatures from "@/components/CenterFeatures.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import NearbyPlaces from "@/components/NearbyPlaces.vue";
import RetreatExtras from "@/components/organizers/RetreatExtras.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";
import ContactForm from "@/components/ContactForm.vue";

import PhotoGallery from "@/components/organizers/PhotoGallery.vue";
import Events from "@/components/events/Events.vue";
import ContactUs from "@/components/ContactUs.vue";
</script>

<template>
  <div>
    <!-- Заголовок страницы -->
    <PageHeader
      title="Для гостей"
      subtitle="Насладитесь отдыхом в уединённом месте с природой, комфортом и заботой"
    />

    <!-- Контент -->
    <HeroSection />
    <Reels />
    <CenterFeatures />
    <RoomsSection />
    <RoomPrices />
    <NearbyPlaces />
    <RetreatExtras />
    <PhotoGallery />
    <CateringOptions />
    <RoomPrices />
    <ContactForm />
    <Events />
    <ContactUs />
  </div>
</template>
