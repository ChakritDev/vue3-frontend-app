<template>
    <NavBar />

    <div id="layoutSidenav">
      <SideNav />
      <div id="layoutSidenav_content">
        <main>
          <router-view></router-view>
        </main>
        <Footer />
      </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    name: "DashBoard",
    components:{
        NavBar,
        SideNav,
        Footer,
    },
    setup () {
        return {}
    },
})
</script>

<style scoped>

</style>