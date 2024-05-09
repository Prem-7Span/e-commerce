<template>
  <div class="rounded-md shadow-md hover:shadow-lg">
    <div class="relative">
      <!-- <img src="/src/assets/product-img/img1.png" class="object-cover w-full h-auto rounded-t-md" /> -->
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

      <button
        class="absolute top-0 right-0 px-2 py-2 mt-2 mb-2 mr-2 bg-white rounded-full"
      >
        <img src="/img/icon.svg" alt="" />
      </button>
      <button
        class="absolute top-0 left-0 px-3 py-3 m-1 mx-2 mt-2 mb-2 text-white rounded-lg px- md:mx-3 bg-primary-300 md:p-2 md:w-20 md:m-6"
      >
        -30%
      </button>
    </div>
    <div class="p-3">
      <a href="" class="font-normal text-black no-underline">
        {{ product.name }}</a
      >
      <div class="flex items-center">
        <!-- Subtitle button will get updated in future -->
        <!-- <div class="text-primary-dark">
          <span class="text-primary-300">Sub title</span>
        </div> -->
      </div>
      <div
        class="flex flex-col items-start justify-between gap-1 mt-2 sm:gap-4 md:mt-0"
      >
        <div class="flex flex-row items-center justify-center gap-2">
          <div class="flex gap-1">
            <p>₹</p>
            <p
              class="text-lg font-semibold text-primary-300 md:text-lg xl:text-2xl"
            >
              {{ defaultVariantPrice }}
            </p>
          </div>
          <p
            class="text-sm font-normal line-through text-slate-500 md:text-lg xl:text-2xl"
          >
            999
          </p>
        </div>

        <router-link :to="{ name: 'ProductDetail' }">
          <button
            class="w-full px-24 py-2 text-sm text-black bg-transparent border-2 border-black rounded md:text-sm"
          >
            Add to bag
          </button>
        </router-link>
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
