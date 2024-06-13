<template>
  <div class="p-4 px-0">
    <h1 class="mb-4 text-2xl font-bold text-primary-300">Add Variant</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Loop through each variant and generate input fields -->
      <div
        v-for="(variant, index) in state.variants"
        :key="index"
        class="mb-4 space-y-4 variant-group"
      >
        <!-- Size field -->
        <div class="flex items-center space-x-4">
          <label :for="'size-' + index" class="w-32 mb-1 text-sm">Size</label>
          <select
            :id="'size-' + index"
            v-model="variant.size"
            class="flex-grow p-2 border rounded-md"
          >
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>

        <!-- Regular Price field -->
        <div class="flex items-center space-x-4">
          <label :for="'regularPrice-' + index" class="w-32 mb-1 text-sm"
            >Regular Price</label
          >
          <input
            type="number"
            :id="'regularPrice-' + index"
            v-model="variant.regularPrice"
            class="flex-grow p-2 border rounded-md"
          />
        </div>

        <!-- Current Price field -->
        <div class="flex items-center space-x-4">
          <label :for="'currentPrice-' + index" class="w-32 mb-1 text-sm"
            >Current Price</label
          >
          <input
            type="number"
            :id="'currentPrice-' + index"
            v-model="variant.currentPrice"
            class="flex-grow p-2 border rounded-md"
          />
        </div>

        <!-- Stock field -->
        <div class="flex items-center space-x-4">
          <label :for="'stock-' + index" class="w-32 mb-1 text-sm">Stock</label>
          <select
            :id="'stock-' + index"
            v-model="variant.stock"
            class="flex-grow p-2 border rounded-md"
          >
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
      </div>

      <!-- Button to add a new variant -->
      <div class="flex space-x-4">
        <button
          type="button"
          @click="addNewVariant"
          class="p-2 text-white rounded-md bg-primary-300"
        >
          Add Variant
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Reactive object to hold the variants array
const state = reactive({
  variants: [
    {
      size: "",
      regularPrice: "",
      currentPrice: "",
      stock: "",
    },
  ],
});

// Method to add a new variant object to the variants array
function addNewVariant() {
  state.variants.push({
    size: "",
    regularPrice: "",
    currentPrice: "",
    stock: "",
  });
}

// Optional: method to handle form submission
function handleSubmit() {}
</script>

<style>
/* Add your styles here if needed */
</style>
