<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  btnText: String,
  color: String,
  url: String,
});
const {btnText, color, url} = toRefs(props);

</script>

<template>
  <div>
    <router-link :to="url"
                 :class="[color ? 'hover:bg-' + color + '-500 border-' + color+ '-500' : '']"
                 class="
                                 float-right
                                 bg-transparent
                                 text-gray-900
                                 font-semibold
                                 hover:text-white
                                 py-2
                                 px-4
                                 border
                                 hover:border-transparent
                                 rounded


                                ">
      {{ btnText }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">

</style>