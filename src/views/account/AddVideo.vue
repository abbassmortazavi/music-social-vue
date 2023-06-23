<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/store/UserStore";
const userStore = useUserStore();
import {useVideoStore} from "@/store/VideoStore";
import router from "@/router";
const videoStore = useVideoStore();

const form = ref({
  'title': '',
  'url': '',
  'user_id': '',
});
let errors = ref([]);
const addVideo = async ()=>{
  form.value.user_id = userStore.id;
  await axios.post('api/youtups', form.value)
      .then(async res => {
        console.log(res);
        await videoStore.fetchVideosByUserId(userStore.id);
        await router.push('/account/profile')
      }).catch(err=>{
        errors.value= err.response.data.errors;
      });
}


</script>

<template>
  <div id="addSong" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-900 text-xl">Add Video</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>


    <TextInput
        class="mb-6"
        label="ُTitle"
        placeholder="Title"
        v-model:input="form.title"
        inputType="text"
        :error="errors.title ? errors.title[0] : ''"
    />

    <TextInput
        class="mb-2"
        label="Video Url"
        placeholder="Video Code"
        v-model:input="form.url"
        inputType="text"
        :error="errors.url ? errors.url[0] : ''"
    />

    <SubmitFormButton
    btnText="Add Video"
    @click="addVideo"
    />
  </div>
</template>

<style scoped lang="scss">

</style>