<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {onMounted, ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import {useUserStore} from "@/store/UserStore";
import axios from "axios";
import {useRouter} from 'vue-router';

const router = useRouter();


const userStore = useUserStore();

let errors = ref([]);
let imageData = null;
let form = ref({
  first_name: '',
  last_name: '',
  location: '',
  description: '',
  image: '',
});

onMounted(() => {
  form.value.first_name = userStore.first_name
  form.value.last_name = userStore.last_name
  form.value.location = userStore.location
  form.value.description = userStore.description
  form.value.image = userStore.image
});

const update = async () => {
  const formData = new FormData();
  formData.append('_method', 'PUT')
  formData.append('first_name', form.value.first_name);
  formData.append('last_name', form.value.last_name);
  formData.append('location', form.value.location);
  formData.append('description', form.value.description);


  if (imageData) {
    formData.append('image', imageData.file);
    formData.append('height', imageData.height);
    formData.append('width', imageData.width);
    formData.append('left', imageData.left);
    formData.append('top', imageData.top);
  }

  try {
    await axios.post("api/user/update/" + userStore.id, formData);
    await userStore.fetchUser();
   await router.push('/account/profile')
  } catch (error) {
    errors.value = error.response.data.errors;
  }
}

let showModal = ref(false);

const setImageCroppedData = (data) => {
  imageData = data;

  form.value.image = data.imageUrl;
}

</script>

<template>
  <div id="editProfile" class="container max-w-4xl mx-auto mt-10 pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>
    <CropperModal
        v-if="showModal"
        :minAspectRatioProp="{width:8, height: 8}"
        :maxAspectRatioProp="{width:8, height: 8}"
        @croppedImageData="setImageCroppedData"
        @showModal="showModal= false"
    />
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="First Name"
            placeholder="Its ok!"
            v-model:input="form.first_name"
            inputType="text"
            :error="errors.first_name ? errors.first_name[0] : ''"
        />
      </div>

      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Last Name"
            placeholder="Its ok!"
            v-model:input="form.last_name"
            inputType="text"
            :error="errors.last_name ? errors.last_name[0] : ''"

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
            label="Profile Image"
            btnText="update profile image"
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
            v-model:description="form.description"
            placeholder="Write Some Information"
            :error="errors.description ? errors.description[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6 mt-5">
      <div class="w-full px-3">
        <SubmitFormButton
            btnText="Update Profile"
            @click="update"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>