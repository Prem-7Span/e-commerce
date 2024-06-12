// src/stores/useOrdersStore.js

import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [],
  }),
  actions: {
    async fetchOrders() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://api.8orbit.shop/api/v1/getAllOrder",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        // Map the data correctly
        this.orders = data.map((order) => ({
          id: order.id,
          mobileNumber: order.reciverMobileNo,
          address: order.shippingAddress,
          orderId: order.id,
          date: order.createdAt,
          amount: order.orderItems.reduce(
            (total, item) => total + item.price,
            0
          ), // Sum of item prices
          status: order.orderStatus, // If needed, though it will not be displayed
        }));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
  },
});
