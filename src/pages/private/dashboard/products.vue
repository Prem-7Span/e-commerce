<template>
  <div class="container p-4 mx-auto">
    <div class="flex justify-between">
      <h1 class="mb-4 text-2xl font-semibold">All Products</h1>
      <router-link :to="{ name: 'addprodcts' }">
        <button
          type="submit"
          class="px-4 py-2 text-white rounded-md bg-primary-300 hover:bg-gray-800"
        >
          Add Products
        </button>
      </router-link>
    </div>

    <table class="min-w-full mt-2 bg-white rounded-t-lg">
      <thead>
        <tr>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Sr.
          </th>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Image
          </th>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Name
          </th>
          <th
            class="px-4 py-2 hidden text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Price
          </th>
          <th
            class="px-4 py-2 hidden text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Stock
          </th>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Status
          </th>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Category
          </th>
          <th
            class="px-4 py-2 text-white bg-gray-800 border-b-2 border-gray-300"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
          class="text-center"
        >
          <td class="px-4 py-2 border-b">{{ index + 1 }}</td>
          <td class="px-4 py-2 border-b">
            <img
              :src="
                product.images[0]
                  ? product.images[0].imageUrl
                  : 'https://via.placeholder.com/50'
              "
              alt="Product Image"
              class="object-cover w-12 h-12 mx-auto"
            />
          </td>
          <td class="px-4 py-2 border-b">{{ product.name }}</td>
          <!-- <td class="px-4 py-2 border-b">
            {{ product.productVariants[0].price }}
          </td>
          <td class="px-4 py-2 border-b">
            {{ product.productVariants[0].stock }}
          </td> -->
          <td class="px-4 py-2 border-b">
            {{ product.isActive ? "Active" : "Inactive" }}
          </td>
          <td class="px-4 py-2 border-b">
            {{ product.categories.categoryName }}
          </td>
          <td class="px-4 py-2 border-b">
            <div class="flex gap-4">
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
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "ProductTable",
  data() {
    return {
      products: [],
      token: localStorage.getItem("token"),
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://api.8orbit.shop/api/v1/product")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the products!", error);
        });
    },
    editData(product) {
      this.$router.push({
        name: "editprodcts",
        params: { slug: product.slug },
      });
    },
    deleteProduct(product) {
      if (
        confirm(`Are you sure you want to delete the product: ${product.name}?`)
      ) {
        axios
          .delete(`https://api.8orbit.shop/api/v1/product/${product.slug}`, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then(() => {
            this.products = this.products.filter((p) => p !== product);
          })
          .catch((error) => {
            console.error("There was an error deleting the product!", error);
          });
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 900px;
}
</style>
