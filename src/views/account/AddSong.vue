<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import {ref} from "vue";
import Swal from "@/sweetalert";
import {useUserStore} from "@/store/UserStore";
import axios from "axios";
import {useSongStore} from "@/store/SongStore";

const userStore = useUserStore();
const songStore = useSongStore();
let song = ref(null);
let title = ref(null);
let file = ref(null);
let errors = [];
const handleFileUpload = () => {
  song.value = file.value.files[0];
}

const addSong = async () => {
  if (!song.value) {
    await Swal.fire(
        'Ooops, Something Wrong!',
        'You Forgot to upload the mp3 file!',
        'warning'
    )
    return null;
  }

  try {
    let form = new FormData();
    form.append('_method', 'POST');

    form.append('user_id', userStore.id);
    form.append('title', title.value);
    form.append('file', song.value);
    await axios.post('api/songs',form)
    await songStore.fetchSongsByUserId(userStore.id)
  } catch (err) {
    console.log(err);
    errors.value= err.response.data.errors;

  }
}
</script>

<template>
  <div id="addSong" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-900 text-xl">Add Song</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>


    <TextInput
        class="mb-6"
        label="ُTitle"
        placeholder="Title"
        v-model:input="title"
        inputType="text"
        error="this is error"
    />

    <div class="w-full">
      <label for="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select Image</label>
      <input type="file" id="image" ref="file"
             @change="handleFileUpload"
             class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white
                  bg-clip-padding
                  border
                  border-solid
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
              ">
    </div>
    <SubmitFormButton
        btnText="Add Song"
        @submit="addSong"
    />
  </div>
</template>

<style scoped lang="scss">

</style>