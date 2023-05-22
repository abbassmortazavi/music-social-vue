<script setup>

import Button from "@/components/global/Button.vue";
</script>

<template>
  <div>
    <div class="ex-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Post</div>
        <div class="bg-green-500 w-full h-1"></div>


        <div class="w-full mt-4 flex justify-end">
          <Button
              class="mr-2"
              color="red"
              btnText="Delete Post"
              url="/account/delete-post"
          />
          <Button
              color="blue"
              btnText="Add Post"
              url="/account/add-post"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
        <div class="rounded-lg border">
          <a href="#">
            <img class="rounded-t-lg" src="https://placehold.co/600x400" alt=""/>
          </a>
          <div class="p-2 md:p-4">
            <div class="text-lg">
              <router-link to=""
                           class="text-blue-500 hover:text-blue-800"
              >
                test title
              </router-link>
            </div>
            <p class="py-2">Location: Test Location</p>
            <p class="text-gray-darker text-md">This is my text,This is my textThis is my textThis is my textThis is my
              textThis is my textThis is my text</p>
            <div class="mt-2 flex items-center justify-end">
              <router-link to="" class="underline bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-1 rounded-full">
                test title
              </router-link>
              <button to="" class="underline bg-red-500 hover:text-red-700 text-white text-sm font-bold py-1 px-1 rounded-full">
                test title
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>