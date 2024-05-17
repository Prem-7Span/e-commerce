import { defineStore } from "pinia";

export const useProductDetailsStore = defineStore("product-details", {
  //State
  state: () => ({
    productDetails: null,
    error: null,
    isLoading: false,
  }),
  //Actions
  actions: {
    async fetchProductDetails(slug) {
      try {
        (this.isLoading = true), console.log("Slug:", slug); // Log the slug object
        const response = await fetch(
          `https://api.8orbit.shop/api/v1/product/${slug}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        this.productDetails = data.product;
        this.error = null;
      } catch (error) {
        console.error("Error fetching product details:", error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
