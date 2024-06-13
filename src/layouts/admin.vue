<template>
  <div class="layout">
    <!-- <AdminNavbar class="navbar" /> -->
    <div class="main-content">
      <SideBar v-if="showSidebar" class="sidebar" />
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script>
// import AdminNavbar from "@/components/global/admin-navbar.vue";
import SideBar from "@/components/global/side-bar.vue";

export default {
  name: "AdminLayout",
  components: {
    // AdminNavbar,
    SideBar,
  },
  computed: {
    showSidebar() {
      return !["/admin/sign-in", "/admin/admin-verification-otp"].includes(
        this.$route.path
      );
    },
  },
  watch: {
    $route(to, from) {
      // Force a re-render when the route changes
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  flex: 0 0 auto;
}

.main-content {
  display: flex;
  flex: 1 0 auto;
}

.sidebar {
  flex: 0 0 215px;
  height: 100vh; /* Adjust the width as needed */
}

.router-view {
  flex: 1;
  overflow-y: auto;
}
</style>
