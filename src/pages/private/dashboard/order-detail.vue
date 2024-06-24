<template>
  <div class="p-4">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <p class="mb-5 text-3xl text-bold">Order Details</p>
      <h1 class="mb-4 text-xl font-semibold">Order Id: {{ orderId }}</h1>
      <div class="space-y-4" v-if="order">
        <!-- Customer details -->
        <!-- <div class="flex items-center space-x-4">
          <label for="customerId" class="w-32 mb-1 text-lg">Customer Id</label>
          <input
            type="text"
            id="customerId"
            :value="order.createdBy"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div> -->
        <div class="flex items-center space-x-4">
          <label for="customerId" class="w-32 mb-1 text-lg"
            >Customer Email</label
          >
          <input
            type="text"
            id="customerId"
            :value="order.createdby.email"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div>

        <div class="flex items-center space-x-4">
          <label for="customerName" class="w-32 mb-1 text-lg"
            >Customer name</label
          >
          <input
            type="text"
            id="customerName"
            :value="order.reciverName"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div>

        <div class="flex items-center space-x-4">
          <label for="mobileNumber" class="w-32 mb-1 text-lg"
            >Mobile number</label
          >
          <input
            type="text"
            id="mobileNumber"
            :value="order.reciverMobileNo"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div>

        <div class="flex items-center space-x-4">
          <label for="date" class="w-32 mb-1 text-lg">Date</label>
          <input
            type="text"
            id="date"
            :value="new Date(order.createdAt).toLocaleString()"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div>
        <!-- 
        <div class="flex items-center space-x-4">
          <label for="totalAmount" class="w-32 mb-1 text-lg"
            >Total Amount</label
          >
          <input
            type="text"
            id="totalAmount"
            :value="order.invoiceAmount"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div> -->

        <!-- <div class="flex items-center space-x-4">
          <label for="payment" class="w-32 mb-1 text-lg">Payment</label>
          <input
            type="text"
            id="payment"
            :value="order.paymentStatus"
            class="flex w-1/2 p-2 border rounded-md"
            disabled
          />
        </div> -->

        <!-- Order status update -->
        <div class="flex items-center space-x-4">
          <label for="status" class="w-32 mb-1 text-lg">Status</label>
          <select
            id="status"
            v-model="selectedStatus"
            @change="updateStatus"
            class="flex w-1/2 p-2 border rounded-md"
          >
            <option disabled value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Accepted">shipped</option>
            <option value="Accepted">Completed</option>
          </select>
        </div>

        <!-- Billing address details -->
        <div class="mt-8">
          <h2 class="mb-4 text-xl font-bold">Billing Address</h2>
          <div class="space-y-2">
            <div class="flex items-center space-x-4">
              <label for="addressLine1" class="w-32 mb-1 text-lg"
                >Address Line 1</label
              >
              <input
                type="text"
                id="addressLine1"
                :value="order.addresses.addressLine1"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="addressLine2" class="w-32 mb-1 text-lg"
                >Address Line 2</label
              >
              <input
                type="text"
                id="addressLine2"
                :value="order.addresses.addressLine2"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="pincode" class="w-32 mb-1 text-lg">Pincode</label>
              <input
                type="text"
                id="pincode"
                :value="order.addresses.pincode"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="city" class="w-32 mb-1 text-lg">City</label>
              <input
                type="text"
                id="city"
                :value="order.addresses.city.cityName"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="state" class="w-32 mb-1 text-lg">State</label>
              <input
                type="text"
                id="state"
                :value="order.addresses.state.stateName"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="country" class="w-32 mb-1 text-lg">Country</label>
              <input
                type="text"
                id="country"
                :value="order.addresses.country.countryName"
                class="flex w-1/2 p-2 border rounded-md"
                disabled
              />
            </div>
          </div>
        </div>

        <!-- Product details -->
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
              <p>Price: {{ item.price }}</p>
              <p>Date: {{ new Date(item.createdAt).toLocaleDateString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useOrderDetailsStore } from "@/store/dashboard/orderDetails";

const route = useRoute();
const orderId = ref(route.params.orderId);
const orderDetailsStore = useOrderDetailsStore();

const order = computed(() => orderDetailsStore.order);
const loading = computed(() => orderDetailsStore.loading);

const selectedStatus = ref("");

const updateStatus = () => {
  if (selectedStatus.value) {
    orderDetailsStore.updateOrderStatus(
      orderId.value,
      selectedStatus.value,
      order.value.shippingAddress
    );
  }
};

onMounted(() => {
  orderDetailsStore.fetchOrderDetails(orderId.value).then(() => {
    selectedStatus.value = order.value.orderStatus; // Set the initial status to the current order status
  });
});
</script>
