<template>
  <div id="main parent" class="container h-fit">
    <div class="flex py-4 md:px-8 text-primary-300">
      <div>
        <button class="space-x-1 text-primary-300">Home</button>
      </div>
      <div>
        <h2 class="gap-1 text-primary-300">/ All Products</h2>
      </div>
      <div>
        <h2 class="gap-1 font-bold text-primary-300">/ Product name</h2>
      </div>
    </div>
    <hr class="px-8 m-1 text-grey" />
    <div id="upper-section" class="gap-20 py-3 md:flex">
      <div id="img-section" class="flex gap-9">
        <div class="space-y-5">
          <div
            v-if="fetchedImages && fetchedImages.length > 0"
            class="space-y-2"
          >
            <img
              v-for="(image, index) in fetchedImages"
              :src="image.imageUrl"
              :key="index"
              @click="selectedImageIndex = index"
              class="object-cover w-20 h-20 py-1 border-2 cursor-pointer"
              :class="{ 'border-gray-800': selectedImageIndex === index }"
            />
          </div>
        </div>
        <div class="w-[459px]">
          <img
            :src="mainImageUrl"
            class="object-fill w-full h-full"
            alt="main-img"
          />
        </div>
      </div>
      <div id="detail-section">
        <p class="text-xs text-green-500">In Stock</p>
        <h2 class="py-4 text-xl font-semibold">{{ productDetails.name }}</h2>
        <p class="text-gray-500">{{ productDetails.description }}</p>
        <div class="flex gap-2 py-2">
          <p class="text-xl text-bold">₹{{ selectedVariant.price }}</p>
          <p
            class="text-gray-500 line-through"
            v-if="selectedVariant.regularPrice"
          >
            ₹{{ selectedVariant.regularPrice }}
          </p>
        </div>
        <div>
          <p class="text-xs text-green-500">inclusive all taxes</p>
        </div>
        <div class="py-4">
          <p>Colors</p>
          <div id="color-section" class="flex gap-3">
            <label v-for="color in availableColors" :key="color">
              <input
                type="radio"
                name="color"
                class="hidden peer"
                :value="color"
                v-model="selectedColor"
              />
              <div
                :class="getColorClass(color)"
                class="w-12 h-12 border-2 border-transparent rounded-full cursor-pointer peer-checked:border-gray-800"
              ></div>
            </label>
          </div>
        </div>

        <!-- Size Selector Component -->
        <div class="py-3">
          <p>Sizes</p>
          <div id="size-section" class="flex gap-3">
            <label
              v-for="size in allSizes"
              :key="size"
              :class="{
                'opacity-50 cursor-not-allowed': !availableSizes.includes(size),
              }"
            >
              <input
                type="radio"
                name="size"
                class="hidden peer"
                :value="size"
                v-model="selectedSize"
                :disabled="!availableSizes.includes(size)"
              />
              <div
                class="flex items-center justify-center w-12 h-12 text-center border rounded-full cursor-pointer peer-checked:bg-gray-800 peer-checked:text-white"
              >
                {{ size }}
              </div>
            </label>
          </div>
        </div>

        <div class="flex py-3">
          <img src="/public/img/tickmark-delivery.svg" alt="" />
          <p class="">Delivery:</p>
          <p class="text-gray-500">24-26 April, 2024</p>
        </div>

        <div class="flex py-3">
          <img src="/public/img/tickmark-delivery.svg" alt="" />
          <p class="">Shipping:</p>
          <p class="text-gray-500">Free for orders above Rs. 500</p>
        </div>

        <!-- ADD TO CARD || ADD TO wishlist -->

        <div class="flex gap-3 py-4">
          <div class="flex items-center w-24 border rounded-lg">
            <button
              @click="decrement"
              class="flex items-center justify-center w-8 h-8 text-gray-700 rounded-l-lg hover:bg-gray-200"
            >
              -
            </button>
            <span class="w-8 text-center">{{ quantity }}</span>
            <button
              @click="increment"
              class="flex items-center justify-center w-8 h-8 text-gray-700 rounded-r-lg hover:bg-gray-200"
            >
              +
            </button>
          </div>
          <button
            @click="addToCart"
            class="px-6 py-2 text-base text-white rounded-md bg-primary-offBlack"
          >
            Add to bag
          </button>
          <button
            class="px-6 py-2 text-base text-white rounded-md bg-primary-offBlack"
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
    <div id="lower-section">
      <hr />
      <!-- Dynamic Components -->
      <div class="px-3 pt-16 pb-5">
        <ul class="flex">
          <li
            @click="setActiveTab('Description')"
            :class="tabClass('Description')"
          >
            Description
          </li>
          <li
            @click="setActiveTab('AdditionalInfo')"
            :class="tabClass('AdditionalInfo')"
          >
            Additional info
          </li>
          <li @click="setActiveTab('Reviews')" :class="tabClass('Reviews')">
            Reviews
          </li>
        </ul>
        <component :is="currentTabComponent" />
      </div>
    </div>

    <!-- Product Card -->
    <div>
      <p class="py-5 text-xl">You might also like</p>
      <div
        class="grid grid-cols-2 grid-rows-4 gap-5 pt-3 pb-20 md:gap-8 md:grid-cols-4 md:grid-rows-1"
      >
        <ProductCard
          v-for="(product, index) in productData"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailsStore } from "../../../store/productDetails"; // Import your Pinia store
