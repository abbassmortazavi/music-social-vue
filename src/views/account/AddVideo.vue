<script setup>

import TextInput from "@/components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
</script>

<template>
  <div id="addSong" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-900 text-xl">Add Video</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>


    <TextInput
        class="mb-6"
        label="ُTitle"
        placeholder="Title"
        v-model:input="title"
        inputType="text"
        error="this is error"
    />

    <TextInput
        class="mb-2"
        label="Video Url"
        placeholder="Video Code"
        v-model:input="videoCode"
        inputType="text"
        error="this is error"
    />

    <SubmitFormButton
    btnText="Add Video"
    />
  </div>
</template>

<style scoped lang="scss">

</style>