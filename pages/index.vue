<script setup>
import HeroSection from "@/components/HeroSection.vue";
import CenterFeatures from "@/components/CenterFeatures.vue";
import NearbyPlaces from "@/components/NearbyPlaces.vue";
import OrganizerGuestSection from "@/components/OrganizerGuestSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import HowToGet from "@/components/HowToGet.vue";
import ContactUs from "@/components/ContactUs.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";

</script>

<template>
  <div class="bg-white">
    <HeroSection />
    <CenterFeatures />
    <RoomPrices />
    <NearbyPlaces />    
    <OrganizerGuestSection />
    <ReviewsSection />
    <PhotoGallery />
    <ContactForm />
    <HowToGet />
    <ContactUs />
  </div>
</template>
