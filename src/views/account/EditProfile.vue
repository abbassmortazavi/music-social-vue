<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
let firstName = ref(null);
let lastName = ref(null);
let location = ref(null);
</script>

<template>
  <div id="editProfile" class="container max-w-4xl mx-auto mt-10 pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="First Name"
            placeholder="Its ok!"
            v-model:input="firstName"
            inputType="text"
            error="this is error"
        />
      </div>

      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Last Name"
            placeholder="Its ok!"
            v-model:input="lastName"
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
        label="Profile Image"
        btnText="update profile image"
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
            btnText="Update Profile"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>