// import { createPinia } from "pinia";
// import axios from "axios";

// export const productStore = createPinia().defineStore("product", {
//   state: () => ({
//     productData: [],
//     selectedCategories: [],
//   }),
//   actions: {
//     async fetchProductList() {
//       try {
//         const response = await axios.get(
//           "https://ai.8orbit.shop/api/v1/product"
//         );
//         this.productData = response.data.product;
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     },
//     filterProducts(selectedCategories) {
//       if (selectedCategories.length === 0) {
//         return this.productData;
//       }
//       return this.productData.filter((product) => {
//         return selectedCategories.every((category) =>
//           product.categories.includes(category)
//         );
//       });
//     },
//     setSelectedCategories(categories) {
//       this.selectedCategories = categories;
//     },
//   },
//   getters: {
//     getProductData() {
//       return this.productData;
//     },
//     getSelectedCategories() {
//       return this.selectedCategories;
//     },
//   },
// });
