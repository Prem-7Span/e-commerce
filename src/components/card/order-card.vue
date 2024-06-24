<template>
  <div class="vl text-primary-300">
    <div class="flex items-center px-4 mt-6 bg-white rounded-l">
      <h1 class="text-3xl text-primary-300 text-semibold">Order Summary</h1>
    </div>
    <div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Total MRP</p>
        <p class="text-base font-medium text-gray-900">
          ₹{{ orderSummaryStore.totalMrp }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Discount</p>
        <p class="text-base font-medium text-red-500">
          - ₹{{ orderSummaryStore.discount }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Platform Fee(4%)</p>
        <p class="text-base font-medium text-green-500">
          + ₹{{ orderSummaryStore.totalPlatformCharges }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4 pb-4 border-b border-gray-200">
        <p class="text-base text-gray-700">Shipping Fee</p>
        <p class="text-base font-medium text-green-500">
          + ₹{{ orderSummaryStore.shippingCharges }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Total Amount</p>
        <p class="text-base font-medium text-green-500">
          ₹{{ orderSummaryStore.total }}
        </p>
      </div>
      <div class="mx-5 mb-8">
        <button
          v-if="showNextButton"
          @click="handleNext"
          :class="{ 'opacity-50 cursor-not-allowed': isNextButtonDisabled }"
          :disabled="isNextButtonDisabled"
          class="w-full p-2 text-center text-white rounded-md bg-primary-300"
        >
          Next
        </button>
        <button
          v-else
          @click="placeOrder"
          class="w-full p-2 text-center text-white rounded-md bg-primary-300"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, defineProps, defineEmits } from "vue";
import { useToast } from "vue-toastification";
import { useOrderSummaryStore } from "@/store/order-summary";
import axios from "axios";

const toast = useToast();

const props = defineProps({
  showNextButton: {
    type: Boolean,
    default: false,
  },
  selectedAddressId: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["next", "placeOrderEvent"]);

const orderSummaryStore = useOrderSummaryStore();

onMounted(() => {
  orderSummaryStore.fetchOrderSummary();
});

const data = computed(() => orderSummaryStore);

const isNextButtonDisabled = computed(() => orderSummaryStore.total === 0);

const handleNext = () => {
  emit("next");
};

const placeOrder = async () => {
  if (!props.selectedAddressId) {
    toast.error("Please select the address");
    console.error("No address selected");
    return;
  }
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    const orderResponse = await axios.post(
      "https://api.8orbit.shop/api/v1/order",
      {
        shippingAddressId: props.selectedAddressId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const orderId = orderResponse.data.orderId;
    if (!orderId) {
      console.error("No orderId found in order response");
      return;
    }

    const paymentResponse = await axios.post(
      `https://api.8orbit.shop/api/v1/payment/${orderId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const paymentUrl = paymentResponse.data;
    if (paymentUrl) {
      window.open(paymentUrl);
    } else {
      console.error("No URL found in payment response");
    }

    emit("placeOrderEvent", paymentResponse.data);
  } catch (error) {
    console.error("Error placing order or initiating payment:", error);
  }
};
</script>

<style scoped>
.opacity-50 {
  opacity: 0.5;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
</style>
