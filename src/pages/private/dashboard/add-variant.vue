<template>
    <div class="p-4 px-0">
      <h1 class="text-2xl font-bold  text-primary-300 mb-4">Add Variant</h1>
      <form @submit.prevent="" class="space-y-4">
       
  
        <div class="flex items-center space-x-4">
          <label for="size" class="text-sm mb-1 w-32">Size</label>
          <select id="size" class="flex-grow p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="regularPrice" class="text-sm mb-1 w-32">Regular Price</label>
          <input type="number" id="regularPrice" class="flex-grow p-2 border rounded-md">
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="currentPrice" class="text-sm mb-1 w-32">Current Price</label>
          <input type="number" id="currentPrice" class="flex-grow p-2 border rounded-md">
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="stock" class="text-sm mb-1 w-32">Stock</label>
          <select id="stock" class="flex-grow p-2 border rounded-md">
            <option value="" disabled selected>Select</option>
            <!-- Add options here -->
          </select>
        </div>
  
     
  
        <div class="flex space-x-4">
            <router-link :to="{name : 'adminproducts'}">
          <button type="submit" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Save </button>
          </router-link>
          <button type="button" @click="addNewVariant" class="p-2 bg-primary-300 text-white rounded-md">Add Variant</button>
          <button type="button" @click="" class="bg-white text-parimary-300 border py-2 px-4 rounded-md hover:bg-gray-100">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  

  <script>

</script>