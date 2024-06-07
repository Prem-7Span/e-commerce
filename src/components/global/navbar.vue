<template>
  <div class="cursor-pointer">
    <div
      class="flex justify-between px-2 py-4 font-bold md:px-8 md:flex-row md:space-x-4"
    >
      <div class="flex gap-5">
        <div class="py-2 logo">
          <router-link :to="{ name: 'home' }">
            <img
              src="/default/8-orbit-logo-homepage.png"
              alt="logo"
              class="max-w-28"
            />
          </router-link>
        </div>
        <div class="flex items-center py-2 page">
          <nav class="flex-col hidden  active:underline space-x-4 space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-4">
            <router-link :to="{ name: 'products', query: { gender: 'Men' } }"
              class="text-gray-600 hover:text-gray-800 hover:underline"
              @click.prevent="filterByGender('Men')">Men</router-link>
            <router-link :to="{ name: 'products', query: { gender: 'Women' } }"
              class="text-gray-600 hover:text-gray-800 hover:underline"
              @click.prevent="filterByGender('Women')">Women</router-link>
          </nav>
        </div>
        <form class="flex items-center max-w-md mx-auto" @submit.prevent="searchProducts">
    <div class="relative">
      <div class="absolute flex items-center pointer-events-none md:inset-y-0 inset-y-1 start-0 ps-3">
        <img src="/public/home-page/Vector.svg" alt="Search Icon" />
      </div>
      <input type="search" id="default-search" v-model="searchQuery" @change="getSearchResult"
        class="hidden p-2 pl-8 mb-4 border border-gray-300 rounded-md shadow-sm cursor-pointer sm:inline md:mb-0 md:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        placeholder="Search" />
    </div>
  </form>
      </div>
      <div class="flex items-center space-x-2">
        <div class="relative">
          <router-link :to="{ name: 'wish-list' }">
            <img
              src="/default/like-navbar.svg"
              class="py-2 sm:inline"
              alt="like"
            />
          </router-link>
          <span
            v-if="wishlistItemCount > 0"
            class="absolute right-0 inline-block w-4 h-4 text-xs text-center text-white bg-red-600 rounded-full top-2"
            >{{ wishlistItemCount }}</span
          >
        </div>
        <div class="relative">
          <router-link :to="{ name: 'check-out' }">
            <img
              src="/default/cart-navbar.svg"
              class="py-2 sm:inline"
              alt="cart"
            />
          </router-link>
          <span
            v-if="cartItemCount > 0"
            class="absolute right-0 inline-block w-4 h-4 text-xs text-center text-white bg-red-600 rounded-full top-2"
            >{{ cartItemCount }}</span
          >
        </div>
        <div>
          <div v-if="userDetail">
            <div class="relative inline-block text-left">
              <div>
                <button
                  @click="toggleDropdown"
                  class="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-700"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <img
                    src="/public/default/profile-logo.svg"
                    alt="Profile"
                    class="w-5 h-6"
                  />
                </button>
              </div>
              <div v-show="dropdownOpen"
                class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div class="py-1">
                  <router-link :to="{ name: 'editProfile' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                    @click="closeDropdown">
                    Edit Profile
                  </router-link>
                  <router-link :to="{ name: 'vieworder' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                    @click="closeDropdown">
                    View Order
                  </router-link>
                  <button @click="logoutAndCloseDropdown"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" role="menuitem">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="windowLocationPathname !== '/sign-in'">
            <router-link :to="{ name: 'SignIn' }">
              <button class="px-4 py-2 text-white rounded-lg bg-primary-100">
                Sign In
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="searchResults.length > 0">
      <h2 class="mt-4 text-xl font-bold">Search Results</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          {{ result.name }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { useCartStore } from "@/store/cart.js";
import { useWishlistStore } from "@/store/wishlist.js";
import { useProductStore } from "@/store/product.js";
import { useSearchStore } from "@/store/search.js"; // Import the search store
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const userStore = useUserStore();
    const cartStore = useCartStore();
    const wishlistStore = useWishlistStore();
    const productStore = useProductStore();
    const searchStore = useSearchStore(); // Initialize the search store

    const filterByGender = async (gender) => {
      productStore.parentCategory = [gender];
      await productStore.applyFiltersAndFetch();
      window.location.href = `/products?gender=${gender}`;
    };

    if (localStorage.getItem("token")) {
      wishlistStore.fetchWishlist();
      cartStore.fetchCart();
    }

    return { userStore, cartStore, wishlistStore, filterByGender, searchStore };
  },
  data() {
    return {
      searchQuery: '',
      dropdownOpen: false,
      token: localStorage.getItem("token"),
      windowLocationPathname: window.location.pathname,
    };
  },
  computed: {
    userDetail() {
      return this.userStore.getToken;
    },
    cartItemCount() {
      return this.cartStore.cartItemCount;
    },
    wishlistItemCount() {
      return this.wishlistStore.wishlistCount;
    },
  },
  methods: {
    getSearchResult() {
      this.customDebounce(this.fetchSearch, 800);
    },
    async fetchSearch() {
      await this.searchStore.searchProducts(this.searchQuery);
      this.$router.push({ name: 'products' });
    },
    customDebounce(func, delay = 500) {
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func();
      }, delay);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    logoutAndCloseDropdown() {
      this.logout();
      this.closeDropdown();
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.userStore.setToken(null);
      this.wishlistStore.clearWishlist();
      this.cartStore.clearCart();
      this.$router.push({ name: "home" });
    },
    searchProducts() {
      this.searchStore.searchProducts();
    },
  },
};
</script>
