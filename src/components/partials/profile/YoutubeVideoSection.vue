<script setup>

import Button from "@/components/global/Button.vue";
</script>

<template>
<div>
  <div class="ex-auto py-4">
    <div class="flex flex-wrap font-bold text-gray-100">
      <div class="text-gray-900 text-xl">Video</div>
      <div class="bg-green-500 w-full h-1"></div>


      <div class="w-full mt-4 flex justify-end">
        <Button
            class="mr-2"
            color="red"
            btnText="Delete Video"
            url="/account/delete-video"
        />
        <Button
            color="blue"
            btnText="Add Video"
            url="/account/add-video"
        />
      </div>
    </div>
  </div>
  <div class="flex flex-wrap mb-4">
    <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
      <div class="text-xl text-gray-900">Video Title</div>
      <iframe class="w-full h-60" src="https://www.youtube.com/embed/slmQngr-jd0?autoplay=0"></iframe>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>