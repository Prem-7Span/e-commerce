<template>
  <div>
    <Navbar v-if="!isCheckoutPage" />
    <router-view />
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import Navbar from "@/components/global/navbar.vue";
import Footer from "@/components/global/footer.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isCheckoutPage() {
      return this.$route.path.startsWith('/checkout');
    },
    showFooter() {
      const excludedPaths = [
        '/auth'
      ];
      return !excludedPaths.some(path => this.$route.path.startsWith(path));
    }
  }
};
</script>
