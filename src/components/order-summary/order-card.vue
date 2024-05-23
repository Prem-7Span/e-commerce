<template>
  <div class="vl text-primary-300">
    <div class="flex items-center px-4 mt-6 bg-white rounded-l">
      <h1 class="text-3xl text-primary-300 text-semibold">Order Summary</h1>
      <!-- <span class="mt-5 text-gray-500">({{ itemCount }} items)</span> -->
    </div>
    <div v-if="loading" class="flex justify-center p-4">
      <p>Loading...</p>
    </div>
    <div v-if="error" class="flex justify-center p-4 text-red-500">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Total MRP</p>
        <p class="text-base font-medium text-gray-900">₹{{ data.totalMrp }}</p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Discount</p>
        <p class="text-base font-medium text-green-500">₹{{ data.discount }}</p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Platform Fee</p>
        <p class="text-base font-medium text-green-500">
          ₹{{ data.totalPlatformCharges }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4 pb-4 border-b border-gray-200">
        <p class="text-base text-gray-700">Shipping Fee</p>
        <p class="text-base font-medium text-green-500">
          ₹{{ data.shippingCharges }}
        </p>
      </div>
      <div class="flex justify-between px-4 py-4">
        <p class="text-base text-gray-700">Total Amount</p>
        <p class="text-base font-medium text-green-500">₹{{ data.total }}</p>
      </div>
      <div class="mx-5 mb-8">
        <button
          class="w-full p-2 text-center text-white rounded-md bg-primary-300"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useOrderSummaryStore } from "@/store/order-summary";

const orderSummaryStore = useOrderSummaryStore();

onMounted(() => {
  orderSummaryStore.fetchOrderSummary();
});

const data = computed(() => orderSummaryStore);
</script>
