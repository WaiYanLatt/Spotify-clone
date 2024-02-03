<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import usetokenStore from "./stores/tokenStore";

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  data() {
     return {
        usetokenStore : usetokenStore(),
        show : false,
     }
  },
  mounted() {
    const extestingToken = sessionStorage.getItem('token');
    if(extestingToken){
      this.usetokenStore.setToken(extestingToken)
      return
    }
    const token = this.usetokenStore.extarctTokenFromUrl();

    if(token) {
      //  console.log('fresh token' , token);
       this.usetokenStore.setToken(token)
       
       sessionStorage.setItem('token' , token)
    }
  },
  methods : {
     showSidebar(){
        this.show = true;
     },
     unShowbar(){
      this.show = false;
     }
  }
};
</script>

<template>
  <div class="flex">
    <Sidebar :show="show" class="pb-36 overflow-auto" @unShow-bar="unShowbar"/>
    <div class="container-fluid lg:ml-[350px] ml-0  w-full bg-[#242424] min-h-screen mt-2">
      <Navbar   @show-sidebar="showSidebar" />
      <router-view class="lg:ml-10 ml-0 p-5 lg:p-0 mt-28 lg:w-[950px] w-full"></router-view>
    </div>
  </div>
  <Footer class="w-full" />
</template>
