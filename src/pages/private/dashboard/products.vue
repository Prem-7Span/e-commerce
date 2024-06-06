<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-semibold mb-4">All Products</h1>
      <table class="min-w-full bg-white rounded-t-lg">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Sr.</th>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Image</th>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Name</th>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Price</th>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Stock</th>
            <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index" class="text-center">
            <td class="px-4 py-2 border-b">{{ index + 1 }}</td>
            <td class="px-4 py-2 border-b">
              <img :src="product.image" alt="Product Image" class="h-12 w-12 object-cover mx-auto">
            </td>
            <td class="px-4 py-2 border-b">{{ product.name }}</td>
            <td class="px-4 py-2 border-b">{{ product.price }}</td>
            <td class="px-4 py-2 border-b">{{ product.stock }}</td>
            <td class="px-4 py-2 border-b">{{ product.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductTable',
    data() {
      return {
        products: [
          { image: 'https://via.placeholder.com/50', name: 'T-shirt', price: 'Rs. 1200', stock: 42, status: 'Active' },
          { image: 'https://via.placeholder.com/50', name: 'T-shirt', price: 'Rs. 1200', stock: 93, status: 'Active' },
          { image: 'https://via.placeholder.com/50', name: 'T-shirt', price: 'Rs. 1200', stock: 0, status: 'Inactive' },
        ]
      };
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 900px;
  }
  </style>
  