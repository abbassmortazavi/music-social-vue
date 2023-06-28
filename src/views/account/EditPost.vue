<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {onMounted, ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import axios from "axios";
import {useRoute} from 'vue-router';
import {usePostStore} from "@/store/PostStore";
import router from "@/router";
import { useUserStore } from "@/store/UserStore";
const userStore = useUserStore();
const postStore = usePostStore();
const route = useRoute();


const form = ref({
  title: null,
  location: null,
  description: null,
  image: null,
});

let showModal = ref(false);
let imageData = null;
let errors = ref([]);



onMounted(async () => {
  getPost();
});
const getPost = () => {
  axios.get('api/post/' + route.params.id)
      .then(res => {
        console.log(res);
        form.value = res.data.data;
        form.value.image = postStore.postImage(res.data.data.image);
      }).catch(err => {
    console.log(err);
  });
}

const updatePost = () => {
  const formData = new FormData();
  formData.append('_method', 'PUT')
  formData.append('title', form.value.title);
  formData.append('description', form.value.description);
  formData.append('location', form.value.location);

  console.log(imageData);
  if (imageData) {

    formData.append('image', imageData.file);
    formData.append('height', imageData.height);
    formData.append('width', imageData.width);
    formData.append('left', imageData.left);
    formData.append('top', imageData.top);
  }

  axios.post('api/post/' + route.params.id, formData)
      .then(async res => {
        console.log(res);
        await postStore.fetchPostsByUserId(userStore.id)
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
  <div id="editPost" className="container max-w-4xl mx-auto mt-10 pt-20 pb-20 px-6">
    <div className="text-gray-900 text-xl">Edit Post</div>
    <div className="bg-green-500 w-full h-1"></div>
    <CropperModal
        v-if="showModal"
        :minAspectRatioProp="{width:16, height: 9}"
        :maxAspectRatioProp="{width:16, height: 9}"
        @croppedImageData="setImageCroppedData"
        @showModal="showModal= false"
    />
    <div className="flex flex-wrap mt-4 mb-6">
      <div className="w-full md:w-1/2 px-3">
        <TextInput
            label="Ttile"
            placeholder="Its ok!"
            v-model:input="form.title"
            inputType="text"
            error="this is error"
        />
      </div>

    </div>
    <div className="flex flex-wrap mt-4 mb-6">
      <div className="w-full md:w-1/2 px-3">
        <TextInput
            label="Location"
            placeholder="Its ok!"
            v-model:input="form.location"
            inputType="text"
            error="this is error"
        />
      </div>
    </div>
    <div className="flex flex-wrap mt-4 mb-6">
      <div className="w-full md:w-1/2 px-3">
        <DisplayCropperButton
            label="Post Image"
            btnText="edit Post image"
            @showModal="showModal = true"
        />
      </div>
    </div>

    <div className="flex flex-wrap mt-4 mb-6">
      <div className="w-full  px-3">
        <CroppedImage
            label="Cropped Image"
            :image="form.image"
        />
      </div>
    </div>

    <div className="flex flex-wrap mt-4 mb-6">
      <div className="w-full px-3">
        <TextArea
            label="Description"
            placeholder="Write Some Information"
            v-model:description="form.description"
            error="this is error"
        />
      </div>
    </div>
    <div className="flex flex-wrap mt-4 mb-6 mt-5">
      <div className="w-full px-3">
        <SubmitFormButton
            btnText="Update Post"
            @click="updatePost"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>