// src/stores/ordersStore.js
import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orderDetails", {
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
        this.orders = data.map((order) => ({
          orderId: order.id,
          orderDate: order.createdAt,
          customerId: order.reciverMobileNo,
          status: order.orderStatus,
          productName: order.orderItems[0]?.productName,
          color: order.orderItems[0]?.productVariants.color,
          size: order.orderItems[0]?.productVariants.size,
        }));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
  },
});
