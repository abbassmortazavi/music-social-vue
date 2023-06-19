<script setup>
import Aplayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import {onMounted} from "vue";
import {useSongStore} from "@/store/SongStore";

const songStore = useSongStore();


onMounted(() => {
  thePlayer();
})

const thePlayer = () => {
  new Aplayer({
    container: document.getElementById('aplayer'),
    audio: [
      {
        name: 'name1',
        artist: 'artist',
        url: "/music/Track 07.mp3",
        cover: 'cover.png',
      },
      {
        name: 'name2',
        artist: 'artist',
        url: "/music/Track 08.mp3",
        cover: 'cover.png',
      }
    ]
  })
}

</script>

<template>
  <div class="bg-green-500 rounded">
    <div id="aplayer"></div>
    {{ songStore }}
  </div>
</template>

<style scoped lang="scss">

</style>