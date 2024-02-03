<script>
import tokenStore from '@/stores/tokenStore.js'
   export default {
        emits : ['show-sidebar'],
        data() {
           return {
              tokenStore : tokenStore(),
           }
        }
   }
</script>



<template>
  <nav class="w-full bg-[#121212] lg:py-5 py-3 fixed top-0 lg:px-7 px-5 z-10">
    <div class="flex justify-between items-center ">
      <div class="hidden lg:block">
        <i
          class="fa-solid fa-angle-left mr-5 bg-[#242424] px-4 cursor-not-allowed py-3 rounded-full"
        ></i>
        <i
          class="fa-solid fa-angle-right bg-[#242424] px-4 cursor-not-allowed py-3 rounded-full"
        ></i>
      </div>
      <div class="lg:items-end lg:ml-[300px]">
        <button class="bg-[#242424] px-7 py-2 rounded-full mr-3" @click="tokenStore.authorize()">
          Sing Up
        </button>
        <button class="bg-white text-black px-7 py-2 rounded-full" @click="tokenStore.authorize()">
          Log In
        </button>
      </div>
      <div>
         <button class="px-3 py-2 rounded-full lg:hidden block bg-green-500" @click="$emit('show-sidebar')">
           <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
