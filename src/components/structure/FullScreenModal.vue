<script setup>
import {ref} from "vue";
import Button from "@/components/global/Button.vue";

let open = ref(false);
</script>

<template>
  <div>
    <button @click="open = !open"
            class="bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white px-5 py-2 hove:border-transparent rounded">
      <i class="fa-solid fa-bars fa-xl text-lg"></i>
    </button>
    <div v-show="open"
         class="animated slideInUp faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm">
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl text-center text-white font-bold">Menu</p>
        <Button
            class="w-full text-gray-100 text-center text-lg mt-2 px-250"
            color="green"
            btnText="Profile"
            url="/account/profile"
        />

        <Button
            @click="open = !open"
            class="w-full text-gray-100 text-center text-lg mt-2 px-45 py-15"
            color="red"
            btnText="Close"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>