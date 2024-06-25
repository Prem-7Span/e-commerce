<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold text-primary-300">Update Product</h1>
      <form @submit.prevent="save" class="space-y-6">
        <!-- Product Name -->
        <div class="flex items-center space-x-4">
          <label for="productName" class="w-32 mb-1 text-lg">Product Name</label>
          <input
            type="text"
            v-model="addproduct.productName"
            id="productName"
            class="flex w-1/2 p-2 border rounded-md"
          />
        </div>
  
        <!-- Category -->
        <div class="flex items-center space-x-4">
          <label for="category" class="w-32 mb-1 text-lg">Category</label>
          <select
            id="category"
            v-model="selectedCategory"
            class="flex w-1/2 p-2 border rounded-md"
          >
            <option class="text-black" value="" disabled>Select</option>
            <option
              class="text-black"
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
  
        <!-- Sub Category -->
        <div class="flex items-center space-x-4">
          <label for="subcategory" class="w-32 mb-1 text-lg">Subcategory</label>
          <select
            id="subcategory"
            v-model="selectedSubcategory"
            class="flex w-1/2 p-2 border rounded-md"
          >
            <option class="text-black" value="" disabled>Select</option>
            <option
              class="text-black"
              v-for="subcategory in subcategories"
              :key="subcategory.id"
              :value="subcategory.id"
            >
              {{ subcategory.name }}
            </option>
          </select>
        </div>
  
        <!-- Image Upload -->
        <div class="space-y-4">
          <label for="images" class="block text-lg font-semibold text-gray-700"
            >Added Images</label
          >
          <input
            type="file"
            id="images"
            @change="handleFileChange"
            accept="image/*"
            multiple
            class="hidden"
          />
          <label
            for="images"
            class="inline-flex md:hidden items-center px-6 py-3 text-base font-medium leading-6 text-white rounded-md shadow-md cursor-pointer bg-primary-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Choose Files
          </label>
  
          <!-- Preview Images -->
          <div class="grid grid-cols-4 gap-4">
            <div v-for="(image, index) in images" :key="index" class="relative">
              <div
                class="block w-32 h-32 overflow-hidden transition duration-300 ease-in-out transform bg-gray-200 rounded-md hover:scale-105"
              >
                <img
                  v-if="image"
                  :src="image"
                  alt="Product Image"
                  class="object-cover w-full h-full"
                />
                <div
                  v-else
                  class="flex items-center justify-center w-full h-full"
                >
                  <svg
                    class="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Status -->
        <div class="flex items-center space-x-4">
          <label for="status" class="w-32 text-lg">Status</label>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="addproduct.status"
              id="status"
              class="sr-only peer"
            />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"
            ></div>
            <span class="ml-2 text-lg font-medium text-gray-900"></span>
          </label>
        </div>
  
        <!-- Add Variant Component -->
        <AddVariant @variantAdded="handleVariantAdded" />
  
        <div class="mt-1">
          <h2 class="mb-2 text-lg font-bold text-primary-300">
         Update   Product Variants
          </h2>
          <ul>
            <li
              v-for="(variant, index) in productVariants"
              :key="index"
              class="flex gap-4 p-2 px-3 mb-2 border rounded-md shadow-sm variant-item"
            >
              <input
                type="text"
                v-model="variant.color"
                class="p-2 border rounded-md"
              />
              <input
                type="text"
                v-model="variant.size"
                class="p-2 border rounded-md"
              />
              <input
                type="number"
                v-model="variant.regularPrice"
                class="p-2 border rounded-md"
              />
              <input
                type="number"
                v-model="variant.price"
                class="p-2 border rounded-md"
              />
              <input
                type="number"
                v-model="variant.stock"
                class="p-2 border rounded-md"
              />
              <input
                type="number"
                v-model="variant.availableQuantity"
                class="p-2 border rounded-md"
              />
              <input
                type="checkbox"
                v-model="variant.isDefault"
                class="p-2 border rounded-md"
              />
            </li>
          </ul>
        </div>
  
        <!-- Buttons -->
        <div class="flex space-x-4">
          <button
            type="submit"
            class="px-4 py-2 text-white rounded-md bg-primary-300 hover:bg-gray-800"
          >
            Update
          </button>
          <button
            type="button"
            @click="cancel"
            class="px-4 py-2 bg-white border rounded-md text-primary-300 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { onMounted, reactive, ref, watch } from "vue";
  import AddVariant from "./add-variant.vue";
  import axios from "axios";
  import { useRoute, useRouter } from "vue-router";
  
  const route = useRoute();
  const router = useRouter();
  
  const slug = ref(route.params.slug);
  
  watch(
    () => route.params.slug,
    (newSlug) => {
      slug.value = newSlug;
    }
  );
  
  const addproduct = reactive({
    productName: "",
    category: "",
    subcategory: "",
    status: false,
  });
  
  const images = ref([]);
  const selectedCategory = ref("");
  const selectedSubcategory = ref("");
  const categories = ref([]);
  const subcategories = ref([]);
  const productVariants = ref([]);
  const token = localStorage.getItem("token");
  const error = ref(null);
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.8orbit.shop/api/v1/category",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      categories.value = response.data.map((category) => ({
        id: category.id,
        name: category.categoryName,
      }));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://api.8orbit.shop/api/v1/product/${slug.value}`
      );
      const productData = response.data.product;
  
      addproduct.productName = productData.name;
      selectedCategory.value = productData.categories.parentCategory.id;
      selectedSubcategory.value = productData.categories.id;
      addproduct.status = productData.isActive;
  
      productVariants.value = productData.productVariants || [];
  
      // Fetch and set images
      images.value = productData.images.map((image) => image.imageUrl) || [];
  
      // Fetch subcategories for the selected category
      if (selectedCategory.value) {
        await fetchSubCategories(selectedCategory.value);
        selectedSubcategory.value = productData.categories.id;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  
  watch(selectedCategory, async (newCategoryId) => {
    await fetchSubCategories(newCategoryId);
  });
  
  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await axios.get(
        `https://api.8orbit.shop/api/v1/category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      subcategories.value = response.data.map((subcategory) => ({
        id: subcategory.id,
        name: subcategory.categoryName,
      }));
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };
  
  const fetchProductUrl = async (count = 4) => {
    try {
      const response = await axios.get(
        "https://api.8orbit.shop/api/v1/product-image",
        {
          params: { count },
        }
      );
      const res = response.data.presignedUrls;
      productUrl.value = res.map((el) => el.url);
      imagesName.value = res.map((el) => el.imagename);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  
  function base64ToBinary(base64String) {
    const binaryString = window.atob(base64String.split(",")[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "image/png" });
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        resolve(new Uint8Array(event.target.result));
      };
      reader.onerror = function (event) {
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
              "Access-Control-Allow-Origin": "*",
            },
            crossdomain: true,
          });
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
        }
      } else {
        console.error(
          `Error: Product URL at index ${i} is invalid or undefined.`
        );
      }
    }
  };
  
  const updateProductAndFetchImages = async () => {
    try {
      await fetchMultipleImages();
    } catch (error) {
      console.error("Error updating product or fetching images:", error);
    }
  };
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        images.value.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }
  };
  
  const handleVariantAdded = (variant) => {
    productVariants.value.push(variant);
  };
  
  const save = async () => {
  if (
    addproduct.productName &&
    selectedCategory.value &&
    selectedSubcategory.value &&
    images.value.length > 0
  ) {
    addproduct.category = selectedCategory.value;
    addproduct.subcategory = selectedSubcategory.value;

    const savaproduct = {
      name: addproduct.productName,
      categoryId: addproduct.subcategory,
      variants: productVariants.value,
      imageNames: images.value,
    };

    try {
      const response = await axios.put(
        `https://api.8orbit.shop/api/v1/product/${slug.value}`,
        savaproduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product created:", response.data);
      await   router.push({ name: 'adminproducts' })
    } catch (error) {
      console.error("Error creating product:", error);
    }
  } else {
    alert("Please fill in all fields and upload at least one image.");
  }
};

  
  const cancel = () => {
    router.push("/products");
  };
  
  onMounted(() => {
    fetchCategories();
    fetchProduct();
    fetchProductUrl();
    fetchSubCategories(selectedCategory.value);
  });
  </script>
  
  <style scoped>
  .variant-item {
    display: flex;
    gap: 1rem;
  }
  </style>