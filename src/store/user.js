import { defineStore } from "pinia";
import { useCartStore } from "./cart"; // Import the cart store
import { useWishlistStore } from "./wishlist"; // Import the wishlist store

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    userDetail: null,
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
    getUserDetail(state) {
      return state.userDetail;
    },
  },
  actions: {
    async setToken(token) {
      this.token = token;
      if (token) {
        await this.fetchWishlist(); // Fetch wishlist after setting the token
      }
    },
    setUserDetail(data) {
      this.userDetail = data;
    },
    async fetchWishlist() {
      const wishlistStore = useWishlistStore();
      await wishlistStore.fetchWishlist(); // Fetch the wishlist to update the count
    },
    logout() {
      this.token = null;
      this.userDetail = null;
      const cartStore = useCartStore();
      const wishlistStore = useWishlistStore();
      cartStore.clearCart(); // Clear the cart on logout
      wishlistStore.clearWishlist(); // Clear the wishlist on logout
    },
  },
  persist: true,
});
