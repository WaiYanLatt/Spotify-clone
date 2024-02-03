<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://open.spotify.com/playlist/37i9dQZF1DWYYQb2mqFd5I",
    },
    coverphotoUrl: {
      type: String,
      default:
        "https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/master/pass/Olivia-Rodrigo-SOUR.jpeg",
    },
    title: {
      type: String,
      default: "Rest Of My Life",
    },
    artist: {
      type: String,
      default: "Jonas Blue",
    },
  },
};
</script>

<template>
  <a
    class="w-full h-auto p-3 rounded-lg bg-[#1c1c1c] cursor-pointer group hover:bg-black transtion-all duration-500"
    :href="url"
    target="_blank"
  >
    <div class="relative">
      <img
        :src="coverphotoUrl"
        alt=""
        class="w-full object-cover h-[150px] rounded-lg"
      />
      <button
        class="bg-green-500 w-12 h-12 rounded-full absolute bottom-[-23px] right-[-7px] shadow-lg opacity-0 transtion-all duration-500 group-hover:opacity-100 group-hover:bottom-[-13px]"
      >
        <i class="fa-solid fa-play text-black"></i>
      </button>
    </div>
    <div class="mt-5 break-all">
      <h1 class="text-md text-green-500">{{ title }}</h1>
      <p class="text-sm">{{ artist }}</p>
    </div>
  </a>
</template>
