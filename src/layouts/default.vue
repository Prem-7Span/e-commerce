<template>
  <div>
    <Navbar v-if="!$route.path.startsWith('/checkout')" />

    <router-view />

    <Footer v-if="!$route.path.startsWith('/checkout')" />
  </div>
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
