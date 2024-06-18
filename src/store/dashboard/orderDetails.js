// stores/orderDetails.js
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useOrderDetailsStore = defineStore("orderss", () => {
  const order = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchOrderDetails = async (orderId) => {
    loading.value = true;
    error.value = null;

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      router.push({ name: "admin-sign-in" }); // Adjust the route name according to your router setup
      return;
    }

    try {
      const response = await axios.get(
        `https://api.8orbit.shop/api/v1/orderById/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      order.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const updateOrderStatus = async (orderId, status, shippingAddressId) => {
    loading.value = true;
    error.value = null;

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `https://api.8orbit.shop/api/v1/order/${orderId}`,
        {
          orderStatus: status,
          shippingAddressId: shippingAddressId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      // Fetch the updated order details
      await fetchOrderDetails(orderId);
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    order,
    loading,
    error,
    fetchOrderDetails,
    updateOrderStatus,
  };
});
