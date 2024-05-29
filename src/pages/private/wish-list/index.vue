<template>
  <div class="px-2 md:px-6 scrollbar-hide">
    <!-- Breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />
    <hr class="px-8 m-1 text-gray-300" />
    <h1 class="py-3 text-xl">Your Wishlist</h1>
    <div v-if="isLoading">
      <p>Loading your wishlist...</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div v-if="wishlist && wishlist.length === 0">
        <p>Your wishlist is empty.</p>
      </div>
      <div
        v-else
        class="grid grid-cols-2 grid-rows-4 gap-5 py-4 md:gap-8 md:grid-cols-4 md:grid-rows-3"
      >
        <ProductCard
          v-for="(product, index) in wishlist"
          :key="index"
          :product="product.products"
          :isWishlist="true"
          @remove-from-wishlist="removeFromWishlist(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useWishlistStore } from "@/store/wishlist";
import ProductCard from "@/components/card/product-card.vue";
import Breadcrumb from "@/components/global/bread-crumb.vue";
import { useRouter } from "vue-router";

export default {
  name: "Wishlist",
  components: {
    ProductCard,
    Breadcrumb,
  },
  setup() {
    const wishlistStore = useWishlistStore();
    const router = useRouter();
    const wishlist = ref([]);
    const isLoading = computed(() => wishlistStore.isLoading);
    const error = computed(() => wishlistStore.getError);

    const fetchWishlist = async () => {
      try {
        await wishlistStore.fetchWishlist(router);
        wishlist.value = wishlistStore.getWishlist;
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    const removeFromWishlist = async (productId) => {
      try {
        await wishlistStore.removeFromWishlist(productId, router);
        await fetchWishlist(); // Refresh the wishlist after removal
      } catch (error) {
        console.error("Error removing product from wishlist:", error);
      }
    };

    const breadcrumbItems = computed(() => [
      { name: "Home", path: "/" },
      { name: "Wishlist", path: "/wishlist" },
    ]);

    onMounted(() => {
      fetchWishlist();
    });

    return {
      wishlist,
      isLoading,
      error,
      removeFromWishlist,
      breadcrumbItems,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles for the wishlist page here */
</style>
