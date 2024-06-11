<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between">
      <h1 class="text-2xl font-semibold mb-4">All Products</h1>
      <router-link :to="{ name: 'addprodcts' }">
        <button type="submit" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Add Products</button>
      </router-link>
    </div>

    <table class="min-w-full bg-white mt-2 rounded-t-lg">
      <thead>
        <tr>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Sr.</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Image</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Name</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Price</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Stock</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Status</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Edit</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Delete</th>
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
          <td class="px-4 py-2 border-b">
            <button @click="editProduct(product)" class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700">Edit</button>
          </td>
          <td class="px-4 py-2 border-b">
            <button @click="deleteProduct(product)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Delete</button>
          </td>
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
  },
  methods: {
    editProduct(product) {
      
      console.log('Editing product:', product);
    },
   deleteProduct(product) {
      if (confirm(`Are you sure you want to delete the product: ${product.name}?`)) {
        this.products = this.products.filter(p => p !== product);
    }
  }
}
};
</script>

<style>
.container {
  max-width: 900px;
}
</style>