import { useProductStore } from "/src/store/product.js";
import ProductCard from "@/components/card/product-card.vue";

// Tab related imports
import Description from "../../../components/product-details/description.vue";
import AdditionalInfo from "../../../components/product-details/additional-info.vue";
import Reviews from "../../../components/product-details/reviews.vue";

// Initialize tab state
const activeTab = ref("Description");

const currentTabComponent = computed(() => {
  return {
    Description: Description,
    AdditionalInfo: AdditionalInfo,
    Reviews: Reviews,
  }[activeTab.value];
});

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const tabClass = (tab) => {
  return activeTab.value === tab
    ? "cursor-pointer py-2 px-4 text-blue-600 border-b-2 border-blue-600"
    : "cursor-pointer py-2 px-4 text-gray-600";
};

// Product details related logic
const route = useRoute();
const productDetailsStore = useProductDetailsStore(); // Initialize your Pinia store

const fetchedImages = ref([]);
const selectedImageIndex = ref(0);
const selectedColor = ref("");
const selectedSize = ref("");
const productDetails = ref({});
const productVariants = ref([]);

const mainImageUrl = computed(() => {
  return fetchedImages.value.length > 0
    ? fetchedImages.value[selectedImageIndex.value].imageUrl
    : "";
});

const availableColors = computed(() => {
  return [...new Set(productVariants.value.map((variant) => variant.color))];
});

// Define all possible sizes (you can customize this list based on your needs)
const allSizes = ["S", "M", "L", "XL", "XXL"];

const availableSizes = computed(() => {
  return productVariants.value
    .filter((variant) => variant.color === selectedColor.value)
    .map((variant) => variant.size);
});

const selectedVariant = computed(() => {
  return (
    productVariants.value.find(
      (variant) =>
        variant.color === selectedColor.value &&
        variant.size === selectedSize.value
    ) || {}
  );
});

const getColorClass = (color) => {
  const colorMap = {
    red: "bg-red-500",
    black: "bg-black",
    cyan: "bg-cyan-500",
    orange: "bg-orange-600",
    purple: "bg-purple-500",
  };
  return colorMap[color] || "bg-gray-500";
};

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
const addToCart = async () => {
  try {
    const response = await axios.post("https://api.8orbit.shop/api/v1/cart", {
      productVariantId: selectedVariant.value.id,
      quantity: quantity.value,
    });
    console.log("Added to cart:", response.data);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

onMounted(() => {
  const slug = route.params.slug;

  productDetailsStore
    .fetchProductDetails(slug)
    .then(() => {
      productDetails.value = productDetailsStore.productDetails;
      fetchedImages.value = productDetailsStore.productDetails.images || [];
      productVariants.value =
        productDetailsStore.productDetails.productVariants || [];
      if (productVariants.value.length > 0) {
        selectedColor.value = productVariants.value[0].color;
        selectedSize.value = productVariants.value[0].size;
      }
    })
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
});

// ProductCard
const productStore = useProductStore();
const productData = ref([]);

// Fetch the product list on component mount
onMounted(async () => {
  await productStore.fetchProductList();
  productData.value = productStore.productData.slice(0, 4); // Use slice instead of splice to keep the original data intact
});
</script>
