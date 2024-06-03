import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "https://api.8orbit.shop/api";

export const useOrderSummaryStore = defineStore("orderSummary", {
  state: () => ({
    totalMrp: 0,
    discount: 0,
    totalPlatformCharges: 0,
    shippingCharges: 0,
    total: 0,
    itemCount: 0, // Assuming you have itemCount in your actual response
    loading: false,
    error: null,
  }),
  actions: {
    // Fetch order summary from API
    async fetchOrderSummary() {
      this.loading = true;
      this.error = null;
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.get(`${baseURL}/v1/orderSummary`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const data = response.data;
          this.totalMrp = data.TotalMrp;
          this.discount = data.Discount;
          this.totalPlatformCharges = data.TotalPlatformCharges;
          this.shippingCharges = data.shippingCharges;
          this.total = data.Total;
          this.itemCount = data.itemCount; // Adjust this if you have itemCount in the actual response
        } else {
          this.error = "Failed to fetch order summary";
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    calculateOrderSummary(cartItems) {
      let totalMrp = 0;
      let discount = 0;
      let totalPlatformCharges = 0;
      let shippingCharges = 0;
      let total = 0;

      cartItems.forEach((item) => {
        totalMrp += item.quantity * item.productVarient.regularPrice;
        discount +=
          (item.productVarient.regularPrice - item.productVarient.price) *
          item.quantity;
        total += item.quantity * item.productVarient.price;
      });

      // Example calculations
      totalPlatformCharges = total * 0.1; // Assume 10% platform charges
      shippingCharges = total > 1000 ? 0 : 50; // Free shipping for orders above 1000

      this.totalMrp = totalMrp;
      this.discount = discount;
      this.totalPlatformCharges = totalPlatformCharges;
      this.shippingCharges = shippingCharges;
      this.total = total + totalPlatformCharges + shippingCharges;
    },
  },
});
