<template>
  <div>
    <h2 class="mt-5 text-xl font-semibold">Analysis</h2>
    <div class="overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2">Sr.</th>
            <th class="px-4 py-2">Mobile number</th>
            <th class="px-4 py-2">Order Id</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Amount</th>
            <th class="px-4 py-2">Status</th>
            <!-- Removed Status column -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="order.id">
            <td class="px-4 py-2 border">{{ index + 1 }}.</td>
            <td class="px-4 py-2 border">{{ order.mobileNumber }}</td>

            <td class="px-4 py-2 border">{{ order.orderId }}</td>
            <td class="px-4 py-2 border">
              {{ new Date(order.date).toLocaleDateString() }}
            </td>
            <td class="px-4 py-2 border">{{ order.amount }}</td>
            <td class="px-4 py-2 border">{{ order.orderStatus }}</td>
            <!-- Removed Status data -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useOrdersStore } from "@/store/dashboard/datatable.js";

export default {
  setup() {
    const ordersStore = useOrdersStore();
    const orders = ref([]);

    onMounted(async () => {
      await ordersStore.fetchOrders();
      orders.value = ordersStore.orders;
    });

    return {
      orders,
    };
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
