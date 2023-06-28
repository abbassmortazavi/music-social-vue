<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {usePostStore} from "@/store/PostStore";
import {useUserStore} from "@/store/UserStore";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

let userStore = useUserStore();
let postStore = usePostStore();
let posts = ref(null);
let page = ref(1);
let pageCount = ref(null);

onMounted(()=>{
  getPosts();
})

const getPosts = async () => {
  try {
    let res = await axios.get('api/posts?page=' + page.value);
    pageCount.value = res.data.pageCount;

    posts.value = res.data.posts.data;
  } catch (e) {
    console.log(e.data.errors);
  }
}

</script>

<template>
  <div class="container mx-auto max-w-4xl py-6 px-3">

    <div class="text-gray-900 text-xl">Posts</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>

    <div class="mx-auto">
      <div class="my-4" v-for="post in posts" :key="post">
        <div class="flex items-center py-2">
          <router-link to="">
            <img :src="userStore.userImage(post.user.image)" class="rounded-full" width="50">
          </router-link>
          <div class="ml-2 font-bold text-2xl">
            <router-link :to="'/account/profile/' + post.user.id">
              {{ post.user.first_name }} {{ post.user.last_name }}
            </router-link>
          </div>
        </div>
        <img class="w-full" :src="postStore.postImage(post.image)" alt="">
        <div class="p-4">
          <p class="text-3xl font-bold hover:text-gray-700 pb-4">
            {{ post.title }}
          </p>
          <p class="py-2 text-lg">Event Location: {{ post.location }}</p>
          <p class="pb-6">
            {{ post.description }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center p-2">
        <v-pagination
            v-model="page"
            :pages="pageCount"
            :range-size="1"
            active-color="#333fff"
            @update:modelValue="getPosts"
        />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

</style>