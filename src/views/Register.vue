<script setup>

import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/store/UserStore";
import {useSongStore} from "@/store/SongStore";
import {useProfileStore} from "@/store/ProfileStore";
import {useVideoStore} from "@/store/VideoStore";
import {usePostStore} from "@/store/PostStore";
import router from "@/router";
import TopNavigation from "@/components/structure/TopNavigation.vue";

const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();

let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let errors = ref([]);

const register = async () => {
  try {
    let res = await axios.post('api/register', {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    });
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

    await userStore.setUserDetails(res);
    await profileStore.fetchProfile(userStore.id);
    await songStore.fetchSongsByUserId(userStore.id);
    await videoStore.fetchVideosByUserId(userStore.id);
    await postStore.fetchPostsByUserId(userStore.id);

    await router.push('/account/profile/' + userStore.id);
  } catch (e) {
    errors.value = e.response.data.errors;
  }
}

</script>

<template>
  <div id="register">
    <TopNavigation/>

    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-blue-800 p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">Lets get Login...</h1>

          <div class="mb-4">
            <TextInput
                label="First Name"
                :labelColor="false"
                placeholder="Abbass"
                v-model:input="firstName"
                inputType="text"
                :error="errors.first_name ? errors.first_name[0] : ''"
            />
            <TextInput
                label="Last Name"
                :labelColor="false"
                placeholder="Mortazavi"
                v-model:input="lastName"
                inputType="text"
                :error="errors.last_name ? errors.last_name[0] : ''"
            />

            <TextInput
                label="Password"
                :labelColor="false"
                placeholder="Password"
                v-model:input="password"
                inputType="password"
                :error="errors.password ? errors.password[0] : ''"
            />
            <TextInput
                label="Confirm Password"
                :labelColor="false"
                placeholder="Password Confirm"
                v-model:input="confirmPassword"
                inputType="password"
            />
            <TextInput
                label="Email"
                :labelColor="false"
                placeholder="Email"
                v-model:input="email"
                inputType="email"
                :error="errors.email ? errors.email[0] : ''"
            />

          </div>

          <button class="block w-full bg-green-500 text-white text-sm tracking-wide rounded-sm py-3 cursor-pointer"
                  @click="register">
            Register
          </button>
        </div>
        <p class="text-center text-md text-gray-900">
          Already Have an Account?
          <router-link to="login" class="text-blue-500 no-underline hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>