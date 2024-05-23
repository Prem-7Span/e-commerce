<template>
  <div class="px-2 md:px-6 scrollbar-hide">
    <!-- Breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />
    <hr class="px-8 m-1 text-gray-300" />

    <div class="flex justify-between md:px-3">
      <div class="flex gap-8 md:gap-32">
        <div>
          <h2 class="font-bold">Filters</h2>
        </div>
        <div>
          <h2 class="cursor-pointer applyFilters" @click="clearFilters">
            Clear All
          </h2>
        </div>
      </div>
      <div class="hidden font-bold md:block text-primary-300">
        <p>{{ filteredProducts.length }} Products</p>
      </div>
      <div class="block md:hidden">
        <button class="block mx-2 mt-2 md:hidden" @click="openSidebar">
          <img src="/img/Vector.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="mt-5 md:px-2 md:gap-6 xl:gap-16 product-wrap">
      <div
        :class="sidebar ? 'block' : 'hidden'"
        class="px-1 md:w-60 w-full xl:w-64 md:!block z-10 md:relative absolute bg-white sidebar"
      >
        <!-- Filters here -->
        <div>
          <h2 class="font-bold">Gender</h2>
          <hr class="p-1 px-20" />
          <input
            type="checkbox"
            id="Men"
            value="Men"
            v-model="productStore.parentCategory"
          />
          <label for="Men"> Men</label><br />
          <input
            type="checkbox"
            id="Women"
            value="Women"
            v-model="productStore.parentCategory"
          />
          <label for="Women"> Women</label><br />
        </div>

        <div class="mt-2">
          <h2 class="font-bold">Categories</h2>
          <hr class="p-1 px-20" />
          <input
            type="checkbox"
            id="t-shirt"
            value="t-shirt"
            v-model="productStore.categoryName"
          />
          <label for="Casual"> T-shirts</label><br />
          <input
            type="checkbox"
            id="trousers"
            value="trousers"
            v-model="productStore.categoryName"
          />
          <label for="Sports"> Trousers</label><br />
          <input
            type="checkbox"
            id="Pants"
            value="Pants"
            v-model="productStore.categoryName"
          />
          <label for="Pant"> Pant</label><br />
        </div>

        <div class="relative mt-1 mb-2">
          <h2 class="font-bold">Price</h2>
          <hr class="p-1 px-20" />
          <p class="text-sm">
            Selected Price Range: ₹{{ productStore.minPrice }} - ₹{{
              productStore.maxPrice
            }}
          </p>
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
          <div class="flex justify-between">
            <p>Min</p>
            <p>Max</p>
          </div>
        </div>

        <h2 class="font-bold">Color</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input
              type="checkbox"
              id="Black"
              value="Black"
              v-model="productStore.color"
            />
            <label for="Black"> Black</label><br />
            <input
              type="checkbox"
              id="White"
              value="White"
              v-model="productStore.color"
            />
            <label for="White"> White</label><br />
            <input
              type="checkbox"
              id="Red"
              value="Red"
              v-model="productStore.color"
            />
            <label for="Red"> Red</label><br />
            <input
              type="checkbox"
              id="Green"
              value="Green"
              v-model="productStore.color"
            />
            <label for="Green"> Green</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              id="Blue"
              value="Blue"
              v-model="productStore.color"
            />
            <label for="Blue"> Blue</label><br />
            <input
              type="checkbox"
              id="Yellow"
              value="Yellow"
              v-model="productStore.color"
            />
            <label for="Yellow"> Yellow</label><br />
            <input
              type="checkbox"
              id="Grey"
              value="Grey"
              v-model="productStore.color"
            />
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
            <input
              type="checkbox"
              id="XS"
              value="XS"
              v-model="productStore.size"
            />
            <label for="XS"> XS</label><br />
            <input
              type="checkbox"
              id="S"
              value="S"
              v-model="productStore.size"
            />
            <label for="S"> S</label><br />
            <input
              type="checkbox"
              id="M"
              value="M"
              v-model="productStore.size"
            />
            <label for="M"> M</label><br />
            <input
              type="checkbox"
              id="L"
              value="L"
              v-model="productStore.size"
            />
            <label for="L"> L</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              id="XL"
              value="XL"
              v-model="productStore.size"
            />
            <label for="XL"> XL</label><br />
            <input
              type="checkbox"
              id="2XL"
              value="2XL"
              v-model="productStore.size"
            />
            <label for="2XL"> 2XL</label><br />
            <input
              type="checkbox"
              id="3XL"
              value="3XL"
              v-model="productStore.size"
            />
            <label for="3XL"> 3XL</label><br />
            <input
              type="checkbox"
              id="4XL"
              value="4XL"
              v-model="productStore.size"
            />
            <label for="4XL"> 4XL</label><br />
          </div>
        </div>

        <div
          class="sticky bottom-5 w-72 p-5 text-center bg-white left-9 right-9"
        >
          <button
            @click="applyFilters"
            class="w-full p-1 text-center text-white rounded-md bg-primary-300"
          >
            Apply Filters
          </button>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-2 gap-5 py-4 md:gap-8 md:grid-cols-3">
          <ProductCard
            v-for="(product, index) in paginatedProducts"
            :key="index"
            :product="product"
          />
        </div>
        <div class="flex justify-center mt-4 mb-8">
  <button 
    @click="previousPage" 
    :disabled="currentPage === 1"
    class="pagination-arrow"
  >
    &laquo;
  </button>
  <button 
    v-for="page in totalPages" 
    :key="page" 
    @click="goToPage(page)" 
    :class="['pagination-button', { 'active': page === currentPage }]"
  >
    {{ page }}
  </button>
  <button 
    @click="nextPage" 
    :disabled="currentPage === totalPages"
    class="pagination-arrow"
  >
    &raquo;
  </button>
