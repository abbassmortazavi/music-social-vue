<script setup>
import {useSongStore} from "@/store/SongStore";
import {onMounted, ref} from "vue";
let songStore = useSongStore();
let countSong = ref(0)
onMounted(()=>{
  if (songStore.songs !== null){
    countSong.value = songStore.songs.length;
  }
})
//until 42 watch
</script>

<template>
<div class="w-full sm:w-1/2 font-bold text-gray-100 mt-4 rounded text-center bg-green-500 p-2 py-1">Number Of songs {{ countSong }}</div>
</template>

<style scoped lang="scss">

</style>