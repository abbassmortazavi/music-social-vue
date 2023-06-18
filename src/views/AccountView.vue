<script setup>

import Footer from "@/components/structure/Footer.vue";
import TopNavigation from "@/components/structure/TopNavigation.vue";
</script>

<template>
  <TopNavigation/>
<div id="AccountView" class="max-w-4xl mx-auto">
    <router-view/>
</div>
 <Footer/>
</template>

<style scoped lang="scss">
#AccountView{
  min-height: 70vh;
}
</style>