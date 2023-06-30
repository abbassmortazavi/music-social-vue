<script setup>
import {useProfileStore} from "@/store/ProfileStore";

const profileStore = useProfileStore();
</script>

<template>
<div class="py-2">
    <p class="text-gray-900 text-lg">
        <b>About Me</b>
    </p>
    <p class="text-md md:text-lg text-gray-600 leading-normal">
        {{ profileStore.description }}
    </p>
</div>
</template>

<style scoped lang="scss">

</style>