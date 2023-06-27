<script setup>
import {useSongStore} from "@/store/SongStore";
import {useUserStore} from "@/store/UserStore";
import axios from "axios";
import Swal from "@/sweetalert";

const songStore = useSongStore();
const userStore = useUserStore();

const deleteSong = async (song) => {
  await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
      )
      await axios.delete(`api/delete/song/${song.id}/${userStore.id}`)
          .then(async res => {
            console.log(res);
            await songStore.fetchSongsByUserId(userStore.id)
          }).catch(err => {
            console.log(err);
          });
    }
  });
}
</script>

<template>
  <div id="addSong" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-900 text-xl">Delete Song</div>
    <div class="bg-red-500 w-full h-1 mb-4"></div>

    <div class="bg-white rounded px-8 pt-6 pb-8">
      <div class="flex flex-wrap" v-for="(song, index) in songStore.songs" :key="song">
        <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
          {{ ++index }}.{{ song.title }}.
        </div>
        <div class="w-1/4 ml-auto p-1">
          <button
              @click="deleteSong(song)"
              class="float-right bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>