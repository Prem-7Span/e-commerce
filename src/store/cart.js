import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

const baseURL = "https://api.8orbit.shop/api";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCart() {
      this.loading = true;
      this.error = null;
      const router = useRouter();
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.get(`${baseURL}/v1/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          this.cartItems = response.data;
        } else {
          this.error = "Failed to fetch cart";
        }
      } catch (error) {
        this.error = error.message;
        if (error.message === "No authentication token found") {
          router.push("auth/sign-in"); // Redirect to sign-in page
        }
      } finally {
        this.loading = false;
      }
    },
    async updateCartItemQuantity(productVariantId, quantity, checkoutId) {
      this.loading = true;
      this.error = null;
      const router = useRouter();
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.put(
          `${baseURL}/v1/cart/${checkoutId}`,
          {
            productVariantId,
            quantity,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          const updatedItemIndex = this.cartItems.findIndex(
            (item) => item.productVariantId === productVariantId
          );
          if (updatedItemIndex !== -1) {
            this.cartItems[updatedItemIndex].quantity = quantity;
          }
        } else {
          this.error = "Failed to update cart item quantity";
        }
      } catch (error) {
        this.error = error.message;
        if (error.message === "No authentication token found") {
          router.push("auth/sign-in"); // Redirect to sign-in page
        }
      } finally {
        this.loading = false;
      }
    },
    async removeCartItem(checkoutId) {
      this.loading = true;
      this.error = null;
      const router = useRouter();
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.delete(
          `${baseURL}/v1/cart/${checkoutId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          this.cartItems = this.cartItems.filter(
            (item) => item.id !== checkoutId
          );
        } else {
          this.error = "Failed to delete cart item";
        }
      } catch (error) {
        this.error = error.message;
        if (error.message === "No authentication token found") {
          router.push("auth/sign-in"); // Redirect to sign-in page
        }
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    cartItemCount: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
