import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    productData: [],
    selectedCategories: [],
    selectedGender: [],
    selectedPrice: [],
    selectedColor: [],
    selectedSize: [],
    selectedSort: [],
  }),
  actions: {
    async fetchProductList(filters = {}) {
      try {
        const response = await axios.get("https://api.8orbit.shop/api/v1/product", {
          params: filters
        });
        this.productData = response.data.product;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async applyFiltersAndFetch() {
      try {
        const response = await axios.get('https://api.8orbit.shop/api/v1/product', {
          params: {
            categories: this.selectedCategories,
            gender: this.selectedGender,
            price: this.selectedPrice,
            color: this.selectedColor,
            size: this.selectedSize,
            sort: this.selectedSort,
          },
        });
      } catch (error) {
        console.error("Error applying filters and fetching products:", error);
      }
    },
    filterProducts() {
      const filters = {
        categories: this.selectedCategories,
        gender: this.selectedGender,
        price: this.selectedPrice,
        color: this.selectedColor,
        size: this.selectedSize,
        sort: this.selectedSort,
      };
      this.fetchProductList(filters);
    },
  },
  getters: {
    getProductData() {
      return this.productData;
    },
  },
});
