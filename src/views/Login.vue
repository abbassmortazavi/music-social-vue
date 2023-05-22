<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
let email = ref(null);
let password = ref(null);
</script>

<template>
    <div id="login">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-blue-800 p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Lets get Login...</h1>

                    <div class="mb-4">

                        <TextInput
                            label="Email"
                            :labelColor="false"
                            placeholder="Email"
                            v-model:input="email"
                            inputType="email"
                            error="this is error"
                        />
                        <TextInput
                            label="Password"
                            :labelColor="false"
                            placeholder="Password"
                            v-model:input="password"
                            inputType="password"
                            error="this is error"
                        />

                    </div>

                    <button class="block w-full bg-green-500 text-white text-sm tracking-wide rounded-sm py-3 cursor-pointer">
                        Login
                    </button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Don't Have an Account?
                    <router-link to="register" class="text-blue-500 no-underline hover:underline">Register</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>