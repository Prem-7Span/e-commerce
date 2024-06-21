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
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Category</th>
          <th class="px-4 py-2 border-b-2 border-gray-300 bg-gray-800 text-white">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index" class="text-center">
          <td class="px-4 py-2 border-b">{{ index + 1 }}</td>
          <td class="px-4 py-2 border-b">
            <img :src="product.images[0] ? product.images[0].imageUrl : 'https://via.placeholder.com/50'" alt="Product Image" class="h-12 w-12 object-cover mx-auto">
          </td>
          <td class="px-4 py-2 border-b">{{ product.name }}</td>
          <td class="px-4 py-2 border-b">{{ product.productVariants[0].price }}</td>
          <td class="px-4 py-2 border-b">{{ product.productVariants[0].stock }}</td>
          <td class="px-4 py-2 border-b">{{ product.isActive ? 'Active' : 'Inactive' }}</td>
          <td class="px-4 py-2 border-b">{{ product.categories.categoryName }}</td>
          <td class="px-4 py-2 border-b">
            <!-- <button @click="deleteProduct(product)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Delete</button> -->
            <div class="flex  gap-4">
        <button @click="deleteProduct(product)">
          <img src="/address/Vector.svg" alt="delete" />
        </button>
        <button @click="editData(product)">
          <img src="/address/EditVector.svg" alt="edit" />
        </button>
      </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router'
const router = useRouter()

export default {
  name: 'ProductTable',
  data() {
    return {
      products: [],
      token: localStorage.getItem("token") // Corrected the syntax error
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('https://api.8orbit.shop/api/v1/product')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the products!', error);
        });
    },
    editData (product) {
      const router = useRouter(); 
      this.$router.push({ name: 'addprodcts' })
    },

    deleteProduct(product) {
      if (confirm(`Are you sure you want to delete the product: ${product.name}?`)) {
        axios.delete(`https://api.8orbit.shop/api/v1/product/${product.slug}`, {
          headers: {
            'Authorization': `Bearer ${this.token}` // Add token in headers
          }
        })
        .then(() => {
          this.products = this.products.filter(p => p !== product);
        })
        .catch(error => {
          console.error('There was an error deleting the product!', error);
        });
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
