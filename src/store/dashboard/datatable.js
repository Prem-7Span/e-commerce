// src/stores/useOrdersStore.js

import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [],
  }),
  actions: {
    async fetchOrders(router) {
      try {
        const token = localStorage.getItem("token");

        // Check if the token is not present
        if (!token) {
          router.push({ name: "admin-sign-in" }); // Adjust the route name according to your router setup
          return;
        }

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
          orderStatus: order.orderStatus,
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
