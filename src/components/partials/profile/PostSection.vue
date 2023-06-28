<script setup>
import Button from "@/components/global/Button.vue";
import {usePostStore} from "@/store/PostStore";
import {useUserStore} from "@/store/UserStore";
import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from "@/sweetalert";

const postStore = usePostStore();
const userStore = useUserStore();
let posts = ref([]);

onMounted(async () => {
  await postStore.fetchPostsByUserId(userStore.id)
  await listPosts();
});

const listPosts = async () => {
  posts.value = postStore.posts;
}


const deletePost = async (id) => {
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
          'Your post has been deleted.',
          'success'
      )
      axios.delete(`/api/delete/post/${id}`)
          .then(res => {
            console.log(res);
            postStore.fetchPostsByUserId(userStore.id);
          }).catch(err => {
        console.log(err);
      });
    }
  });
}

</script>

<template>
  <div>
    <div class="ex-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Post</div>
        <div class="bg-green-500 w-full h-1"></div>


        <div class="w-full mt-4 flex justify-end">
          <Button
              color="blue"

              btnText="Add Post"
              url="/account/add-post"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2" v-for="post in postStore.posts" :key="post">
        <div class="rounded-lg border">
          <a href="#">
            <img class="rounded-t-lg" :src="postStore.postImage(post.image)" alt=""/>
          </a>
          <div class="p-2 md:p-4">
            <div class="text-lg">
              <router-link :to="'post-by-id/'+post.id"
                           class="
              bg-blue-500
              hover:text-blue-700
              text-white
              text-sm
              font-bold
              py-1
              px-2
              rounded-full
              "
              >
                {{ post.title }}
              </router-link>
            </div>
            <p class="py-2">Location: {{ post.location }}</p>
            <p class="text-gray-darker text-md">{{ post.description }}</p>
            <div class="mt-2 flex items-center justify-end">
              <router-link :to="'/account/edit-post/'+post.id"
                           class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-1 rounded-full">
                Edit Post
              </router-link>

              <Button
                  class="
                  bg-red-500
                  hover:white-blue-700
                  text-white
                  text-sm
                  font-bold
                  py-1
                  px-1
                    rounded-full
               "
                  btnText="Delete Post"
                  @click="deletePost(post.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>