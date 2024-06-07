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
          
          <form
            class="flex items-center max-w-md mx-auto"
            @submit.prevent="searchProducts"
          >
            <div class="relative">
              <div
                class="absolute flex items-center pointer-events-none md:inset-y-0 inset-y-1 start-0 ps-3"
              >
                <img src="/public/home-page/Vector.svg" alt="Search Icon" />
              </div>
              <input
                type="search"
                id="default-search"
                v-model="searchQuery"
                class="hidden p-2 pl-8 mb-4 border border-gray-300 rounded-md shadow-sm cursor-pointer sm:inline md:mb-0 md:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div class="flex items-center space-x-2">
      
          <div class="relative">
            <router-link :to="{ name: 'check-out' }">
              <img
                src="/admin/navbar notification.svg"
                class="py-2   sm:inline"
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
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <img
                      src="/home-page/profileicons.svg"
                      alt="Profile"
                      class="h-7"
                    />
                  </button>
                </div>
                <div
                  v-show="dropdownOpen"
                  class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div class="py-1">
                    <router-link
                      :to="{ name: 'editProfile' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Edit Profile
                    </router-link>
                    <router-link
                      :to="{ name: 'vieworder' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      View order
                    </router-link>
                    <button
                      @click="logout"
                      class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
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
  
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/store/user";
  import { useCartStore } from "@/store/cart.js";
  import { useWishlistStore } from "@/store/wishlist.js"; // Import the wishlist store
  import { useProductStore } from "@/store/product.js";
  import axios from "axios";
  import { ref } from "vue";
  
  export default {
    setup() {
      const userStore = useUserStore();
      const cartStore = useCartStore();
      const wishlistStore = useWishlistStore(); // Use the wishlist store
      const productStore = useProductStore();
  
      const filterByGender = async (gender) => {
        productStore.parentCategory = [gender];
        await productStore.applyFiltersAndFetch();
        // Navigate to the products page with the appropriate query parameter after fetching data
        window.location.href = `/products?gender=${gender}`;
      };
  
      if (localStorage.getItem("token")) {
        wishlistStore.fetchWishlist(); // Fetch wishlist on login
        cartStore.fetchCart(); // Fetch cart on login
      }
  
      return { userStore, cartStore, wishlistStore, filterByGender };
    },
    data() {
      return {
        dropdownOpen: false,
        token: localStorage.getItem("token"),
        searchQuery: "",
        searchResults: [],
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
        return this.wishlistStore.wishlistCount; // Access the wishlist item count from the store
      },
    },
    watch: {
      userDetail(nv) {
        if (nv) {
          // console.log("New Value : ", nv);
        }
      },
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        // console.log("dropdownOpen", this.dropdownOpen);
      },
      logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.userStore.setToken(null); // Update token in store
        this.wishlistStore.clearWishlist(); // Clear the wishlist on logout
        this.cartStore.clearCart();
        this.$router.push({ name: "home" });
      },
      async searchProducts() {
        if (this.searchQuery.trim() !== "") {
          try {
            const response = await axios.get(
              `https://api.8orbit.shop/api/v1/product?search=${this.searchQuery}`
            );
            this.searchResults = response.data;
          } catch (error) {
            console.error("Error fetching search results:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  