<script setup>
import TextInput from "@/components/global/TextInput.vue";
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/store/UserStore";

const userStore = useUserStore();

let email = ref(null);
let password = ref(null);
let errors = ref([]);

const login = async () => {
  errors.value = [];

  try {
    let res = await axios.post("http://localhost:8082/api/login", {
      email: email.value,
      password: password.value,
    });
  
    await userStore.setUserDetails(res);
  } catch (error) {
    errors.value = error.response.data.errors;
  }
};
</script>

<template>
  <div id="login">
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-blue-800 p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">
            Lets get Login...
          </h1>

          <div class="mb-4">
            <TextInput
              label="Email"
              :labelColor="false"
              placeholder="Email"
              v-model:input="email"
              inputType="email"
              :error="errors.email ? errors.email[0] : ''"
            />
            <TextInput
              label="Password"
              :labelColor="false"
              placeholder="Password"
              v-model:input="password"
              inputType="password"
              :error="errors.password ? errors.password[0] : ''"
            />
          </div>

          <button
            class="block w-full bg-green-500 text-white text-sm tracking-wide rounded-sm py-3 cursor-pointer"
            @click="login"
          >
            Login
          </button>
        </div>
        <p class="text-center text-md text-gray-900">
          Don't Have an Account?
          <router-link
            to="register"
            class="text-blue-500 no-underline hover:underline"
            >Register</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
