// src/stores/orderStore.js

import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchOrders() {
      this.loading = true;
      this.error = null;
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://api.8orbit.shop/api/v1/getOrder",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (Array.isArray(response.data)) {
          this.orders = response.data
            .map((orderData) => {
              if (!orderData.orderItems || orderData.orderItems.length === 0) {
                return null;
              }
              const orderItem = orderData.orderItems[0];
              const productVariant = orderItem.productVariants;

              return {
                id: orderData.id,
                date: orderData.createdAt,
                productImage: productVariant?.products.images[0], // Replace with the actual image URL if available in the response
                productName: orderItem.productName,
                productSize: productVariant.size,
                productQuantity: orderItem.quantity,
                productColor: productVariant.color,
                productPrice: orderItem.price,
                productRegularPrice: productVariant.regularPrice,
                productsulg : orderItem.productVariants.products.slug
              };
            })
            .filter((order) => order !== null);
        } else {
          this.orders = [];
          throw new Error("Invalid order data");
        }
      } catch (error) {
        this.error = error.message || "An error occurred while fetching orders";
      } finally {
        this.loading = false;
      }
    },
  },
});
