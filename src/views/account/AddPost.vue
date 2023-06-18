<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
let title = ref(null);
let location = ref(null);
let showModal = ref(false);
// let imageData = null;
let image = ref(null);

const setImageCroppedData = (data)=>{
  image.value = data.imageUrl;
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
            v-model:input="title"
            inputType="text"
            error="this is error"
        />
      </div>

    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Location"
            placeholder="Its ok!"
            v-model:input="location"
            inputType="text"
            error="this is error"
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
            :image="image"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <TextArea
            label="Description"
            placeholder="Write Some Information"
            error="this is error"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6 mt-5">
      <div class="w-full px-3">
        <SubmitFormButton
            btnText="Add Post"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>