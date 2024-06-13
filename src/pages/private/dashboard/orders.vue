<template>
  <div class="container p-4 mx-auto">
    <div v-if="isLoading" class="py-4 text-center">
      <p>Loading...</p>
    </div>
    <table v-else class="mt-2 bg-white rounded-t-lg">
      <thead>
        <tr>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Sr.
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Order Id
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Order Date
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Customer Id
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Status
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Product Name
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Color
          </th>
          <th
            class="px-8 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Size
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(order, index) in orders"
          :key="order.orderId"
          class="text-center"
        >
          <td class="px-4 py-2 border-b">{{ index + 1 }}</td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.orderId }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ new Date(order.orderDate).toLocaleDateString() }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.customerId }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.status }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.productName }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.color }}
            </router-link>
          </td>
          <td class="px-4 py-2 border-b">
            <router-link
              :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
            >
              {{ order.size }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useOrdersStore } from "@/store/dashboard/getAllOrders.js";

export default {
  name: "OrdersTable",
  setup() {
    const ordersStore = useOrdersStore();
    const orders = ref([]);
    const isLoading = ref(true);

    onMounted(async () => {
      isLoading.value = true;
      await ordersStore.fetchOrders();
      orders.value = ordersStore.orders;
      isLoading.value = false;
    });

    return {
      orders,
      isLoading,
    };
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
