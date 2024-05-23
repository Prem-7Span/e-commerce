import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "https://api.8orbit.shop/api"; // Replace with your actual base URL

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWishlist() {
      this.loading = true;
      this.error = null;
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.get(`${baseURL}/v1/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          this.wishlist = response.data;
        } else {
          this.error = "Failed to fetch wishlist";
          console.error("Failed to fetch wishlist");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching wishlist:", error);
      } finally {
        this.loading = false;
      }
    },
    async addToWishlist(product) {
      this.error = null;
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.post(
          `${baseURL}/v1/wishlist`,
          { productId: product.id },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 201) {
          this.wishlist.push(product);
        } else {
          this.error = "Failed to add product to wishlist";
          console.error("Failed to add product to wishlist");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error adding product to wishlist:", error);
      }
    },
    async removeFromWishlist(productId) {
      this.error = null;
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.delete(
          `${baseURL}/v1/wishlist/${productId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          this.wishlist = this.wishlist.filter(
            (product) => product.id !== productId
          );
        } else {
          this.error = "Failed to remove product from wishlist";
          console.error("Failed to remove product from wishlist");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error removing product from wishlist:", error);
      }
    },
  },
  getters: {
    getWishlist(state) {
      return state.wishlist;
    },
    isLoading() {
      return this.loading;
    },
    getError() {
      return this.error;
    },
  },
  persist: true,
});
