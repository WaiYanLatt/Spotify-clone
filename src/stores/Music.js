import { defineStore } from "pinia";
const useMusicStore = defineStore("Music", {
  state: () => {
    return {
      userTopTracks: [],
      newReleases: [],
      fucturedPlaylists: [],
    };
  },

  actions: {
    async getuserTopTracks(token) {
      const options = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
      
     const response = await fetch('https://api.spotify.com/v1/me/top/tracks/', options)
     const data = await response.json();
    return data.items;
    
    },

    setuserTopTracks(userTopTracks) {
      this.userTopTracks = userTopTracks;
    },

    async getnewReleases(token) {
      const options = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
      
      const respone = await fetch('https://api.spotify.com/v1/browse/new-releases/', options)
      const data = await respone.json();
      return data.albums.items;
        
    },

    setnewReleases(newReleases) {
      this.newReleases = newReleases;
    },

    async getfucturedPlaylists(token) {
      const options = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
      
      const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists/', options)
      const data = await response.json();
      return data.playlists.items;
    },

    setfucturedPlaylists(fucturedPlaylists) {
      this.fucturedPlaylists = fucturedPlaylists;
    },
  },
});

export default useMusicStore;
