import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

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
        const response = await axios.get(
          "https://api.8orbit.shop/api/v1/product",
          {
            params: filters,
          }
        );
        this.productData = response.data.product;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async applyFiltersAndFetch() {
      try {
        const filters = {
          categories: this.selectedCategories,
          gender: this.selectedGender,
          price: this.selectedPrice,
          color: this.selectedColor,
          size: this.selectedSize,
          sort: this.selectedSort,
        };
        const response = await axios.get(
          "https://api.8orbit.shop/api/v1/product",
          {
            params: filters,
          }
        );
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

// In case you want to use this store in a setup function, you can provide a function to create a reactive reference
export function useProductStoreComposition() {
  const productStore = useProductStore();

  // Expose reactive references
  const productData = ref(productStore.productData);
  const selectedCategories = ref(productStore.selectedCategories);
  const selectedGender = ref(productStore.selectedGender);
  const selectedPrice = ref(productStore.selectedPrice);
  const selectedColor = ref(productStore.selectedColor);
  const selectedSize = ref(productStore.selectedSize);
  const selectedSort = ref(productStore.selectedSort);

  return {
    productData,
    selectedCategories,
    selectedGender,
    selectedPrice,
    selectedColor,
    selectedSize,
    selectedSort,
    fetchProductList: productStore.fetchProductList,
    applyFiltersAndFetch: productStore.applyFiltersAndFetch,
    filterProducts: productStore.filterProducts,
  };
}
