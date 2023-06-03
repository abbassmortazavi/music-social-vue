<script setup>
// const emit = defineEmits(['update:input']);
import {computed, defineEmits, defineProps, toRefs} from "vue";
const emit = defineEmits(['update:description']);

const props = defineProps({
  description: String,
  label: String,
  placeholder: {type: String, default: ''},
  error: String
});
const {description, label, placeholder, error} = toRefs(props);

const descriptionComputed = computed({
  get: ()=> description.value,
  set: (val)=>emit('update:description', val)
})

</script>

<template>
 <div>
   <label for="" class="block uppercase tracking-wide text-gray-900 font-bold text-xs ">{{ label}}</label>
  <textarea
      class=
          "
           appearance-none
           block
           w-full
           bg-white
           rounded
           py-3
           px-4
           leading-right
           focus:outline-none
           focus:bg-white
           focus:bg-white
           focus:border-gray-800
           border
        "
  cols="30"
  rows="10"
  v-model="descriptionComputed"
      :placeholder="placeholder"
  >

  </textarea>
   <span v-if="error" class="text-red-500">{{ error }}</span>
 </div>
</template>

<style scoped lang="scss">

</style>