<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from "@/components/global/navbar.vue";
import Footer from "@/components/global/footer.vue";

export default {
  name: "navbar",
  components: {
    Navbar,
    Footer,
  },
};
</script>
