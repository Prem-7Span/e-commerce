<template>
  <div class="px-2 md:px-6 scrollbar-hide">
    <!-- Breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />
    <hr class="px-8 m-1 text-gray-300" />

    <div class="flex justify-between md:px-3">
      <div class="flex gap-12 md:gap-32">
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
        <p v-if="filteredProducts && filteredProducts.length">
          {{ filteredProducts.length }} Products
        </p>
      </div>
      <div class="block md:hidden">
        <button class="block mx-2 mt-2 md:hidden" @click="openSidebar">
          <img src="/img/Vector.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="mt-2 md:px-2 md:gap-6 xl:gap-16 product-wrap">
      <div
        :class="sidebar ? 'block' : 'hidden'"
        class="px-1 md:w-60 w-full xl:w-64 md:!block z-10 md:relative absolute bg-white sidebar"
      >
        <!-- Filters here -->
        <div class="hidden">
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
          </div>
        </div>

        <h2 class="font-bold">Discount</h2>
        <hr class="p-1 px-20" />
        <div class="grid grid-cols-2 mb-2 md:block">
          <div>
            <input
              type="radio"
              id="20"
              value="20"
              v-model="productStore.discount"
            />
            <label for="20">Upto 20%</label><br />
            <input
              type="radio"
              id="40"
              value="40"
              v-model="productStore.discount"
            />
            <label for="40">Upto 40%</label><br />
            <input
              type="radio"
              id="60"
              value="60"
              v-model="productStore.discount"
            />
            <label for="60">Upto 60%</label><br />
            <input
              type="radio"
              id="80"
              value="80"
              v-model="productStore.discount"
            />
            <label for="80">Upto 80%</label><br />
          </div>
        </div>

        <div
          class="sticky bottom-0 p-10 text-center bg-white w-72 left-9 right-9 md:hidden"
        >
          <button
            @click="applyFiltersAndCloseSidebar"
            class="w-full p-1 text-center text-white rounded-md bg-primary-300"
          >
            Apply Filters
          </button>
        </div>

        <div
          class="sticky bottom-0 hidden w-full p-10 text-center bg-white left-9 right-9 md:block"
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
        <div v-if="filteredProducts.length === 0" class="flex flex-col px-12 mt-36 items-center justify-center py-10">
          <p class="text-lg font-semibold">No products match your filters.</p>
          <p class="text-lg">Try adjusting your filters</p>
          <div class="py-4 max-w-56">
              <button @click="clearFilters" class="block w-full px-8 py-2 text-white rounded-md bg-primary-300">
                View All Products
              </button>
          </div>
        </div>
        <div v-else class="grid grid-cols-2 gap-5 py-4 md:gap-8 md:grid-cols-5">
          <ProductCard
            v-for="(product, index) in paginatedProducts"
            :key="index"
            :product="product"
          />
        </div>
        <div v-if="filteredProducts.length !== 0" class="flex justify-center mt-4 mb-8">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="pagination-arrow"
          >
            <
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="['pagination-button', { active: page === currentPage }]"
          >
            {{ page }}
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="pagination-arrow"
          >
            >
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
import { useSearchStore } from "../../../store/search.js"; // Corrected import statement

export default {
  components: {
    Breadcrumb,
    MultiRangeSlider,
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();
    const searchStore = useSearchStore(); // Use the search store
    const sidebar = ref(false);
    const isMobile = ref(false);
    const filteredProducts = ref([]);
    const currentPage = ref(1);
    const productsPerPage = 10;

    // Function to handle product search
    const searchProducts = async (keyword) => {
      await searchStore.searchProducts(keyword);
      filteredProducts.value = searchStore.searchResults;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768;
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
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };

    const applyFiltersAndCloseSidebar = async () => {
      await applyFilters();
      sidebar.value = false;
    };

    const clearFilters = async () => {
      productStore.productData = [];
      productStore.categoryName = [];
      productStore.parentCategory = [];
      productStore.selectedPrice = [];
      productStore.color = [];
      productStore.size = [];
      productStore.discount = [];
      productStore.minPrice = 0;
      productStore.maxPrice = 1500;
      productStore.fetchProductList().then(() => {
        filteredProducts.value = productStore.productData;
        currentPage.value = 1; // Reset to first page
      });
    };

    onMounted(async () => {
      filteredProducts.value = await productStore.fetchProductList(
        localStorage.getItem("token")
      );
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const paginatedProducts = computed(() => {
      if (searchStore.searchResults.length > 0) {
        return searchStore.searchResults;
      } else {
        const start = (currentPage.value - 1) * productsPerPage;
        const end = start + productsPerPage;
        window.scrollTo(0, 0);
        return filteredProducts.value.slice(start, end);
      }
    });

    const totalPages = computed(() => {
      if (searchStore.searchResults.length > 0) {
        return 1; // Only one page for search results
      } else {
        return Math.ceil(filteredProducts.value.length / productsPerPage);
      }
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        window.scrollTo(0, 0);
      }
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        window.scrollTo(0, 0);
      }
    };

    const goToPage = (page) => {
      currentPage.value = page;
    };

    const breadcrumbItems = computed(() => [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
    ]);

    return {
      sidebar,
      isMobile,
      productStore,
      searchStore, // Expose searchStore
      searchProducts, // Expose searchProducts
      filteredProducts,
      handleResize,
      openSidebar,
      UpdateValues,
      applyFilters,
      applyFiltersAndCloseSidebar,
      clearFilters,
      breadcrumbItems,
      paginatedProducts,
      currentPage,
      totalPages,
      nextPage,
      previousPage,
      goToPage,
    };
  },
};
</script>

<style>
/* Pagination styles and other necessary styles */
.pagination-arrow,
.pagination-button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.pagination-arrow:disabled,
.pagination-button:disabled {
  cursor: not-allowed;
  background-color: #f0f0f0;
}

.pagination-button.active {
  background-color: #2f2f2f;
  color: white;
}

.pagination-button.active:hover {
  background-color: #2f2f2f;
}

.pagination-button:not(.active):hover {
  background-color: #f1f1f1;
}

/* Rest of your styles */
.sidebar {
  width: 100%;
}
.multi-range-slider {
  border-radius: none;
  box-shadow: none;
  border: none;
  color: #2f2f2f;
}
.multi-range-slider .bar-inner-left {
  background-color: #2f2f2f;
}
.multi-range-slider .bar-inner-right {
  background-color: #2f2f2f;
}
</style>
