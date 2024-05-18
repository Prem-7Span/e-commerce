// import { defineStore } from "pinia";
// import axios from "axios";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     cartItems: [],
//     loading: false,
//     error: null,
//   }),
//   actions: {
//     async fetchCart() {
//       this.loading = true;
//       this.error = null;
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         this.error = "No authentication token found";
//         this.loading = false;
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "https://api.8orbit.shop/api/v1/cart",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         this.cartItems = response.data.items;
//       } catch (error) {
//         this.error = "Failed to fetch cart data";
//       } finally {
//         this.loading = false;
//       }
//     },
//     async addToCart(productVariantId, quantity) {
//       const token = localStorage.getItem("authToken");
//       if (!token) throw new Error("No authentication token found");

//       try {
//         const response = await axios.post(
//           "https://api.8orbit.shop/api/v1/cart",
//           {
//             productVariantId,
//             quantity,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         this.cartItems.push(response.data);
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     },
//   },
// });
