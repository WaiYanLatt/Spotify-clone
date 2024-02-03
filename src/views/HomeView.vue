<script>
import MusicCard from "@/components/MusicCard.vue";
import usetokenStore from "@/stores/tokenStore.js";
import useMusicStore from "@/stores/Music.js";

export default {
  components: {
    MusicCard,
  },
  data() {
    return {
      usetokenStore: usetokenStore(),
      useMusicStore: useMusicStore(),
    };
  },
  async mounted() {
    const token = this.usetokenStore.token;
    if (token) {
      const userTopTracks = await this.useMusicStore.getuserTopTracks(token);
     //   console.log(userTopTracks);
      if (userTopTracks) {
        this.useMusicStore.setuserTopTracks(userTopTracks);
      }

      const newReleases = await this.useMusicStore.getnewReleases(token);
    //   console.log(newReleases);
      if (newReleases) {
        this.useMusicStore.setnewReleases(newReleases);
      }

      const fucturedPlaylists = await this.useMusicStore.getfucturedPlaylists(
        token
      );
    //   console.log(fucturedPlaylists);
      if (fucturedPlaylists) {
        this.useMusicStore.setfucturedPlaylists(fucturedPlaylists);
      }
    }
  },
};
</script>

<template>
  <main class="*:pb-10 mb-20">
    <!-- <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Spotify Playlists</h1>
            <p>Show All</p>
        </div> -->
    <section class="">
      <h1 class="text-xl">Your Top Items</h1>
      <h3 class="text-md mt-2">Base On Your Recent Listening</h3>
      <div
        v-if="useMusicStore.userTopTracks.length"
        class="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2 mt-10"
      >
        <MusicCard
          v-for="item in useMusicStore.userTopTracks"
          :key="item.id"
          :url="item.external_urls.spotify"
          :coverphotoUrl="item.album.images[0].url"
          :title="item.name"
          :artist="item.album.artists[0].name"
        >
        </MusicCard>
      </div>
      <p v-else class="mt-5 text-green-500">Please login first & Play Some Music Comeback later.</p>
    </section>
    <section class="">
      <h1 class="text-xl">New Releases</h1>
      <h3 class="text-md mt-2">New Releases From Spotify</h3>
      <div
        v-if="useMusicStore.newReleases.length"
        class="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2 mt-10"
      >
        <MusicCard
          v-for="item in useMusicStore.newReleases"
          :key="item.id"
          :url="item.external_urls.spotify"
          :coverphotoUrl="item.images[0].url"
          :title="item.name"
          :artist="item.artists[0].name"
        >
        </MusicCard>
      </div>
    </section>
    <section class="">
      <h1 class="text-xl">Featured Playlists</h1>
      <h3 class="text-md mt-2">Music For Every Mood</h3>
      <div
        v-if="useMusicStore.fucturedPlaylists.length"
        class="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2 mt-10"
      >
        <MusicCard
          v-for="item in useMusicStore.fucturedPlaylists"
          :key="item.id"
          :url="item.external_urls.spotify"
          :coverphotoUrl="item.images[0].url"
          :title="item.name"
          :artist="item.description"
        ></MusicCard>
      </div>
    </section>
  </main>
</template>
