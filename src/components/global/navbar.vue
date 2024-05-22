<template>
  <div>
    <div class="flex justify-between px-2 py-4 font-bold md:px-8 md:flex-row md:space-x-4">
      <div class="flex gap-5">
        <div class="py-2 logo">
          <router-link :to="{ name: 'home' }">
            <img src="/default/logo-navbar.svg" alt="logo" />
          </router-link>
        </div>
        <div class="flex py-2 page">
          <nav class="flex-col hidden space-x-4 space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-4">
            <router-link to="/products" class="text-gray-600 hover:text-gray-800 hover:underline">
              Men
            </router-link>
            <router-link to="/products" class="text-gray-600 hover:text-gray-800 hover:underline">
              Women
            </router-link>
          </nav>
        </div>
        <form class="max-w-md mx-auto">
          <div class="relative">
            <div class="absolute md:inset-y-0  inset-y-1   flex items-center pointer-events-none start-0 ps-3">
              <img src="/public/home-page/Vector.svg" alt="Search Icon" />
            </div>
            <input type="search" id="default-search"
              class="hidden p-2 pl-8 mb-4 border border-gray-300 rounded-md shadow-sm sm:inline md:mb-0 md:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Search" />
          </div>
        </form>
      </div>
      <div class="flex items-center space-x-2">
        <img src="/default/like-navbar.svg" class="hidden py-2 sm:inline" alt="like" />
        <router-link :to="{ name: 'check-out' }">
          <img src="/default/cart-navbar.svg" class="hidden py-2 sm:inline" alt="cart" />
        </router-link>
        <div>
          <div v-if="userDetail">
            <div class="relative inline-block text-left">
              <div>
                <button @click="toggleDropdown"
                  class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700"
                  aria-haspopup="true" aria-expanded="true">
                  <img src="/home-page/profileicons.svg" alt="Profile" class="w-6 h-6" />
                </button>
              </div>
              <div v-show="dropdownOpen"
                class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div class="py-1">
                  <router-link :to="{ name: 'editprofile' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Edit Profile
                  </router-link>
                  <button @click="logout"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" role="menuitem">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <router-link :to="{ name: 'SignIn' }">
              <button class="px-4 py-2 text-white rounded-lg bg-primary-100">
                Login
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  computed: {
    userDetail() {
      return this.userStore.getToken
    }
  },
  data() {
    return {
      dropdownOpen: false,
      token: localStorage.getItem("token"),
    };
  },
  watch: {
    userDetail(nv) {
      if (nv) {
        console.log("New Value : ", nv);
      }
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.userStore.setToken(null); // Update token in store
        this.$router.push({ name: "home" });
    }

  },
};
</script>
