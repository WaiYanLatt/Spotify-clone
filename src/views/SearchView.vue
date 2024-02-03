<script>
import CatagoriesCard from "@/components/CatagoriesCard.vue";
import useCatgoriesStore from "@/stores/CatgoriesStore.js";
import usetokenStore from "@/stores/tokenStore.js";
export default {
  components: {
    CatagoriesCard,
  },
  data() {
    return {
      useCatgoriesStore: useCatgoriesStore(),
      usetokenStore: usetokenStore(),
    };
  },
  async mounted() {
    const token = this.usetokenStore.token;
    if (token) {
      const items = await this.useCatgoriesStore.getCatagories(token);
      console.log(items);
      if (items) {
        this.useCatgoriesStore.setItems(items);
      }
    }
  },
};
</script>

<template>
  <main class="*:pb-10 mb-20">
    <div class="">
      <h1 class="text-xl font-bold">Broswe All</h1>
    </div>
    <div v-if="useCatgoriesStore.items.length" class="grid lg:grid-cols-5 grid-cols-2  gap-2 lg;gap-4">
      <CatagoriesCard
        v-for="item in useCatgoriesStore.items"
        :key="item.id"
        :title="item.name"
        :coverphotoUrl="item.icons[0].url"
      ></CatagoriesCard>
    </div>
  </main>
</template>
