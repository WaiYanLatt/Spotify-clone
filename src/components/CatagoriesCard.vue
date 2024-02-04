<script>
export default {
  props: {
    coverphotoUrl: {
      type: String,
      default:
        "https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/master/pass/Olivia-Rodrigo-SOUR.jpeg",
    },
    title: {
      type: String,
      default: "Music",
    },
  },
};
</script>

<template>
  <a
    class="w-full h-[170px] p-3 rounded-lg cursor-pointer overflow-hidden"
    href="#"
  >
    <div class="relative">
      <h1 class="text-md absolute top-0 left-3">{{ title }}</h1>
      <img
        :src="coverphotoUrl"
        alt=""
        class="object-cover w-full rounded-lg shadow-sm shadow-slate-300"
      />
    </div>
  </a>
</template>
