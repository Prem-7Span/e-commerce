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
    <div id="upper-section" class="flex gap-20 py-3">
      <div id="img-section" class="flex gap-9">
        <div class="space-y-3">
          <img src="/product-details/product-img-1.png" alt="img-1" />
          <img src="/product-details/product-img-2.png" alt="img-2" />
          <img src="/product-details/product-img-3.png" alt="img-3" />
          <img src="/product-details/product-img-4.png" alt="img-4" />
        </div>
        <div class="w-[459px]">
          <img
            src="/product-details/product-img-main.png"
            class="object-fill"
            alt="main-img"
          />
        </div>
      </div>
      <div id="detail-section" class="">
        <p class="text-xs text-green-500">In Stock</p>
        <h2 class="py-4 text-xl font-semibold">Title</h2>
        <p class="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Nunc commodo odio metus donec
          est diam lectus at vel. Tortor mauris purus blandit vitae pretium dui
          commodo in. Tempus cursus praesent dolor integer mauris. Neque amet
          pretium curabitur condimentum elementum tincidunt sit.
        </p>
        <div class="flex py-3">
          <div><img src="/stars/yellow-star.svg" alt="" /></div>
          <div><img src="/stars/yellow-star.svg" alt="" /></div>
          <div><img src="/stars/yellow-star.svg" alt="" /></div>
          <div><img src="/stars/yellow-star.svg" alt="" /></div>
          <div><img src="/stars/black-star.svg" alt="" /></div>
        </div>
        <div class="flex gap-2 py-2">
          <p class="text-xl text-bold">$799</p>
          <p class="text-gray-500 line-through">MRP 999</p>
        </div>
        <div>
          <p class="text-xs text-green-500">inclusive all taxes</p>
        </div>
        <div class="py-4">
          <p>Colors</p>
          <div id="color-section" class="flex gap-3">
            <div class="w-12 h-12 bg-black rounded-full"></div>
            <div class="w-12 h-12 rounded-full bg-cyan-500"></div>
            <div class="w-12 h-12 bg-orange-600 rounded-full"></div>
            <div class="w-12 h-12 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div class="py-3">
          <p>Sizes</p>
          <div id="color-section" class="flex gap-3">
            <div
              class="flex items-center justify-center w-12 h-12 text-center border rounded-full"
            >
              S
            </div>

            <div
              class="flex items-center justify-center w-12 h-12 text-center border rounded-full"
            >
              M
            </div>

            <div
              class="flex items-center justify-center w-12 h-12 text-center border rounded-full"
            >
              L
            </div>

            <div
              class="flex items-center justify-center w-12 h-12 text-center border rounded-full"
            >
              XL
            </div>

            <div
              class="flex items-center justify-center w-12 h-12 text-center border rounded-full"
            >
              XXL
            </div>
          </div>
        </div>

        <div class="flex py-3">
          <p class="">Delivery:</p>
          <p class="text-gray-500">24-26 April,2024</p>
        </div>

        <div class="flex py-3">
          <p class="">Shipping:</p>
          <p class="text-gray-500">Free for orders above Rs. 500</p>
        </div>

        <div class="flex gap-3 py-4">
          <div></div>
          <router-link :to="{ name: 'Checkout' }">
          <button
          
            class="px-6 py-2 text-base text-white rounded-md bg-primary-offBlack"
          >
          
            Add to bag
          </button>
          </router-link>
          <button
            class="px-6 py-2 text-base text-white rounded-md bg-primary-offBlack"
          >
            Add to wishlist
          </button>
        </div>
        <div class="divide-y"></div>
      </div>
    </div>
    <div id="lower-section"></div>
    <!-- <div class="py-8">
      <p class="py-4 text-xl">You might also like</p>
      <div
        class="grid grid-cols-2 grid-rows-4 gap-5 md:gap-8 md:grid-cols-4 md:grid-rows-1"
      >
      <ProductCard
            v-for="(product, index) in productData"
            :key="index"
            :product="product"
          />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts"></script>

<!-- <script>
import axios from "axios";
import ProductCard from "../../../components/card/product-card.vue";
import { useProductStore } from "/src/store/product.js";


export default {
  data() {
    return {
      productData: [],
      productStore: useProductStore(),
    };
  },
  components: {
    ProductCard,
  },
  async mounted() {
    await this.productStore.fetchProductList();
    this.productData = this.productStore.productData.splice(0, 4);
  },
};
</script> -->

<!-- <script setup>
import { useProductStore } from "/st";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const slug = "your-custom-slug-here"; // Replace this with the dynamic slug as needed

onMounted(() => {
  productStore.fetchProduct(slug);
});

const { product, loading, error } = storeToRefs(productStore);
</script> -->
