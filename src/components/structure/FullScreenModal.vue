<script setup>
import {ref} from "vue";
import Button from "@/components/global/Button.vue";
import {useUserStore} from "@/store/UserStore";
import {useSongStore} from "@/store/SongStore";
import {useProfileStore} from "@/store/ProfileStore";
import {useVideoStore} from "@/store/VideoStore";
import {usePostStore} from "@/store/PostStore";
import router from "@/router";
import axios from "axios";

const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
let open = ref(false);

const logout = () => {
  axios.post('api/logout', {
    user_id: userStore.id
  })
      .then(async res => {
        console.log(res);
        await userStore.clearUser();
        await profileStore.clearProfile();
        await songStore.clearSongs();
        await videoStore.clearVideos();
        await postStore.clearPosts();
        await router.push('/');
      }).catch(err => {
    console.log(err);
  });
}


</script>

<template>
  <div>
    <button
        @click="open = !open"
        class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-semibold
                hover:text-white
                py-1
                px-2
                hover:border-transparent
                rounded
            "
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>
    <div
        v-show="open"
        class="
                animated
                slideInDown
                faster
                fixed
                w-full
                h-full
                top-0
                left-0
                flex
                justify-center
                backdrop-blur-sm
            "
    >
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl text-center text-white font-bold">Menu</p>
        <div class="pt-2">
          <Button
              class="
                  w-full
                  text-gray-100
                  text-center
                  text-lg

               "
              color="green"
              btnText="Profile"
              :url="'/account/profile/'+userStore.id"
          />

          <Button
              v-if="userStore.id"
              class="
                  w-full
                  text-gray-100
                  text-center
                  text-lg
               "
              color="green"
              btnText="Logout"
              @click="logout"
          />

          <Button
              @click="open = !open"
              class="
                  w-full
                  text-gray-100
                  text-center
                  text-lg

               "
              color="red"
              btnText="close"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>