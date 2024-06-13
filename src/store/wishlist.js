import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "https://api.8orbit.shop/api";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWishlist(router) {
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

          // Check if there are any products with isDefault = true
          const defaultProduct = this.wishlist.find(
            (product) => product.isDefault === true
          );
          if (defaultProduct) {
            console.log("Default product found:", defaultProduct);
            // You can also set this.defaultProduct if you want to store it separately
            this.defaultProduct = defaultProduct;
          } else {
            console.log("No default product found");
          }
        } else {
          this.error = "Failed to fetch wishlist";
          console.error("Failed to fetch wishlist");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching wishlist:", error);
        if (error.message === "No authentication token found" && router) {
          router.push("/sign-in"); // Redirect to sign-in page
        }
      } finally {
        this.loading = false;
      }
    },

    async addToWishlist(product, router) {
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
        this.error = error.response
          ? error.response.data.message
          : error.message;
        console.error("Error adding product to wishlist:", error);
        if (error.message === "No authentication token found" && router) {
          router.push("/sign-in"); // Redirect to sign-in page
        }
      }
    },
    async removeFromWishlist(productId, router) {
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
        if (error.message === "No authentication token found" && router) {
          router.push("/sign-in"); // Redirect to sign-in page
        }
      }
    },
    clearWishlist() {
      this.wishlist = [];
    },
  },
  getters: {
    getWishlist(state) {
      return state.wishlist;
    },
    isLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    },
    wishlistCount(state) {
      return state.wishlist.length;
    },
  },
  persist: true,
});
