<script setup>

import Button from "@/components/global/Button.vue";
import SongPlayer from "@/components/partials/profile/SongPlayer.vue";
</script>

<template>
<div>
  <div class="ex-auto py-4">
    <div class="flex flex-wrap font-bold text-gray-100">
      <div class="text-gray-900 text-xl">Songs</div>
      <div class="bg-green-500 w-full h-1"></div>


      <div class="w-full mt-4 flex justify-end">
        <Button
            class="mr-2"
            color="red"
            btnText="Delete Song"
            url="/account/delete-song"
        />
        <Button
            color="blue"
            btnText="Add Song"
            url="/account/add-song"
        />
      </div>
    </div>
  </div>
  <div class="pb-4">
    <song-player/>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>