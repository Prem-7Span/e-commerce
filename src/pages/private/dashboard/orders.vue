<template>
    <div class="container mx-auto  p-4">
      <div class="flex justify-between">
        <h1 class="text-2xl font-semibold mb-4">All Products</h1>
        <router-link :to="{name : 'addprodcts'}">
        <button type="submit" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Add Variant </button>
        </router-link>
      </div>


      <table class=" bg-white mt-2 rounded-t-lg">
        <thead>
          <tr>
            <th class="px-8 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Sr.</th>
            <th class="px-8 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">order id</th>
            <th class="px-8 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">order data</th>
            <th class="px-8 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">customer id</th>
            <th class="px-8 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Status</th>
          </tr>
        </thead>              
        <tbody>
          <tr v-for="(product, index) in orders" :key="index" class="text-center">
            <td class="px-4 py-2 border-b">{{ index + 1 }}</td>
            <td class="px-4 py-2 border-b">{{ product.orderId }}</td>
            <td class="px-4 py-2 border-b">{{ product.orderDate }}</td>
            <td class="px-4 py-2 border-b">{{ product.customerId }}</td>
            
            <td class="px-4 py-2 border-b">{{ product.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
<script>
export default {
  name: 'OrdersTable',
  data() {
    return {
      orders: [
        { sr: 1, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'Received' },
        { sr: 2, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'In process' },
        { sr: 3, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'In Process' },
        { sr: 4, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'Received' },
        { sr: 5, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'Completed' },
        { sr: 6, orderId: '019102', orderDate: '2-4-24', customerId: '0193010', status: 'Completed' },
      ],
    };
  },
};
</script>
