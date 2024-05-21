<template>
  <router-link
    class="rounded-md shadow-md hover:shadow-lg"
    :to="{ name: 'details', params: { slug: product.slug } }"
  >
    <div class="relative">
      <div class="relative img-container">
        <img
          v-if="product.images.length > 0"
          :src="product.images[0].imageUrl"
          class="absolute inset-0 object-cover w-full h-full selection: rounded-t-md"
        />
        <img
          v-else
          src="/img/Black.jpg"
          class="absolute inset-0 object-cover w-full h-full rounded-t-md"
        />
      </div>
      <div id="wishlist">
        <button
          @click.stop="handleAddToWishlist"
          class="absolute top-0 right-0 px-2 py-2 mt-2 mb-2 mr-2 bg-white rounded-full"
        >
          <img src="/img/icon.svg" alt="" class="" />
        </button>
      </div>
      <button
        class="absolute top-0 left-0 px-3 py-3 m-1 mx-2 mt-2 mb-2 text-white rounded-lg px- md:mx-3 bg-primary-300 md:p-2 md:w-20 md:m-6"
      >
        -30%
      </button>
    </div>
    <div class="p-3">
      <div class="flex justify-between">
        <div>
          <a
            href=""
            class="text-xl font-normal text-black no-underline line-clamp-1"
          >
            {{ product.name }}</a
          >
        </div>
      </div>
      <div
        class="flex flex-col items-start justify-between gap-1 mt-2 sm:gap-4 md:mt-0"
      >
        <div class="flex flex-row items-center justify-center gap-2">
          <div class="flex gap-1">
            <p>₹{{ product.price }}</p>
            <p
              class="text-lg font-semibold text-primary-300 md:text-lg xl:text-2xl"
            >
              {{ defaultVariantPrice }}
            </p>
          </div>
          <p
            class="text-sm font-normal line-through text-slate-500 md:text-lg xl:text-lg"
          >
            999
          </p>
        </div>
      </div>
      <button
        class="block w-full max-w-full px-5 py-2 my-4 text-base text-center text-black bg-transparent border border-gray-600 rounded hover:bg-gray-900 hover:text-white"
      >
        Add to bag
      </button>
    </div>
  </router-link>
</template>

<script>
import { ref, computed } from "vue";
import { useProductStore } from "@/store/product";

export default {
  props: {
    product: Object,
  },
  setup(props) {
    const productStore = useProductStore();

    const defaultVariantPrice = computed(() => {
      if (!props.product || !props.product.productVariants) {
        return null;
      }
      const defaultVariant = props.product.productVariants.find(
        (variant) => variant.isDefault === true
      );
      return defaultVariant ? defaultVariant.price : null;
    });

    const handleAddToWishlist = () => {
      productStore.addToWishlist(props.product);
    };

    return {
      defaultVariantPrice,
      handleAddToWishlist,
    };
  },
};
</script>
