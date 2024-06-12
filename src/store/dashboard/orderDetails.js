// stores/orderDetails.js
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useOrderDetailsStore = defineStore("orderDetails", () => {
  const order = ref({});
  const loading = ref(false);
  const error = ref(null);

  const fetchOrderDetails = async (orderId) => {
    loading.value = true;
    error.value = null;

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

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

  return {
    order,
    loading,
    error,
    fetchOrderDetails,
  };
});
