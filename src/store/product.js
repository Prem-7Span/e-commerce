import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "https://api.8orbit.shop/api"; // Replace with your actual base URL

export const useProductStore = defineStore("product", {
  state: () => ({
    productData: [],
    parentCategory: [],
    categoryName: [],
    minPrice: 0,
    maxPrice: 1500,
    color: [],
    discount : [],
    size: [],
    wishlist: [], // Add wishlist state
  }),
  actions: {
    async fetchProductList(token) {
      if (this.productData.length > 0) {
        return this.productData;
      }

      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const response = await axios.get(`${baseURL}/v1/product`, { headers });
        this.productData = response.data;
        return this.productData;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },

    async applyFiltersAndFetch() {
      try {
        const response = await axios.get(`${baseURL}/v1/product`, {
          params: {
            categoryName: this.categoryName,
            parentCategory: this.parentCategory,
            color: this.color,
            size: this.size,
            discount: this.discount,
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
          },
        });
        this.productData = response.data;
        return response.data;
      } catch (error) {
        console.error("Error applying filters and fetching products:", error);
        throw error;
      }
    },

    clearFilters() {
      this.categoryName = [];
      this.parentCategory = [];
      this.color = [];
      this.size = [];
      this.discount = [];
      this.minPrice = 0;
      this.maxPrice = 1500;
      this.fetchProductList();
    },

    async addToWishlist(product) {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No authentication token found");
        throw new Error("No authentication token found");
      }

      try {
        const response = await axios.post(
          `${baseURL}/v1/wishlist`,
          { productId: product.id },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 201) {
          this.wishlist.push(product);
        } else {
          console.error("Failed to add product to wishlist");
        }
      } catch (error) {
        console.error("Error adding product to wishlist:", error);
        throw error;
      }
    },
  },
  getters: {
    getProductData: (state) => state.productData,
  },
  persist: true,
});
