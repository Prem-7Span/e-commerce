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
    size: [],
    discount:[],
    wishlist: [], // Add wishlist state
  }),
  actions: {
    async fetchProductList(token) {
      console.log("==>token", token);
      try {
        // if (this.productData.length > 0) {
        //   return this.productData;
        // }

        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(`${baseURL}/v1/product`, { headers });
        console.log("==>response", response);

        this.productData = response.data;
        console.log("==>ProductData", this.productData);
        return this.productData;
      } catch (error) {
        console.log("==>Error", error);
        console.error("Error fetching products:", error);
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
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
            discount:this.discount
          },
        });
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
      this.discount = [];
      this.fetchProductList();
    },
    async addToWishlist(product) {
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
          console.error("Failed to add product to wishlist");
        }
      } catch (error) {
        console.error("Error adding product to wishlist:", error);
      }
    },
  },
  getters: {
    getProductData() {
      return this.productData;
    },
  },
  persist: true,
});
