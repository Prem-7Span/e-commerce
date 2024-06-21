<template>
  <div class="p-4 px-0">
    <h1 class="mb-4 text-2xl font-bold text-primary-300">Add Variant</h1>
    <form class="space-y-4">
      <div class="flex items-center space-x-4">
        <label for="size" class="w-32 mb-1 text-lg">Size</label>
        <select
          id="size"
          v-model="newVariant.size"
          class="flex w-1/2 p-2 border rounded-md"
        >
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
        <label for="Colors" class="w-32 mb-1 text-lg">Colors</label>
        <select
          id="Colors"
          v-model="newVariant.color"
          class="flex w-1/2 p-2 border rounded-md"
        >
          <option value="" disabled>Select</option>
          <option class="text-white bg-black" value="Black">Black</option>
          <option class="bg-white" value="White">White</option>
          <option class="bg-blue-500" value="Blue">Blue</option>
          <option class="bg-green-500" value="Green">Green</option>
          <option class="bg-pink-500" value="Pink">Pink</option>
          <option class="bg-red-500" value="Red">Red</option>
        </select>
      </div>

      <div class="flex items-center space-x-4">
        <label for="regularPrice" class="w-32 mb-1 text-lg"
          >Regular Price</label
        >
        <input
          type="number"
          id="regularPrice"
          v-model="newVariant.regularPrice"
          class="flex w-1/2 p-2 border rounded-md"
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="price" class="w-32 mb-1 text-lg"> Price</label>
        <input
          type="number"
          id="price"
          v-model="newVariant.price"
          class="flex w-1/2 p-2 border rounded-md"
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="stock" class="w-32 mb-1 text-lg">Stock</label>
        <input
          type="number"
          id="stock"
          v-model="newVariant.stock"
          class="flex w-1/2 p-2 border rounded-md"
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="availableQuantity" class="w-32 mb-1 text-lg"
          >AvailableQuantity</label
        >
        <input
          type="number"
          id="availableQuantity"
          v-model="newVariant.availableQuantity"
          class="flex w-1/2 p-2 border rounded-md"
        />
      </div>

      <div class="flex items-center space-x-4">
        <label for="isDefault" class="w-32 text-lg">Primary</label>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            v-model="newVariant.isDefault"
            :disabled="isDefaultDisabled"
            id="isDefault"
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"
          ></div>
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

    <div class="hidden mt-4">
      <h2 class="mb-2 text-xl font-bold text-primary-300">New Variants</h2>
      <ul>
        <li
          v-for="(variant, index) in variants"
          :key="index"
          class="flex gap-4 p-2 px-3 mb-2 border rounded-md shadow-sm variant-item"
        >
          <span class="block text-lg"
            ><strong>Color:</strong> {{ variant.color }}</span
          >
          <span class="block text-lg"
            ><strong>Size:</strong> {{ variant.size }}</span
          >
          <span class="block text-lg"
            ><strong>Regular Price:</strong> {{ variant.regularPrice }}</span
          >
          <span class="block text-lg"
            ><strong>Price:</strong> {{ variant.price }}</span
          >
          <span class="block text-lg"
            ><strong>Stock:</strong> {{ variant.stock }}</span
          >
          <span class="block text-lg"
            ><strong>Available Quantity:</strong>
            {{ variant.availableQuantity }}</span
          >
          <span class="block text-lg"
            ><strong>Primary:</strong> {{ variant.isDefault }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from "vue";

const emit = defineEmits(["variantAdded"]);

const newVariant = reactive({
  size: "",
  color: "",
  regularPrice: "",
  price: "",
  stock: "",
  availableQuantity: "",
  isDefault: false,
});

const variants = ref([]);
const isDefaultDisabled = ref(false);

const addNewVariant = () => {
  if (
    newVariant.size &&
    newVariant.regularPrice &&
    newVariant.price &&
    newVariant.stock &&
    newVariant.availableQuantity
  ) {
    if (newVariant.isDefault) {
      isDefaultDisabled.value = true;
    }
    const variant = { ...newVariant };
    variants.value.push(variant);
    emit("variantAdded", variant);
    newVariant.size = "";
    newVariant.color = "";
    newVariant.regularPrice = "";
    newVariant.price = "";
    newVariant.stock = "";
    newVariant.availableQuantity = "";
    newVariant.isDefault = false;
  } else {
    alert("Please fill in all fields.");
  }
};
</script>
