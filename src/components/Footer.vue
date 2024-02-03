<script>
import tokenStore from '@/stores/tokenStore.js'
   export default {
        data() {
           return {
              tokenStore : tokenStore(),
           }
        }
   }
</script>


<template>
  <footer
    class="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 z-10 fixed bottom-0 w-full px-5 lg:py-3 py-1"
  >
    <div class="flex items-center justify-between">
      <div class="w-full">
        <h1>Preview Of Spotify</h1>
        <p class="lg:text-sm text-xs">
          Sign up to get unlimited songs and podcasts with occasional ads.No
          credits card needed.
        </p>
      </div>
      <button class="bg-white lg:w-52 w-52 hidden lg:block lg:px-5 px-3 py-2 text-black rounded-full" @click="tokenStore.authorize()">
        Sign Up Free
      </button>
    </div>
  </footer>
</template>
