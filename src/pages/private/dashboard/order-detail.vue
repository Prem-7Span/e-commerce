<!-- src/components/OrderDetails.vue -->
<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Order Id: {{ orderId }}</h1>
    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <label for="customerId" class="w-32 mb-1 text-lg">Customer Id</label>
        <input
          type="text"
          id="customerId"
          v-model="order.createdBy"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="customerName" class="w-32 mb-1 text-lg"
          >Customer name</label
        >
        <input
          type="text"
          id="customerName"
          v-model="order.reciverName"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="emailId" class="w-32 mb-1 text-lg">Email Id</label>
        <input
          type="email"
          id="emailId"
          v-model="order.createdby.email"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="mobileNumber" class="w-32 mb-1 text-lg"
          >Mobile number</label
        >
        <input
          type="text"
          id="mobileNumber"
          v-model="order.reciverMobileNo"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="date" class="w-32 mb-1 text-lg">Date</label>
        <input
          type="text"
          id="date"
          v-model="order.createdAt"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="totalAmount" class="w-32 mb-1 text-lg">Total Amount</label>
        <input
          type="text"
          id="totalAmount"
          v-model="order.invoiceAmount"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="payment" class="w-32 mb-1 text-sm">Payment</label>
        <input
          type="text"
          id="payment"
          v-model="order.paymentStatus"
          class="flex w-1/2 p-2 border rounded-md"
          readonly
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="status" class="w-32 mb-1 text-lg">Status</label>
        <select
          id="status"
          v-model="order.orderStatus"
          class="flex w-1/2 p-2 border rounded-md"
          disabled
        >
          <option value="panding">Pending</option>
          <option value="In Process">In Process</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div class="mt-8">
        <h2 class="mb-4 text-xl font-bold">Product Details</h2>
        <div
          v-for="item in order.orderItems"
          :key="item.id"
          class="flex items-center mb-4 space-x-4"
        >
          <img
            v-if="item.productVariants.products.images.length > 0"
            :src="item.productVariants.products.images[0].imageUrl"
            alt="Product Image"
            class="object-cover w-16 h-16 rounded-md"
          />
          <div class="flex-1">
            <p class="text-lg font-semibold">{{ item.productName }}</p>
            <p>Size: {{ item.productVariants.size }}</p>
            <p>Color: {{ item.productVariants.color }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <p>Date: {{ new Date(item.createdAt).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderDetailsStore } from "@/store/dashboard/orderDetails";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

export default {
  setup() {
    const route = useRoute();
    const orderId = route.params.orderId;
    const orderDetailsStore = useOrderDetailsStore();

    onMounted(() => {
      orderDetailsStore.fetchOrderDetails(orderId);
    });

    return {
      orderId,
      order: orderDetailsStore.order,
    };
  },
};
</script>
