<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="p-4 bg-blue-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total sales</h3>
        <p class="text-4xl font-bold text-blue-600">23.5 M</p>
        <p class="text-sm">31.58% &#8593; 2034 today</p>
      </div>
      <div class="p-4 bg-green-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total orders</h3>
        <p class="text-4xl font-bold text-green-600">23.5 M</p>
        <p class="text-sm">19.5% &#8593; 2034 today</p>
      </div>
      <div class="p-4 bg-purple-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total customers</h3>
        <p class="text-4xl font-bold text-purple-600">23.5 M</p>
        <p class="text-sm">19.5% &#8593; 2034 today</p>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="mb-4 text-xl font-semibold">Analysis</h2>
      <div class="p-4 bg-gray-100 rounded-lg">
        <div class="flex justify-between mb-4">
          <span class="font-semibold">Analysis</span>
          <span>Apr</span>
        </div>
        <div class="h-48">
          <!-- Chart or graph goes here -->
        </div>
      </div>
    </div>
    <div>
      <h2 class="mb-4 text-xl font-semibold">Analysis</h2>
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-4 py-2">Sr.</th>
              <th class="px-4 py-2">Customer Id</th>
              <th class="px-4 py-2">Mobile number</th>
              <th class="px-4 py-2">Address</th>
              <th class="px-4 py-2">Order Id</th>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Amount</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td class="px-4 py-2 border">{{ index + 1 }}.</td>
              <td class="px-4 py-2 border">{{ order.customerId }}</td>
              <td class="px-4 py-2 border">{{ order.mobileNumber }}</td>
              <td class="px-4 py-2 border">{{ order.address }}</td>
              <td class="px-4 py-2 border">{{ order.orderId }}</td>
              <td class="px-4 py-2 border">{{ order.date }}</td>
              <td class="px-4 py-2 border">{{ order.amount }}</td>
              <td class="px-4 py-2 border">{{ order.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const orders = ref([
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
]);
</script>
