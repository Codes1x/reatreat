<script setup>

import HeroSection from "@/components/HeroSection.vue";


import ContactUs from "@/components/ContactUs.vue";
import RoomPrices from "@/components/organizers/RoomPrices.vue";
import NearbyPlaces from "@/components/NearbyPlaces.vue";
import RetreatExtras from "@/components/organizers/RetreatExtras.vue";
import CateringOptions from "@/components/organizers/CateringOptions.vue";
import CostCalculator from "@/components/organizers/CostCalculator.vue";
import PhotoGallery from "@/components/organizers/PhotoGallery.vue";
</script>

<template>
  <div>

    <HeroSection />
       
    <Reels />
    <CenterFeatures /> 
    <RoomPrices />
    <NearbyPlaces />  
    <RetreatExtras />      
    <PhotoGallery />
    <CateringOptions />
    <RoomPrices />
    <CostCalculator />  
    <Events />
    
    <ContactUs />
  </div>
</template>
