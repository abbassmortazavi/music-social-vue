<template>
    <div id="centerCallToAction" class="max-w-4xl">
        <div class="px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
            <h1 class="text-4xl sm:text-5xl md:text-5xl leading-tight text-center text-gray-100 mb-3"><b>Musical Social
                Network</b></h1>
            <p class="pt-2 text-xl text-center text-gray-300">Login and Register now and join in my website!!</p>
            <p class="py-4 text-xl text-center text-gray-300">Let the music be our guide</p>
        </div>
        <div class="mt-6"></div>

        <div class="flex justify-between">
            <router-link to="login"
                         class="w-full mr-1 py-2 px-4 text-center bg-green-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer">
                Login
            </router-link>
            <router-link to=""
                         class="w-full mr-1 py-2 text-center px-4 bg-blue-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer">
                Register
            </router-link>
        </div>
    </div>

    <div id="videoDarkOverlay"></div>

    <video autoplay muted loop id="myVideo">
        <source src="../../../public/Concert.mp4" type="video/mp4"/>
    </video>

</template>
<script setup>
</script>

<style scoped lang="scss">
#centerCallToAction {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#myVideo {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
}

#videoDarkOverlay {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0,0,0,0.65);
}
</style>