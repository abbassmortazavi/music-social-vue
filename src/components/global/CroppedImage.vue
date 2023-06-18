<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  label: String,
  image: String

});
const {label} = toRefs(props);

</script>

<template>
  <div class="mb-4">
    <label for="" class=" block uppercase tracking-wide text-xs font-bold mb-2 text-gray-400">
      {{ label }}
    </label>
    <img :src="image" alt="" srcset="" class="rounded w-full border-solid border-4 border-green-500 ">
  </div>


</template>

<style scoped lang="scss">

</style>