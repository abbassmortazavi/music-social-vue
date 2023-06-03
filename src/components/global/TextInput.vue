<script setup>
import {defineProps, defineEmits, toRefs, computed} from "vue";

const emit = defineEmits(['update:input']);
const props = defineProps({
    label: String,
    labelColor: {type: Boolean, default: true},
    input: String,
    placeholder: {type: String, default: ''},
    inputType: String,
    error: String
});
const {label, labelColor, input, placeholder, inputType, error} = toRefs(props);
const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})
</script>

<template>
    <div class="mb-4">
        <label for="" class=" block uppercase tracking-wide text-xs font-bold mb-2 text-gray-400 " :class="[labelColor ? 'text-color-gray-900': 'text-gray-100']">
            {{ label }}
        </label>
        <input
            :type="inputType"
            v-model="inputComputed"
            :placeholder="placeholder"
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
                ">
        <span v-if="error" class="text-red-500">
                {{ error }}
        </span>
    </div>


</template>

<style scoped lang="scss">

</style>