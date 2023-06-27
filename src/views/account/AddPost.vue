<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import axios from "axios";
import {useUserStore} from "@/store/UserStore";
import router from "@/router";

const userStore = useUserStore();

let showModal = ref(false);
let errors = ref([]);
let imageData = null;
let form = ref({
  title: '',
  location: '',
  description: '',
  image: '',
});

const addPost = () => {
  const formData = new FormData();
  formData.append('_method', 'POST')
  formData.append('title', form.value.title);
  formData.append('user_id', userStore.id);
  formData.append('description', form.value.description);
  formData.append('location', form.value.location);


  if (imageData) {
    formData.append('image', imageData.file);
    formData.append('height', imageData.height);
    formData.append('width', imageData.width);
    formData.append('left', imageData.left);
    formData.append('top', imageData.top);
  }

  axios.post('api/posts', formData)
      .then(async res => {
        console.log(res);
        await router.push('/account/profile')

      }).catch(err => {
    errors.value = err.response.data.errors;
  });

}


const setImageCroppedData = (data) => {
  imageData = data;

  form.value.image = data.imageUrl;
}

</script>

<template>
  <div id="addPost" class="container max-w-4xl mx-auto mt-10 pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Add Post</div>
    <div class="bg-green-500 w-full h-1"></div>
    <CropperModal
        v-if="showModal"
        :minAspectRatioProp="{width:16, height: 9}"
        :maxAspectRatioProp="{width:16, height: 9}"
        @croppedImageData="setImageCroppedData"
        @showModal="showModal= false"
    />
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Ttile"
            placeholder="Its ok!"
            v-model:input="form.title"
            inputType="text"
            :error="errors.title ? errors.title[0] : ''"
        />
      </div>

    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Location"
            placeholder="Its ok!"
            v-model:input="form.location"
            inputType="text"
            :error="errors.location ? errors.location[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
            label="Post Image"
            btnText="Add Post image"
            @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage
            label="Cropped Image"
            :image="form.image"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <TextArea
            label="Description"
            placeholder="Write Some Information"
            v-model:description="form.description"
            :error="errors.description ? errors.description[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6 mt-5">
      <div class="w-full px-3">
        <SubmitFormButton
            btnText="Add Post"
            @click="addPost"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>