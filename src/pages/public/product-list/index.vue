<template>
  <div class="text-primary-300">
    <div class="flex md:px-8 text-primary-300">
      <div>
        <button class="space-x-1 text-primary-300">Home</button>
      </div>
      <div>
        <h2 class="gap-1 font-bold text-primary-300">/ All Products</h2>
      </div>
    </div>
    <hr class="px-8 m-1 text-grey" />

    <div class="flex justify-between md:px-9">
      <div class="flex gap-5">
        <div>
          <h2 class="font-bold">Filters</h2>
        </div>
        <div>
          <h2>Clear All</h2>
        </div>
      </div>
      <div class="hidden font-bold md:block text-primary-300">
        <p>444 Products</p>
      </div>
      <div class="block md:hidden">
        <button class="block mx-2 mt-2 md:hidden" @click="open()">
          <img src="/public/img/Vector.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="px-2 mt-5 md:gap-6 xl:gap-16 product-wrap">
      <!-- div 1 -->
      <div
        :class="sidebar ? 'block' : 'hidden'"
        class="px-1 md:w-60 w-full xl:w-64 md:!block z-10 md:relative absolute bg-white"
      >
        <div>
          <h2 class="font-bold">Gender</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Men" name="gender" value="Man" />
          <label for="vehicle1"> Men</label><br />
          <input type="checkbox" id="Women" name="gender" value="Women" />
          <label for="vehicle1"> Women</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Categories</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Casual" name="Casual" value="Casual" />
          <label for="vehicle1"> Casual</label><br />
          <input type="checkbox" id="Sports" name="Sports" value="Sports" />
          <label for="vehicle1"> Sports</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Price</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle1"> Rs. 500 to Rs. 1000</label><br />
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle1"> Rs. 1000 to Rs. 2000</label><br />
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle1"> Rs. 2000 to Rs. 5000</label><br />
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle1"> Above Rs. 5000</label><br />
        </div>

        <h2 class="font-bold">Color</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input type="checkbox" id="Black" name="Black" value="Black" />
            <label for="vehicle1"> Black</label><br />
            <input type="checkbox" id="White" name="White" value="White" />
            <label for="vehicle1"> White</label><br />
            <input type="checkbox" id="Red" name="Red" value="Red" />
            <label for="vehicle1"> Red</label><br />
            <input type="checkbox" id="Green" name="Green" value="Green" />
            <label for="vehicle1"> Green</label><br />
          </div>
          <div>
            <input type="checkbox" id="Blue" name="Blue" value="Blue" />
            <label for="vehicle1"> Blue</label><br />
            <input type="checkbox" id="Yellow" name="Yellow" value="Yellow" />
            <label for="vehicle1"> Yellow</label><br />
            <input type="checkbox" id="Grey" name="Grey" value="Grey" />
            <label for="vehicle1"> Grey</label><br />
          </div>
          <button class="text-sm hover:text-red-900 text-start">
            + 3 more
          </button>
        </div>

        <h2 class="font-bold">Size</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input type="checkbox" id="XS" name="XS" value="XS" />
            <label for="vehicle1"> XS</label><br />
            <input type="checkbox" id="White" name="White" value="White" />
            <label for="vehicle1"> S</label><br />
            <input type="checkbox" id="Red" name="Red" value="Red" />
            <label for="vehicle1"> M</label><br />
            <input type="checkbox" id="Green" name="Green" value="Green" />
            <label for="vehicle1"> L</label><br />
          </div>
          <div>
            <input type="checkbox" id="Blue" name="Blue" value="Blue" />
            <label for="vehicle1"> XL</label><br />
            <input type="checkbox" id="Yellow" name="Yellow" value="Yellow" />
            <label for="vehicle1"> 2XL</label><br />
            <input type="checkbox" id="Grey" name="Grey" value="Grey" />
            <label for="vehicle1"> 3XL</label><br />
            <input type="checkbox" id="Grey" name="Grey" value="Grey" />
            <label for="vehicle1"> 4XL</label><br />
          </div>
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Sort by</h2>
          <hr class="p-1 px-20" />
          <input type="checkbox" id="Men" name="Trending" value="Trending" />
          <label for="vehicle1"> Trending</label><br />
          <input type="checkbox" id="Women" name="gender" value="Women" />
          <label for="vehicle1"> New Arrivals</label><br />
          <input
            type="checkbox"
            id="Recommended"
            name="Recommended"
            value="Recommended"
          />
          <label for="vehicle1"> Recommended</label><br />
          <input type="checkbox" id="sale" name="sale" value="sale" />
          <label for="vehicle1"> Items on sale</label><br />
          <input
            type="checkbox"
            id=" Customer"
            name=" Customer"
            value=" Customer"
          />
          <label for="vehicle1"> Customer reviews</label><br />
        </div>
        <div class="mt-4 text-end">
          <button class="text-red-500 hover:text-red-900">Apply Filter</button>
        </div>
      </div>

      <!-- div 2 -->

      <div
        class="grid grid-cols-2 grid-rows-4 gap-5 py-4 md:gap-8 md:grid-cols-3 md:grid-rows-3"
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

<script>
import axios from "axios";
import ProductCard from "../../../components/card/product-card.vue";

export default {
  name: "product",
  components: {
    ProductCard,
  },
  data() {
    return {
      productData: [],
      sidebar: false,
      isMobile: false,
    };
  },
  mounted() {
    axios
      .get("https://api.8orbit.shop/api/v1/product")
      .then((response) => {
        console.log("Products fetched successfully:", response);
        this.productData = response.data.product;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    this.isMobile = window.innerWidth >= 768;
  },
  methods: {
    open() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>
