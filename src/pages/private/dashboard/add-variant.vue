<template>
  <div class="p-4 px-0">
    <h1 class="text-2xl font-bold text-primary-300 mb-4">Add Variant</h1>
    <form s class="space-y-4">
      <div class="flex items-center space-x-4">
        <label for="size" class="text-lg mb-1 w-32">Size</label>
        <select id="size" v-model="newVariant.size" class="flex w-1/2 p-2 border rounded-md">
          <option value="" disabled selected>Select</option>
          <!-- Add options here -->
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>

      <div class="flex items-center space-x-4">
        <label for="regularPrice" class="text-lg mb-1 w-32">Regular Price</label>
        <input type="number" id="regularPrice" v-model="newVariant.regularPrice" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="currentPrice" class="text-lg mb-1 w-32">Current Price</label>
        <input type="number" id="currentPrice" v-model="newVariant.currentPrice" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="stock" class="text-lg mb-1 w-32">Stock</label>
        <select id="stock" v-model="newVariant.stock" class="flex- w-1/2 p-2 border rounded-md">
          <option value="" disabled selected>Select</option>
          <!-- Add options here -->
          <option value="InStock">In Stock</option>
          <option value="OutOfStock">Out of Stock</option>
        </select>
      </div>

      <div class="flex space-x-4">
        <button type="button" @click="addNewVariant" class="p-2 bg-primary-300 text-white rounded-md">Add Variant</button>
      </div>
    </form>

    <div class="mt-4">
      <h2 class="text-xl font-bold text-primary-300 mb-2">New Variants</h2>
      <ul>
        <li v-for="(variant, index) in variants" :key="index" class="mb-2 p-2 rounded-md border shadow-sm variant-item flex gap-2">
          <span class="block text-lg"><strong >Size:</strong> {{ variant.size }}</span>
          <span class="block text-lg"><strong>Regular Price:</strong> {{ variant.regularPrice }}</span>
          <span class="block text-lg"><strong>Current Price:</strong> {{ variant.currentPrice }}</span>
          <span class="block text-lg"><strong>Stock:</strong> {{ variant.stock }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const newVariant = reactive({
  size: '',
  regularPrice: '',
  currentPrice: '',
  stock: ''
});
const variants = ref([]);

const addNewVariant = () => {
  if (newVariant.size && newVariant.regularPrice && newVariant.currentPrice && newVariant.stock) {
    variants.value.push({ ...newVariant });
    newVariant.size = '';
    newVariant.regularPrice = '';
    newVariant.currentPrice = '';
    newVariant.stock = '';
  } else {
    alert('Please fill in all fields.');
  }
};
</script>

