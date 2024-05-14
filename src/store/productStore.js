import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProduct(slug) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://api.8orbit.shop/api/v1/product/${slug}`
        );
        this.product = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
