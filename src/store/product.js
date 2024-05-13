import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({

  }),
  actions: {
    async fetchProductList() {
      try {
        const response = await axios.get("https://api.8orbit.shop/api/v1/product");
        this.productData = response.data.product;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
  getters: {
    getProductData() {
      return this.productData;
    },
  },
});
