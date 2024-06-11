<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-primary-300 mb-4">Add Product</h1>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Product Name -->
      <div class="flex items-center space-x-4">
        <label for="productName" class="text-lg mb-1 w-32">Product Name</label>
        <input type="text" v-model="addproduct.productName" id="productName" class="flex p-2 w-1/2 border rounded-md">
      </div>

      <!-- Category -->
      <div class="flex items-center space-x-4">
        <label for="category" class="text-lg mb-1 w-32">Category</label>
        <select id="category" v-model="addproduct.category" class="flex w-1/2 p-2 border rounded-md">
          <option value="" disabled selected>Select</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <!-- Add more options here if needed -->
        </select>
      </div>

      <!-- Sub Category -->
      <div class="flex items-center space-x-4">
        <label for="subCategory" class="text-lg mb-1 w-32">Sub Category</label>
        <select id="subCategory" v-model="addproduct.subcategory" class="flex w-1/2 p-2 border rounded-md">
          <option value="" disabled selected>Select</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Trousers">Trousers</option>
          <option value="pant">Pant</option>
          <!-- Add more options here if needed -->
        </select>
      </div>

      <!-- Image Upload -->
      <div class="space-y-4">
        <label for="images" class="block text-lg font-semibold text-gray-700">Add Images</label>
        <input type="file" id="images" @change="handleFileChange" accept="image/*" multiple class="hidden">
        <label for="images" class="cursor-pointer inline-flex items-center px-6 py-3 bg-primary-300 text-white font-medium text-base leading-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Choose Files
        </label>


        <!-- Preview Images -->
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(image, index) in images" :key="index" class="relative">
            <div class="block w-32 h-32 overflow-hidden bg-gray-200 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img v-if="image" :src="image" alt="Product Image" class="w-full h-full object-cover">
              <div v-else class="flex justify-center items-center w-full h-full">
                <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button class=" px-5 text-end bg-primary-300 rounded-lg p-2 text-white">Uplode Images</button>

      </div>

      <!-- Status -->
      <div class="flex items-center space-x-4">
        <label for="status" class="text-lg w-32">Status</label>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="addproduct.status" id="status" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
          <span class="ml-2 text-lg font-medium text-gray-900"></span>
        </label>
      </div>

      <!-- Add Variant Component -->
      <AddVariant />

      <!-- Buttons -->
      <div class="flex space-x-4">
        <button type="" @click="save()" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Save</button>
        <button type="button" @click="cancel" class="bg-white text-primary-300 border py-2 px-4 rounded-md hover:bg-gray-100">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import AddVariant from './add-variant.vue';

const addproduct = reactive({
  productName: '',
  category: '',
  subcategory: '',
  status: false,
});

const images = ref([]);

const handleFileChange = (event) => {
  const selectedFiles = Array.from(event.target.files);
  images.value = [];

  selectedFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      images.value.push(reader.result);
    };
    reader.readAsDataURL(file);
  });
};

const save = () => {
  if (
    addproduct.productName &&
    addproduct.category &&
    addproduct.subcategory &&
    images.value.length > 0
  ) {
    // Form submission logic
    console.log('Form submitted:', addproduct, images.value);
    // Add your form submission logic here, e.g., an API call
  } else {
    alert('Please fill in all fields and upload at least one image.');
  }
};

const cancel = () => {
  // Handle the cancel action, such as resetting the form or navigating away
  console.log('Form canceled');
  // Reset the form fields if needed
  addproduct.productName = '';
  addproduct.category = '';
  addproduct.subcategory = '';
  addproduct.status = false;
  images.value = [];
};
</script>

<style scoped>
/* Add your styles here */
</style>
