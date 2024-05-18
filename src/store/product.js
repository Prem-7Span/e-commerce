
import { defineStore } from "pinia";
import axios from "axios";


export const useProductStore = defineStore("product", {
  state: () => ({
    productData: [],
    parentCategory: [],
    categoryName: [],
    minPrice: 0,
    maxPrice: 1500,
    color: [],
    size: [],
  }),
  actions: {
    async fetchProductList() {
      try {
        if (this.productData && this.productData.length > 0) {
          return this.productData;
        }
        const response = await axios.get("https://api.8orbit.shop/api/v1/product");
        this.productData = response.data.product;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async applyFiltersAndFetch() {
      try {
        const response = await axios.get('https://api.8orbit.shop/api/v1/product', {
          params: {
            categoryName: this.categoryName,
            parentCategory: this.parentCategory,
            color: this.color,
            size: this.size,
            minPrice: this.minPrice,
            maxPrice : this.maxPrice
          },
        });
        console.log({ response})
        this.productData = response.data; 
        return response.data; 
      } catch (error) {
        console.error("Error applying filters and fetching products:", error);
      }
    },
    clearFilters() {
      this.categoryName = [];
      this.parentCategory = [];
      this.color = [];
      this.size = [];
      this.minPrice = 0;
      this.maxPrice = 1500;
      this.fetchProductList();
    },
  },
  getters: {
    getProductData() {
      return this.productData; 
    },
  },
  persist: true,
});
