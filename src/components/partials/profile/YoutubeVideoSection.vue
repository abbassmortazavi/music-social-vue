<script setup>
import Button from "@/components/global/Button.vue";
import {onMounted, ref} from "vue";
import {useVideoStore} from "@/store/VideoStore";
const videoStore = useVideoStore();
import {useUserStore} from "@/store/UserStore";
const userStore = useUserStore();
let videos = ref([]);

onMounted(async () => {
  await videoStore.fetchVideosByUserId(userStore.id)
  await listVideos();
});

const listVideos = async ()=>{
  videos.value = videoStore.videos;
}
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
    <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2" v-for="video in videos" :key="video.id">
      <div class="text-xl text-gray-900">{{ video.title }}</div>
      <iframe class="w-full h-60" :src=" video.url "></iframe>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>