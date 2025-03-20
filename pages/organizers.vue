<script setup>
import NavBar from "@/components/NavBar.vue";


import HeroSection from "@/components/organizers/HeroSection.vue";
import VenuesAndSpaces from "@/components/organizers/VenuesAndSpaces.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";
import OrganizerBonuses from "@/components/organizers/OrganizerBonuses.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";
import FamousOrganizers from "@/components/organizers/FamousOrganizers.vue";
import CostCalculator from "@/components/organizers/CostCalculator.vue";
import ContactForm from "@/components/organizers/ContactForm.vue";
import ContactUs from "@/components/ContactUs.vue";
</script>

<template>
  <div>

    <HeroSection />
    <VenuesAndSpaces />
    <PhotoGallery />
    <OrganizerBonuses />
    <CateringOptions />
    <FamousOrganizers />
    <CostCalculator />
    <ContactUs />
  </div>
</template>
