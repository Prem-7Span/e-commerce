<template>
  <div class="rounded-md shadow-md hover:shadow-lg">
    <div class="relative w-92 h-92">
      <router-link :to="{ name: 'details', params: { slug: product.slug } }">
        <div class="relative img-container">
          <img
            v-if="product.images && product.images.length > 0"
            :src="product.images[0].imageUrl"
            class="absolute inset-0 object-cover w-full h-full rounded-t-md"
          />
          <img
            v-else
            src="/img/Black.jpg"
            class="absolute inset-0 object-cover w-full h-full rounded-t-md"
          />
        </div>
      </router-link>

      <div id="wishlist">
        <button
          v-if="$route.path !== '/wishlist'"
          @click.stop="toggleWishlist"
          class="absolute top-0 right-0 px-2 py-2 mt-2 mb-2 mr-2 bg-white rounded-full"
        >
          <wishlistFillIcon v-if="product.isInWishlist" class="text-red-500" />
          <wishlist-icon v-else />
        </button>
      </div>
      <button
        class="absolute top-0 left-0 px-3 py-3 m-1 mx-2 mt-2 mb-2 text-white rounded-lg md:mx-3 bg-primary-300 md:p-1 md:w-12 md:m-6"
      >
        {{ round(discount) }}%
      </button>
    </div>
    <div class="p-3">
      
      <div class="flex justify-between">
        
        <router-link :to="{ name: 'details', params: { slug: product.slug } }">
          <div>
            <a
              href=""
              class="text-lg font-normal  text-black no-underline line-clamp-1"
            >
              {{ product.name }}
              
            </a>
          </div>
        </router-link>
      </div>
      <div
        class="flex flex-col items-start justify-between gap-1 mt-2 sm:gap-4 md:mt-0"
      >
        <div class="flex flex-row items-center justify-center gap-2">
          <div class="flex gap-2 text-2xl font-semibold">
            <p>₹{{ defaultVariant.price }}</p>
            <p
              class="text-lg font-semibold text-primary-300 md:text-lg xl:text-2xl"
            ></p>
          </div>
          <p
            class="text-sm font-normal line-through text-slate-500 md:text-lg xl:text-lg"
          >
            {{ defaultVariant.regularPrice }}
          </p>
        </div>
      </div>
      <div v-if="isWishlist" class="flex space-x-2 md:mt-4">
        <button
          @click="$emit('remove-from-wishlist')"
          class="w-1/2 px-5 py-2 text-xs text-center text-black bg-transparent border border-gray-600 rounded md:text-base hover:bg-gray-900 hover:text-white"
        >
          Remove
        </button>
        <router-link
          :to="{ name: 'details', params: { slug: product.slug } }"
          class="w-1/2 px-5 py-2 text-xs text-center text-black bg-transparent border border-gray-600 rounded md:text-base hover:bg-gray-900 hover:text-white"
        >
          View Product
        </router-link>
      </div>
      <router-link
        v-else
        :to="{ name: 'details', params: { slug: product.slug } }"
        class="block w-full max-w-full px-5 py-2 my-2 text-base text-center text-black bg-transparent border border-gray-600 rounded hover:bg-gray-900 hover:text-white"
      >
        View Product
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useWishlistStore } from "@/store/wishlist";
import wishlistIcon from "@/components/icons/wishlist-icon.vue";
import wishlistFillIcon from "@/components/icons/wishlist-fill-icon.vue";

export default {
  components: { wishlistIcon, wishlistFillIcon },
  props: {
    product: Object,
    isWishlist: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const wishlistStore = useWishlistStore();

    const defaultVariant = computed(() => {
      if (!props.product || !props.product.productVariants) {
        return null;
      }
      return props.product.productVariants[0];
    });

    const discount = computed(() => {
      const variant = defaultVariant.value;
      if (!variant) {
        return 0;
      }
      return (
        ((variant.regularPrice - variant.price) / variant.regularPrice) * 100
      );
    });

    const round = (value) => Math.round(value);

    const toggleWishlist = async () => {
      try {
        if (props.product.isInWishlist) {
          await wishlistStore.removeFromWishlist(props.product.id);
          props.product.isInWishlist = false;
        } else {
          await wishlistStore.addToWishlist(props.product);
          props.product.isInWishlist = true;
        }
      } catch (error) {
        console.error("Failed to toggle wishlist status:", error.message);
        if (error.response && error.response.status === 403) {
          console.error("You do not have permission to perform this action.");
        }
      }
    };

    return {
      defaultVariant,
      discount,
      round,
      toggleWishlist,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles for the product card component here */
</style>
