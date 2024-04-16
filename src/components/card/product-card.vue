<template>
  <div class="rounded-md shadow-md hover:shadow-lg">
    <div class="relative">
      <!-- <img src="/src/assets/product-img/img1.png" class="object-cover w-full h-auto rounded-t-md" /> -->

      <img
        v-if="product.images.length > 0"
        :src="product.images[0].imageUrl"
        class="object-cover w-full h-auto rounded-t-md"
      />
      <!-- <img
        v-else
        src="/src/assets/product-img/img1.png"
        class="object-cover w-full h-auto rounded-t-md"
      /> -->

      <button class="absolute top-0 right-0 mt-2 mb-2 mr-2">
        <!-- <img src="/src/assets/product-img/icon.svg" alt="" /> -->
      </button>
      <button
        class="absolute top-0 left-0 p-1 m-1 mx-2 mt-2 mb-2 text-white rounded-md md:mx-3 bg-primary-300 md:p-2 md:w-20 md:m-6"
      >
        -30%
      </button>
    </div>
    <div class="p-3">
      <a href="" class="font-semibold no-underline text-primary-dark">
        {{ product.name }}</a
      >
      <div class="flex items-center">
        <div class="text-primary-dark">
          <span class="text-primary-300">Sub title</span>
        </div>
      </div>
      <div
        class="flex items-center justify-between gap-1 mt-2 sm:gap-4 md:mt-0"
      >
        <div class="flex items-center justify-center gap-2">
          <!-- <img
            src="/src/assets/product-img/Vector.svg"
            alt="400"
            class="w-3 mt-1"
          /> -->
          <!-- <img :src="/src/assets/product-img/Vector.svg" alt="400" class="w-3 mt-1"> -->

          <p class="text-sm font-bold text-primary-300 md:text-lg xl:text-2xl">
            {{ defaultVariantPrice }}
          </p>
        </div>

        <button
          class="px-2 py-1 text-xs text-white rounded bg-primary-300 md:text-sm md:py-3 md:px-4"
        >
          Add to bag
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    defaultVariantPrice() {
      if (!this.product || !this.product.productVariants) {
        return null;
      }
      const defaultVariant = this.product.productVariants.find(
        (variant) => variant.isDefult === true
      );
      return defaultVariant ? defaultVariant.price : null;
    },
  },
};
</script>
