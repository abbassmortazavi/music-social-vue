<script setup>
import {useUserStore} from "@/store/UserStore";

const userStore = useUserStore();
</script>

<template>
<div class="py-2">
    <p class="text-gray-900 text-lg">
        <b>About Me</b>
    </p>
    <p class="text-md md:text-lg text-gray-600 leading-normal">
        {{ userStore.description }}
    </p>
</div>
</template>

<style scoped lang="scss">

</style>