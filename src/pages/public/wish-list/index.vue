<template>
  <div>
    <h1>Wishlist</h1>
    <div v-if="wishlist.length === 0">
      <p>Your wishlist is empty.</p>
    </div>
    <div v-else>
      <div v-for="product in wishlist" :key="product.id" class="wishlist-item">
        <img
          :src="product.images[0]?.imageUrl || '/img/Black.jpg'"
          :alt="product.name"
          class="wishlist-image"
        />
        <div class="wishlist-details">
          <h3>{{ product.name }}</h3>
          <p>₹{{ product.price }}</p>
          <button @click="removeFromWishlist(product.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/product";

export default {
  name: "wish-list",
  setup() {
    const productStore = useProductStore();

    const removeFromWishlist = (productId) => {
      productStore.removeFromWishlist(productId);
    };

    return {
      wishlist: productStore.getWishlist,
      removeFromWishlist,
    };
  },
};
</script>
