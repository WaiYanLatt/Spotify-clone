import { defineStore } from "pinia";
const useCatgoriesStore = defineStore("catgories", {
  state: () => {
    return {
      items: [],
    };
  },

  actions: {
    //   fetch('https://api.spotify.com/v1/browse/categories/dinner/playlists/', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    async getCatagories(token) {
        const options = {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + token,
          },
        };
        const response =await fetch('https://api.spotify.com/v1/browse/categories/', options);
        const data = await response.json();
        return data.categories.items;
    },

    setItems(items) {
      this.items = items;
    },
  },
});

export default useCatgoriesStore;
