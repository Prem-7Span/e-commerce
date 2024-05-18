<template>
  <div class="text-primary-300 px-2 md:px-6 scrollbar-hide">
    <div class="flex md:px-3 text-primary-300">
      <div>
        
        <button class="space-x-1 text-primary-300">Home </button>
      </div>
      <div>
        <h2 class="gap-1 font-bold text-primary-300">/ All Products</h2>
      </div>
    </div>
    <hr class="px-8 m-1 text-grey" />

    <div class="flex justify-between md:px-3">
      <div class="flex gap-8 md:gap-32">
        <div>
          <h2 class="font-bold">Filters</h2>
        </div>
        <div>
          <h2 class="cursor-pointer applyFilters" @click="clearFilters">Clear All</h2>
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
    <div class="md:px-2 mt-5 md:gap-6 xl:gap-16 product-wrap">
      <div :class="sidebar ? 'block' : 'hidden'" class="px-1 md:w-60 w-full xl:w-64 md:!block z-10 md:relative absolute bg-white sidebar">
        <div class="accent-inherit	">
          <h2 class="font-bold">Gender</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Men" value="Men" v-model="productStore.parentCategory" />
          <label for="Men"> Men</label><br />
          <input type="checkbox" id="Women" value="Women" v-model="productStore.parentCategory" />
          <label for="Women"> Women</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Categories</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Casual" value="Casual" v-model="productStore.categoryName" />
          <label for="Casual"> T-shirts</label><br />
          <input type="checkbox" id="Sports" value="Sports" v-model="productStore.categoryName" />
          <label for="Sports"> shirts</label><br />
          <input type="checkbox" id="Pant" value="Pant" v-model="productStore.categoryName" />
          <label for="Sports"> Pant</label><br />
        </div>


    
     
  <!-- <div class="relative mb-8 mt-1">
    <h2 class="font-bold">Price</h2>
    <hr class="p-1 px-20" />
    <label for="min-range-input" class="sr-only">Min Range</label>
    <label for="max-range-input" class="sr-only">Max Range</label>
    <p class="text-sm">Selected Price Range: ₹{{ minPrice }} - ₹{{ maxPrice }}</p>
    <div class="relative">
      <input
        id="min-range-input"
        type="range"
        v-model="productStore.minPrice"
        :min="minValue"
        :max="maxValue"
        class="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
        @input="handleMinInput"
      />
      <input
        id="max-range-input"
        type="range"
        v-model="productStore.mixPrice"
        :min="minValue"
        :max="maxValue"
        class="relative w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        @input="handleMaxInput"
      />
    </div>
    <span class="text-sm absolute left-0 -bottom-6">Min (₹{{ minValue }})</span>
    <span class="text-sm absolute right-0 -bottom-6">Max (₹{{ maxValue }})</span>
  </div>  -->



      
  <div class="relative  mb-2 mt-1">
    <h2 class="font-bold">Price</h2>
    <hr class="p-1 px-20" />
    <p class="text-sm">Selected Price Range: ₹{{ productStore.minPrice }} - ₹{{ productStore.maxPrice }}</p>

  <MultiRangeSlider
    :min="0"
    :max="1500"
    :step="100"
    :ruler="false"
    :label="true"
    
    :minValue="productStore.minPrice"
    :maxValue="productStore.maxPrice"
    @input="UpdateValues"
  />
  <div class=" flex justify-between">
  <p>Min</p>
  <p>Max</p>
  </div>
  </div>



        <h2 class="font-bold">Color</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input type="checkbox" id="Black" value="Black" v-model="productStore.color" />
            <label for="Black"> Black</label><br />
            <input type="checkbox" id="White" value="White" v-model="productStore.color" />
            <label for="White"> White</label><br />
            <input type="checkbox" id="Red" value="Red" v-model="productStore.color" />
            <label for="Red"> Red</label><br />
            <input type="checkbox" id="Green" value="Green" v-model="productStore.color" />
            <label for="Green"> Green</label><br />
          </div>
          <div>
            <input type="checkbox" id="Blue" value="Blue" v-model="productStore.color" />
            <label for="Blue"> Blue</label><br />
            <input type="checkbox" id="Yellow" value="Yellow" v-model="productStore.color" />
            <label for="Yellow"> Yellow</label><br />
            <input type="checkbox" id="Grey" value="Grey" v-model="productStore.color" />
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
            <input type="checkbox" id="XS" value="XS" v-model="productStore.size" />
            <label for="XS"> XS</label><br />
            <input type="checkbox" id="S" value="S" v-model="productStore.size" />
            <label for="S"> S</label><br />
            <input type="checkbox" id="M" value="M" v-model="productStore.size" />
            <label for="M"> M</label><br />
            <input type="checkbox" id="L" value="L" v-model="productStore.size" />
            <label for="L"> L</label><br />
          </div>
          <div>
            <input type="checkbox" id="XL" value="XL" v-model="productStore.size" />
            <label for="XL"> XL</label><br />
            <input type="checkbox" id="2XL" value="2XL" v-model="productStore.size" />
            <label for="2XL"> 2XL</label><br />
            <input type="checkbox" id="3XL" value="3XL" v-model="productStore.size" />
            <label for="3XL"> 3XL</label><br />
            <input type="checkbox" id="4XL" value="4XL" v-model="productStore.size" />
            <label for="4XL"> 4XL</label><br />
          </div>
        </div>

        <div class="text-center sticky bottom-0 left-9 right-9 w-64  bg-white p-4">
  <button @click="applyFilters" class="bg-primary-300 w-full text-center text-white rounded-md p-1" > Apply Filters</button> 
</div>


<!-- <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <button @click="applyFilters" class="bg-primary-300 w-full text-center text-white rounded-md p-1">
        Apply Filters
      </button>
    </div> -->


      </div>

      <div>
        <div class="grid grid-cols-2 grid-rows-4 gap-5 py-4 md:gap-8 md:grid-cols-3 md:grid-rows-3">
          <ProductCard v-for="(product, index) in productStore.productData" :key="index" :product="product" />
        </div>
      </div>
    </div>
  </div> 
</template>
<script>

import { useProductStore } from "/src/store/product.js";
import ProductCard from "@/components/card/product-card.vue";
import MultiRangeSlider from "multi-range-slider-vue";


export default {
  name: "product",
  components: {
    ProductCard,
    MultiRangeSlider

  },
  
  data() {
    return {
      sidebar: false,
      isMobile: false,
      productStore: useProductStore(),
      filteredProducts: [],
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
  UpdateValues(value) {
      console.log("val",value);
      this.productStore.minPrice = value.minValue;
      this.productStore.maxPrice = value.maxValue;
    },
    handleResize() {
      this.isMobile = window.innerWidth >= 768;
    },
    open() {
      this.sidebar = !this.sidebar;
    }, 
    async applyFilters() {
      try {
        const filteredData = await this.productStore.applyFiltersAndFetch();
        this.filteredProducts = filteredData;
        console.log("Filtered products:", this.filteredProducts);
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    },
    clearFilters() {
      this.productStore.productData= [];
      this.productStore.categoryName = [];
      this.productStore.parentCategory = [];
      this.productStore.selectedPrice = [];
      this.productStore.color = [];
      this.productStore.size = [];
      this.productStore.minPrice = 0;
      this.productStore.maxPrice = 1500;
      this.productStore.fetchProductList();
    },
  },
};

</script>




<style>

.multi-range-slider{
  border-radius: none;
  box-shadow: none;
  border: none;
  
}
.multi-range-slider .bar-inner{
background-color: blue;
}
</style>