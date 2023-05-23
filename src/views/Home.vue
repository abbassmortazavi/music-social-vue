<template>
  <div class="home">
    <TopNavigation/>
    <HeroSection/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeroSection from "@/components/partials/HeroSection.vue";
import TopNavigation from "@/components/structure/TopNavigation.vue";

export default {
  name: 'Home',
  components: {
    TopNavigation,
    HeroSection
  }
}
</script>
