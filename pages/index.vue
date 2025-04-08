<template>
  <div class="bg-white">
    <HeroSection @scroll-to-center="scrollToCenterFeatures" />

    <section id="center-features">
      <CenterFeatures />
    </section>

    <Reels />
    <OrganizerGuestSection />
    <RoomPrices />
    <PhotoGallery />
    <NearbyPlaces />        
   
   
    <ContactForm />
    <HowToGet />
    <ContactUs />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import CenterFeatures from "@/components/CenterFeatures.vue";
import NearbyPlaces from "@/components/NearbyPlaces.vue";
import Reels from "@/components/Reels.vue";
import OrganizerGuestSection from "@/components/OrganizerGuestSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import HowToGet from "@/components/HowToGet.vue";
import ContactUs from "@/components/ContactUs.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";

const scrollToCenterFeatures = () => {
  const target = document.getElementById('center-features')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
