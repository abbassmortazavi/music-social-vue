<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  btnText: String,
  label: String,
});
const {btnText, label} = toRefs(props);

</script>

<template>
 <div>
   <label for="" class="block uppercase tracking-wide text-gray-900 font-bold text-xs ">{{ label}}</label>
   <button
       class="
            mt-2
            inline-block
            bg-green-500
            hover:bg-green-700
            font-bold
            text-white
            no-underline
            px-4
            py-3
            rounded
        "
       @click="$emit('showModal', true)"
   >
     {{ btnText }}
   </button>
 </div>
</template>

<style scoped lang="scss">

</style>