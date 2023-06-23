<script setup>
import Aplayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import {onMounted} from "vue";
import {useSongStore} from "@/store/SongStore";
import {useUserStore} from "@/store/UserStore";
const userStore = useUserStore();


const songStore = useSongStore();

let songLists = [];
onMounted(async () => {
  await songStore.fetchSongsByUserId(userStore.id)
  mapSongs();
  thePlayer();
});

const mapSongs = () => {

  let x = songStore.songs.map((song) => {
    return {
      name: song.title,
      artist: songStore.artistName,
      url: process.env.VUE_APP_URL_API + 'songs/' + songStore.artistId + '/' + song.song
    }
  });
  for (let i = 0; i < x.length; i++) {
    songLists.push(x[i]);
  }
  /*let newSongs = songStore.songs.map(function (song) {
    console.log(newSongs);
    return {
      name: song.title,
      artist: songStore.artistName,
      url: process.env.VUE_APP_URL_API + 'songs/' + songStore.artistId + '/' + song.song
    }
  });
  for (let i = 0; i < newSongs.length; i++) {
    songLists.push(newSongs[i]);
  }*/

}


const thePlayer = () => {
  new Aplayer({
    container: document.getElementById('aplayer'),
    audio: songLists
  })
}

</script>

<template>
  <div class="bg-green-500 rounded">
    <div id="aplayer"></div>
  </div>
</template>

<style scoped lang="scss">

</style>