<script setup>

import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";

let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
</script>

<template>
    <div id="register">
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
                        error="this is error"
                        />
                        <TextInput
                            label="Last Name"
                            :labelColor="false"
                            placeholder="Mortazavi"
                            v-model:input="lastName"
                            inputType="text"
                            error="Name is required"
                        />

                        <TextInput
                            label="Password"
                            :labelColor="false"
                            placeholder="Password"
                            v-model:input="password"
                            inputType="password"
                            error="this is error"
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
                            error="this is error"
                        />

                    </div>

                    <button class="block w-full bg-green-500 text-white text-sm tracking-wide rounded-sm py-3 cursor-pointer">
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