<script setup>
import NavBar from "@/components/NavBar.vue";
import Reels from "@/components/Reels.vue";


import HeroSection from "@/components/organizers/HeroSection.vue";
import LongStay from "@/components/long-stay/LongStay.vue";
import IncludedServices from "@/components/long-stay/IncludedServices.vue";

import ContactUs from "@/components/ContactUs.vue";
</script>

<template>
  <div>

    <LongStay />
    <Reels />
    <IncludedServices />  
  
    <ContactUs />
  </div>
</template>
