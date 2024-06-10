<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold  text-primary-300 mb-4">Add Product</h1>
      <form @submit.prevent="" class="space-y-4">
        <div class="flex items-center space-x-4">
          <label for="productName" class="text-lg mb-1 w-32">Product Name</label>
          <input type="text" id="productName" class="flex p-2  w-1/2 border rounded-md">
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="category" class="text-lg mb-1 w-32">Category</label>
          <select id="category" class="flex w-1/2 p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="subCategory" class="text-lg mb-1 w-32">Sub Category</label>
          <select id="subCategory" class="flex w-1/2 p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
  
        <div class="flex items-center space-x-4">
          <label for="color" class="text-lg mb-1 w-32">Color</label>
          <select id="color" class="flex w-1/2 p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="size" class="text-lg mb-1 w-32">Size</label>
          <select id="size" class="flex w-1/2 p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="regularPrice" class="text-lg mb-1 w-32">Regular Price</label>
          <input type="number" id="regularPrice" class="flex w-1/2 p-2 border rounded-md">
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="currentPrice" class="text-lg mb-1 w-32">Current Price</label>
          <input type="number" id="currentPrice" class="flex w-1/2 p-2 border rounded-md">
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="stock" class="text-lg mb-1 w-32">Stock</label>
          <select id="stock" class="flex w-1/2 p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
        <div class="flex items-center space-x-24">
          <label for="status" class="mr-2 text-lg">Status</label>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="status" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
            <span class="ml-2 text-lg font-medium text-gray-900">{{ }}</span>
          </label>
        </div>
      <AddVariant />
      <div class="flex space-x-4">
            <router-link :to="{name : 'adminproducts'}">
          <button type="submit" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Save </button>
          </router-link>
          
          <button type="button" @click="" class="bg-white text-parimary-300 border py-2 px-4 rounded-md hover:bg-gray-100">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  

  <script>
  import { defineComponent } from 'vue';
  import AddVariant from './add-variant.vue';
  
  export default defineComponent({
    components: {
      AddVariant
    },
    setup() {
     
      return {
      };
    }
  });
  </script>