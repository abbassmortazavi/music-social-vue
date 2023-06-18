<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  btnText: String,
});
const {btnText} = toRefs(props);

</script>

<template>
  <div>
    <button
        class="
            float-right
            mt-2
            inline-block
            bg-green-500
            hover:bg-green-700
            font-bold
            text-white
            no-underline
            py-3
            px-4
            rounded
        "
       @click="$emit('submit', true)"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>