</div>
</div>
</div>
</div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useProductStore } from "/src/store/product.js";
import ProductCard from "@/components/card/product-card.vue";
import Breadcrumb from "@/components/global/bread-crumb.vue";
import MultiRangeSlider from "multi-range-slider-vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    Breadcrumb,
    MultiRangeSlider,
  },
  setup() {
    const productStore = useProductStore();
    const sidebar = ref(false);
    const isMobile = ref(false);
    const filteredProducts = ref([]);
    const currentPage = ref(1);
    const productsPerPage = 6;

    const handleResize = () => {
      isMobile.value = window.innerWidth >= 768;
    };

    const openSidebar = () => {
      sidebar.value = !sidebar.value;
    };

    const UpdateValues = (value) => {
      productStore.minPrice = value.minValue;
      productStore.maxPrice = value.maxValue;
    };

    const applyFilters = async () => {
      try {
        const filteredData = await productStore.applyFiltersAndFetch();
        filteredProducts.value = filteredData;
        currentPage.value = 1; // Reset to first page
        console.log("Filtered products:", filteredProducts.value);
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };

    const clearFilters = () => {
      productStore.productData = [];
      productStore.categoryName = [];
      productStore.parentCategory = [];
      productStore.selectedPrice = [];
      productStore.color = [];
      productStore.size = [];
      productStore.minPrice = 0;
      productStore.maxPrice = 1500;
      productStore.fetchProductList().then(() => {
        filteredProducts.value = productStore.productData;
        currentPage.value = 1; // Reset to first page
      });
    };

    onMounted(() => {
      productStore.fetchProductList().then(() => {
        filteredProducts.value = productStore.productData;
      });
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * productsPerPage;
      const end = start + productsPerPage;
      return filteredProducts.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredProducts.value.length / productsPerPage);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const breadcrumbItems = computed(() => [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
    ]);

    return {
      sidebar,
      isMobile,
      productStore,
      filteredProducts,
      handleResize,
      openSidebar,
      UpdateValues,
      applyFilters,
      clearFilters,
      breadcrumbItems,
      paginatedProducts,
      currentPage,
      totalPages,
      nextPage,
      previousPage,
    };
  },
};
</script>


<style scoped>
.sidebar {
  width: 100%;
}
.multi-range-slider {
  border-radius: none;
  box-shadow: none;
  border: none;
}
.multi-range-slider .bar-inner{
  background-color: #2F2F2F;
}
.multi-range-slider .bar-inner {
    background-color: #2F2F2F;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    border: solid 1px black;
    justify-content: space-between;
    box-shadow: inset 0px 0px 5px black;
}
.pagination-button {
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
}
.pagination-button[disabled] {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mt-4 {
  margin-top: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.pagination-arrow,
.pagination-button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.pagination-arrow:disabled,
.pagination-button:disabled {
  cursor: not-allowed;
  background-color: #f0f0f0;
}

.pagination-button.active {
  background-color: #2F2F2F;
  color: white;
}

.pagination-button.active:hover {
  background-color: #2F2F2F;
}

.pagination-button:not(.active):hover {
  background-color: #f1f1f1;
}

</style>

