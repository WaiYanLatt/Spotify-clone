<script>
export default {
  emits: ["unShow-bar"],
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <aside
    class="lg:w-[350px] lg:left-0 left-[-100%] w-full z-20 lg:z-0 transition-all duration-1000 bg-black fixed h-screen p-2"
    :class="{ 'left-[0%]': this.show === true }"
  >
    <div class="block lg:hidden relative">
      <button
        class="bg-green-500 py-3 px-5 rounded-full absolute right-5 top-4"
        @click="$emit('unShow-bar')"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="bg-[#1c1c1c] w-full rounded-md shadow-lg p-5">
      <h1 class="text-lg">
        <i class="fa-brands fa-spotify text-2xl mr-2"></i>
        Spotify
      </h1>
      <router-link
        to="/"
        class="text-lg block mt-3 hover:underline cursor-pointer duration-500"
        @click="$emit('unShow-bar')"
      >
        <i class="fa-solid fa-home text-xl mr-3"></i>
        Home
      </router-link>
      <router-link
        to="/search"
        class="text-lg block text-gray-400 mt-3 hover:underline cursor-pointer duration-500"
        @click="$emit('unShow-bar')"
      >
        <i class="fa-solid fa-magnifying-glass text-xl mr-3 text-gray-400"></i>
        Search
      </router-link>
    </div>
    <div
      class="bg-[#1c1c1c] w-full rounded-md h-[600px] overflow-hidden shadow-lg p-3 my-1 relative"
    >
      <div class="flex items-center justify-between">
        <h1 class="text-lg text-gray-200">
          <i class="fa-solid fa-layer-group text-gray-200 mr-3"></i>
          Your Library
        </h1>
        <i class="fa-solid fa-plus text-gray-200"></i>
      </div>
      <div class="bg-[#242424] w-full py-7 px-2 mt-2 rounded-md">
        <h1 class="font-bold">Create your first playlist</h1>
        <p class="text-sm mt-1">It's easy we will help you</p>
        <button
          class="bg-white rounded-full text-black py-2 px-5 font-bold mt-3 transition-all duration-500 hover:scale-105"
        >
          Create Playlist
        </button>
      </div>
      <div class="bg-[#242424] w-full py-7 px-3 mt-2 rounded-md">
        <h1 class="font-bold">Let's find some podcasts to follow</h1>
        <p class="text-sm mt-1">We'll keep you updated on new episodes.</p>
        <button
          class="bg-white rounded-full text-black py-2 px-5 font-bold mt-3 transition-all duration-500 hover:scale-105"
        >
          Browse podcasts
        </button>
      </div>
      <div class="absolute bottom-3">
        <div class="*:text-sm *:text-gray-400 *:mr-2 mt-5">
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="*:text-sm *:text-gray-400 *:mr-2 mt-1">
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
          <a href="#">Accessibility</a>
          <a href="#">Cookies</a>
        </div>
        <button
          class="bg-transparent border border-white px-5 mt-3 py-2 rounded-full"
        >
          <i class="fa-solid fa-globe mr-3"></i>
          English
        </button>
      </div>
    </div>
  </aside>
</template>
