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
        <p class="text-base font-medium text-green-500">
          ₹{{ orderSummaryStore.discount }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Platform Fee</p>
        <p class="text-base font-medium text-green-500">
          ₹{{ orderSummaryStore.totalPlatformCharges }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4 pb-4 border-b border-gray-200">
        <p class="text-base text-gray-700">Shipping Fee</p>
        <p class="text-base font-medium text-green-500">
          ₹{{ orderSummaryStore.shippingCharges }}
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
import { useOrderSummaryStore } from "@/store/order-summary";

const props = defineProps({
  showNextButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["next", "placeOrder"]);

const orderSummaryStore = useOrderSummaryStore();

onMounted(() => {
  orderSummaryStore.fetchOrderSummary();
});

const data = computed(() => orderSummaryStore);

const handleNext = () => {
  emit("next");
};

const placeOrder = () => {
  emit("placeOrder");
};
</script>
