<template>
  <div class="p-4 px-0">
    <h1 class="text-2xl font-bold text-primary-300 mb-4">Add Variant</h1>
    <form class="space-y-4">
      <div class="flex items-center space-x-4">
        <label for="size" class="text-lg mb-1 w-32">Size</label>
        <select id="size" v-model="newVariant.size" class="flex w-1/2 p-2 border rounded-md">
          <option value="" disabled>Select</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select>
      </div>

      <div class="flex items-center space-x-4">
        <label for="Colors" class="text-lg mb-1 w-32">Colors</label>
        <select id="Colors" v-model="newVariant.color" class="flex w-1/2 p-2 border rounded-md">
          <option value="" disabled>Select</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
        </select>
      </div>

      <div class="flex items-center space-x-4">
        <label for="regularPrice" class="text-lg mb-1 w-32">Regular Price</label>
        <input type="number" id="regularPrice" v-model="newVariant.regularPrice" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="price" class="text-lg mb-1 w-32"> Price</label>
        <input type="number" id="price" v-model="newVariant.price" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="stock" class="text-lg mb-1 w-32">Stock</label>
        <input type="number" id="stock" v-model="newVariant.stock" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="availableQuantity" class="text-lg mb-1 w-32">AvailableQuantity</label>
        <input type="number" id="availableQuantity" v-model="newVariant.availableQuantity" class="flex w-1/2 p-2 border rounded-md">
      </div>

      <div class="flex items-center space-x-4">
        <label for="isDefault" class="text-lg w-32">Primary</label>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="newVariant.isDefault" :disabled="isDefaultDisabled" id="isDefault" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300">
          </div>
          <span class="ml-2 text-lg font-medium text-gray-900"></span>
        </label>
      </div>

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

    <div class="mt-4 hidden">
      <h2 class="text-xl font-bold text-primary-300 mb-2">New Variants</h2>
      <ul>
        <li v-for="(variant, index) in variants" :key="index" class="mb-2 p-2 rounded-md border shadow-sm variant-item flex gap-4 px-3">
          <span class="block text-lg"><strong>Color:</strong> {{ variant.color }}</span>
          <span class="block text-lg"><strong>Size:</strong> {{ variant.size }}</span>
          <span class="block text-lg"><strong>Regular Price:</strong> {{ variant.regularPrice }}</span>
          <span class="block text-lg"><strong>Price:</strong> {{ variant.price }}</span>
          <span class="block text-lg"><strong>Stock:</strong> {{ variant.stock }}</span>
          <span class="block text-lg"><strong>Available Quantity:</strong> {{ variant.availableQuantity }}</span>
          <span class="block text-lg"><strong>Primary:</strong> {{ variant.isDefault }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from 'vue';

const emit = defineEmits(['variantAdded']);

const newVariant = reactive({
  size: '',
  color: '',
  regularPrice: '',
  price: '',
  stock: '',
  availableQuantity: '',
  isDefault: false
});

const variants = ref([]);
const isDefaultDisabled = ref(false);

const addNewVariant = () => {
  if (newVariant.size && newVariant.regularPrice && newVariant.price && newVariant.stock && newVariant.availableQuantity) {
    if (newVariant.isDefault) {
      isDefaultDisabled.value = true;
    }
    const variant = { ...newVariant };
    variants.value.push(variant);
    emit('variantAdded', variant);
    newVariant.size = '';
    newVariant.color = '';
    newVariant.regularPrice = '';
    newVariant.price = '';
    newVariant.stock = '';
    newVariant.availableQuantity = '';
    newVariant.isDefault = false;
  } else {
    alert('Please fill in all fields.');
  }
};
</script>
