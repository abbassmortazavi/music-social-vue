<script setup>

import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection.vue";
import Button from "@/components/global/Button.vue";
import SongSection from "@/components/partials/profile/SongSection.vue";
import YoutubeVideoSection from "@/components/partials/profile/YoutubeVideoSection.vue";
import PostSection from "@/components/partials/profile/PostSection.vue";
</script>

<template>
  <div class="container max-w-4xl mx-auto flex mt-10">
    <div class="w-1/3">
      <img src="https://placehold.co/600x400" class="w-full rounded-lg h-auto shadow-lg" alt="Profile Pic">
    </div>

    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-2xl md:text-4xl text-left text-gray-900">Abbass Mortazavi</h1>
          <span class="text-md text-gray-700 ">
                    <i><b>Netherlands, Germany</b></i>
                </span>
        </div>
        <div class="w-1/2 mt-2">
          <Button
              color="green"
              btnText="Edit Profile"
              url="/account/edit-profile"
          />
        </div>
      </div>
      <ProfileInfoSection/>
      <profile-about-section/>
      <song-section/>
      <YoutubeVideoSection/>
      <PostSection/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>