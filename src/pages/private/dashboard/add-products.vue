<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-primary-300 mb-4">Add Product</h1>
    <form @submit.prevent="save" class="space-y-6">
      <!-- Product Name -->
      <div class="flex items-center space-x-4">
        <label for="productName" class="text-lg mb-1 w-32">Product Name</label>
        <input type="text" v-model="addproduct.productName" id="productName" class="flex p-2 w-1/2 border rounded-md" />
      </div>

      <!-- Category -->
      <div class="flex items-center space-x-4">
        <label for="category" class="text-lg mb-1 w-32">Category</label>
        <select id="category" v-model="selectedCategory" class="flex w-1/2 p-2 border rounded-md">
          <option class="text-black" value="" disabled>Select</option>
          <option class="text-black" v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <!-- Sub Category -->
      <div class="flex items-center space-x-4">
        <label for="subcategory" class="text-lg mb-1 w-32">Subcategory</label>
        <select id="subcategory" v-model="selectedSubcategory" class="flex w-1/2 p-2 border rounded-md">
          <option class="text-black" value="" disabled>Select</option>
          <option class="text-black" v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">{{ subcategory.name }}</option>
        </select>
      </div>

      <!-- Image Upload -->
      <div class="space-y-4">
        <label for="images" class="block text-lg font-semibold text-gray-700">Add Images</label>
        <input type="file" id="images" @change="handleFileChange" accept="image/*" multiple class="hidden" />
        <label for="images"
          class="cursor-pointer inline-flex items-center px-6 py-3 bg-primary-300 text-white font-medium text-base leading-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Choose Files
        </label>

        <!-- Preview Images -->
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(image, index) in images" :key="index" class="relative">
            <div
              class="block w-32 h-32 overflow-hidden bg-gray-200 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img v-if="image" :src="image" alt="Product Image" class="w-full h-full object-cover" />
              <div v-else class="flex justify-center items-center w-full h-full">
                <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Status -->
      <div class="flex items-center space-x-4">
        <label for="status" class="text-lg w-32">Status</label>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="addproduct.status" id="status" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300">
          </div>
          <span class="ml-2 text-lg font-medium text-gray-900"></span>
        </label>
      </div>

      <!-- Add Variant Component -->
      <AddVariant @variantAdded="handleVariantAdded" />

      <div class="mt-1">
        <h2 class="text-lg font-bold text-primary-300 mb-2">Product Variants</h2>
        <ul>
          <li v-for="(variant, index) in productVariants" :key="index"
            class="mb-2 p-2 rounded-md border shadow-sm variant-item flex gap-4 px-3">
            <span class="block text-lg"><strong>Color:</strong> {{ variant.color }}</span>
            <span class="block text-lg"><strong>Size:</strong> {{ variant.size }}</span>
            <span class="block text-lg"><strong>Regular Price:</strong> {{ variant.regularPrice }}</span>
            <span class="block text-lg"><strong>Price:</strong> {{ variant.price }}</span>
            <span class="block text-lg"><strong>Stock:</strong> {{ variant.stock }}</span>
            <span class="block text-lg"><strong>AvailableQuantity:</strong> {{ variant.availableQuantity }}</span>
            <span class="block text-lg"><strong>primary:</strong> {{ variant.isDefault }}</span>

          </li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="flex space-x-4">
        <button type="submit" class="bg-primary-300 text-white py-2 px-4 rounded-md hover:bg-gray-800">Save</button>
        <button type="button" @click="cancel"
          class="bg-white text-primary-300 border py-2 px-4 rounded-md hover:bg-gray-100">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import AddVariant from './add-variant.vue';
import axios from 'axios';

const addproduct = reactive({
  productName: '',
  category: '',
  subcategory: '',
  status: false,
});

const images = ref([]);
const selectedCategory = ref('');
const selectedSubcategory = ref('');
const categories = ref([]);
const subcategories = ref([]);
const productVariants = ref([]);
const productUrl = ref([]);
const imagesName = ref([]);
const token = localStorage.getItem("token");

const fetchCategories = async () => {
  try {
    const response = await axios.get('https://api.8orbit.shop/api/v1/category', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    categories.value = response.data.map(category => ({
      id: category.id,
      name: category.categoryName
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const fetchSubCategories = async (categoryId) => {
  try {
    const response = await axios.get(`https://api.8orbit.shop/api/v1/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    subcategories.value = response.data.map(subcategory => ({
      id: subcategory.id,
      name: subcategory.categoryName
    }));
  } catch (error) {
    console.error('Error fetching subcategories:', error);
  }
};

watch(selectedCategory, (newCategoryId) => {
  fetchSubCategories(newCategoryId);
});

const fetchProductUrl = async (count = 4) => {
  try {
    const response = await axios.get('https://api.8orbit.shop/api/v1/product-image', {
      params: { count }
    });
    const res = response.data.presignedUrls;
    productUrl.value = res.map(el => el.url);
    imagesName.value = res.map(el => el.imagename);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

function base64ToBinary(base64String) {
  const binaryString = window.atob(base64String.split(',')[1]);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'image/png' });
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      resolve(new Uint8Array(event.target.result));
    };
    reader.onerror = function(event) {
      reject(event.target.error);
    };
    reader.readAsArrayBuffer(blob);
  });
}

const fetchMultipleImages = async () => {
  for (let i = 0; i < productUrl.value.length; i++) {
    const itemUrl = productUrl.value[i];
    const image = images.value[i];
    if (itemUrl && image) {
      try {
        const convertedImage = await base64ToBinary(image);
        await axios.put(itemUrl, convertedImage, {
          headers: {
            "Content-Type": "image/png",
            "Access-Control-Allow-Origin": "*"
          },
          crossdomain: true
        });
      } catch (error) {
        console.error(`Error uploading image ${i + 1}:`, error);
      }
    } else {
      console.error(`Error: Product URL at index ${i} is invalid or undefined.`);
    }
  }
};

const updateProductAndFetchImages = async () => {
  try {
    await fetchMultipleImages();
  } catch (error) {
    console.error('Error updating product or fetching images:', error);
  }
};

const handleFileChange = (event) => {
  const selectedFiles = Array.from(event.target.files);
  images.value = [];
  selectedFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      images.value.push(reader.result);
    };
    reader.readAsDataURL(file);
  });
};

const save = async () => {
  if (addproduct.productName && selectedCategory.value && selectedSubcategory.value && images.value.length > 0) {
    addproduct.category = selectedCategory.value;
    addproduct.subcategory = selectedSubcategory.value;

    const savaproduct = {
      name: addproduct.productName,
      categoryId: addproduct.category,
      variants: productVariants.value,
      imageNames: imagesName.value
    };

    try {
      const response = await axios.post('https://api.8orbit.shop/api/v1/product', savaproduct, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log('Product created:', response.data);
      await updateProductAndFetchImages();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  } else {
    alert('Please fill in all fields and upload at least one image.');
  }
};

const cancel = () => {
  addproduct.productName = '';
  selectedCategory.value = '';
  selectedSubcategory.value = '';
  addproduct.status = false;
  images.value = [];
  productVariants.value = [];
};

const handleVariantAdded = (variant) => {
  productVariants.value.push(variant);
};

onMounted(() => {
  fetchProductUrl();
  fetchCategories();
});
</script>
