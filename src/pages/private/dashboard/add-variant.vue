<template>
  <div class="p-4 px-0">
    <h1 class="text-2xl font-bold text-primary-300 mb-4">Add Variant</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Loop through each variant and generate input fields -->
      <div v-for="(variant, index) in state.variants" :key="index" class="variant-group space-y-4 mb-4">
        <!-- Size field -->
        <div class="flex items-center space-x-4">
          <label :for="'size-' + index" class="text-sm mb-1 w-32">Size</label>
          <select :id="'size-' + index" v-model="variant.size" class="flex-grow p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>

        <!-- Regular Price field -->
        <div class="flex items-center space-x-4">
          <label :for="'regularPrice-' + index" class="text-sm mb-1 w-32">Regular Price</label>
          <input type="number" :id="'regularPrice-' + index" v-model="variant.regularPrice" class="flex-grow p-2 border rounded-md">
        </div>

        <!-- Current Price field -->
        <div class="flex items-center space-x-4">
          <label :for="'currentPrice-' + index" class="text-sm mb-1 w-32">Current Price</label>
          <input type="number" :id="'currentPrice-' + index" v-model="variant.currentPrice" class="flex-grow p-2 border rounded-md">
        </div>

        <!-- Stock field -->
        <div class="flex items-center space-x-4">
          <label :for="'stock-' + index" class="text-sm mb-1 w-32">Stock</label>
          <select :id="'stock-' + index" v-model="variant.stock" class="flex-grow p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
      </div>

      <!-- Button to add a new variant -->
      <div class="flex space-x-4">
        <button type="button" @click="addNewVariant" class="p-2 bg-primary-300 text-white rounded-md">Add Variant</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Reactive object to hold the variants array
const state = reactive({
  variants: [
    {
      size: '',
      regularPrice: '',
      currentPrice: '',
      stock: '',
    },
  ],
});

// Method to add a new variant object to the variants array
function addNewVariant() {
  state.variants.push({
    size: '',
    regularPrice: '',
    currentPrice: '',
    stock: '',
  });
}

// Optional: method to handle form submission
function handleSubmit() {
  console.log('Form submitted with:', state.variants);
}
</script>

<style>
/* Add your styles here if needed */
</style>
