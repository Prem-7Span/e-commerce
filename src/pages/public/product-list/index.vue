<template>
  <div class="text-primary-300 px-2 md:px-6 scrollbar-hide">
    <div class="flex md:px-3 text-primary-300">
      <div>
        <button class="space-x-1 text-primary-300">Home</button>
      </div>
      <div>
        <h2 class="gap-1 font-bold text-primary-300">/ All Products</h2>
      </div>
    </div>
    <hr class="px-8 m-1 text-grey" />

    <div class="flex justify-between md:px-3">
      <div class="flex gap-5">
        <div>
          <h2 class="font-bold">Filters</h2>
        </div>
        <div>
          <h2 class="cursor-pointer" @click="clearFilters">Clear All</h2>
        </div>
      </div>
      <div class="hidden font-bold md:block text-primary-300">
        <p>{{ productStore.productData.length }} Products</p>
      </div>
      <div class="block md:hidden">
        <button class="block mx-2 mt-2 md:hidden" @click="open()">
          <img src="/img/Vector.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="px-2 mt-5 md:gap-6 xl:gap-16 product-wrap">
      <div :class="sidebar ? 'block' : 'hidden'" class="px-1 md:w-60 w-full xl:w-64 md:!block z-10 md:relative absolute bg-white sidebar">
        <div>
          <h2 class="font-bold">Gender</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Men" value="Men" v-model="productStore.selectedGender" />
          <label for="Men"> Men</label><br />
          <input type="checkbox" id="Women" value="Women" v-model="productStore.selectedGender" />
          <label for="Women"> Women</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Categories</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Casual" value="Casual" v-model="productStore.selectedCategories" />
          <label for="Casual"> Casual</label><br />
          <input type="checkbox" id="Sports" value="Sports" v-model="productStore.selectedCategories" />
          <label for="Sports"> Sports</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Price</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" value="500-1000" v-model="productStore.selectedPrice" />
          <label for="500-1000"> Rs. 500 to Rs. 1000</label><br />
          <input type="checkbox" value="1000-2000" v-model="productStore.selectedPrice" />
          <label for="1000-2000"> Rs. 1000 to Rs. 2000</label><br />
          <input type="checkbox" value="2000-5000" v-model="productStore.selectedPrice" />
          <label for="2000-5000"> Rs. 2000 to Rs. 5000</label><br />
          <input type="checkbox" value="5000+" v-model="productStore.selectedPrice" />
          <label for="5000+"> Above Rs. 5000</label><br />
        </div>

        <h2 class="font-bold">Color</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input type="checkbox" id="Black" value="Black" v-model="productStore.selectedColor" />
            <label for="Black"> Black</label><br />
            <input type="checkbox" id="White" value="White" v-model="productStore.selectedColor" />
            <label for="White"> White</label><br />
            <input type="checkbox" id="Red" value="Red" v-model="productStore.selectedColor" />
            <label for="Red"> Red</label><br />
            <input type="checkbox" id="Green" value="Green" v-model="productStore.selectedColor" />
            <label for="Green"> Green</label><br />
          </div>
          <div>
            <input type="checkbox" id="Blue" value="Blue" v-model="productStore.selectedColor" />
            <label for="Blue"> Blue</label><br />
            <input type="checkbox" id="Yellow" value="Yellow" v-model="productStore.selectedColor" />
            <label for="Yellow"> Yellow</label><br />
            <input type="checkbox" id="Grey" value="Grey" v-model="productStore.selectedColor" />
            <label for="Grey"> Grey</label><br />
          </div>
          <button class="text-sm hover:text-red-900 text-start">
            + 3 more
          </button>
        </div>

        <h2 class="font-bold">Size</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input type="checkbox" id="XS" value="XS" v-model="productStore.selectedSize" />
            <label for="XS"> XS</label><br />
            <input type="checkbox" id="S" value="S" v-model="productStore.selectedSize" />
            <label for="S"> S</label><br />
            <input type="checkbox" id="M" value="M" v-model="productStore.selectedSize" />
            <label for="M"> M</label><br />
            <input type="checkbox" id="L" value="L" v-model="productStore.selectedSize" />
            <label for="L"> L</label><br />
          </div>
          <div>
            <input type="checkbox" id="XL" value="XL" v-model="productStore.selectedSize" />
            <label for="XL"> XL</label><br />
            <input type="checkbox" id="2XL" value="2XL" v-model="productStore.selectedSize" />
            <label for="2XL"> 2XL</label><br />
            <input type="checkbox" id="3XL" value="3XL" v-model="productStore.selectedSize" />
            <label for="3XL"> 3XL</label><br />
            <input type="checkbox" id="4XL" value="4XL" v-model="productStore.selectedSize" />
            <label for="4XL"> 4XL</label><br />
          </div>
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Sort by</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Trending" value="Trending" v-model="productStore.selectedSort" />
          <label for="Trending"> Trending</label><br />
          <input type="checkbox" id="NewArrivals" value="New Arrivals" v-model="productStore.selectedSort" />
          <label for="NewArrivals"> New Arrivals</label><br />
          <input type="checkbox" id="Recommended" value="Recommended" v-model="productStore.selectedSort" />
          <label for="Recommended"> Recommended</label><br />
          <input type="checkbox" id="sale" value="Items on sale" v-model="productStore.selectedSort" />
          <label for="sale"> Items on sale</label><br />
          <input type="checkbox" id="Customer" value="Customer reviews" v-model="productStore.selectedSort" />
          <label for="Customer"> Customer reviews</label><br />
        </div>
        <div class="mt-4 text-end">
          <button @click="applyFilters" class="text-red-500 hover:text-red-900">Apply Filter</button>
        </div>
      </div>

      <div class="h-screen overflow-auto">
        <div class="grid grid-cols-2 grid-rows-4 gap-5 py-4 md:gap-8 md:grid-cols-3 md:grid-rows-3">
          <ProductCard v-for="(product, index) in filteredProducts" :key="index" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "/src/store/product.js";
import ProductCard from "@/components/card/product-card.vue";

export default {
  name: "product",
  components: {
    ProductCard,
  },
  data() {
    return {
      sidebar: false,
      isMobile: false,
      productStore: useProductStore(),
    };
  },
  mounted() {
    this.productStore.fetchProductList();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth >= 768;
    },
    open() {
      this.sidebar = !this.sidebar;
    },
    applyFilters() {
  // Simulate slow update with a delay of 1 second (1000 milliseconds)
  setTimeout(() => {
    this.productStore.applyFiltersAndFetch();
  }, 1000);

    },
    clearFilters() {
      this.productStore.selectedCategories = [];
      this.productStore.selectedGender = [];
      this.productStore.selectedPrice = [];
      this.productStore.selectedColor = [];
      this.productStore.selectedSize = [];
      this.productStore.selectedSort = [];
      this.productStore.fetchProductList();
    },
  },
  computed: {
    filteredProducts() {
      return this.productStore.getProductData;
    },
  },
};
</script>


