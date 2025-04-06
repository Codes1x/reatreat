<script setup>
import NavBar from "@/components/NavBar.vue";


import HeroSection from "@/components/organizers/HeroSection.vue";
import RetreatIntro from "@/components/organizers/RetreatIntro.vue";
import VenuesAndSpaces from "@/components/organizers/VenuesAndSpaces.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";
import OrganizerBonuses from "@/components/organizers/OrganizerBonuses.vue";
import RetreatExtras from "@/components/organizers/RetreatExtras.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";
import FamousOrganizers from "@/components/organizers/FamousOrganizers.vue";
import CostCalculator from "@/components/organizers/CostCalculator.vue";
import Events from "@/components/events/Events.vue";
import ContactUs from "@/components/ContactUs.vue";
</script>

<template>
  <div>

    <HeroSection />  
    <RetreatIntro />
    <VenuesAndSpaces />
    <PhotoGallery />
    <OrganizerBonuses />
    <RetreatExtras />
    <RoomPrices />    
    <CateringOptions />
    <FamousOrganizers />
    <CostCalculator />
    <Events />
    <ContactUs />
  </div>
</template>
