<script setup>

import HeroSection from "@/components/organizers/HeroSection.vue";
import RetreatIntro from "@/components/organizers/RetreatIntro.vue";
import VenuesAndSpaces from "@/components/organizers/VenuesAndSpaces.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";
import OrganizerBonuses from "@/components/organizers/OrganizerBonuses.vue";
import RetreatExtras from "@/components/organizers/RetreatExtras.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";

import CostCalculator from "@/components/organizers/CostCalculator.vue";
import Events from "@/components/events/Events.vue";
import ContactUs from "@/components/ContactUs.vue";
import Reels from "@/components/Reels.vue";
</script>

<template>
  <div>

    <HeroSection />  
    <RetreatIntro />
    <VenuesAndSpaces />
    <PhotoGallery />
    <OrganizerBonuses />
    <Reels />
    <RetreatExtras />
      
    
    <CateringOptions />
    <RoomPrices />
    <CostCalculator />  
    <Events />
    <ContactUs />
  </div>
</template>
