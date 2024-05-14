<template>
  <router-link
    class="rounded-md shadow-md hover:shadow-lg"
    :to="{ name: 'details', params: { slug: product.slug } }"
  >
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
        <img src="/img/icon.svg" alt="" class="" />
      </button>
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
        <!-- <div class="flex">
          <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
          <p>4.2</p>
        </div> -->
      </div>
      <!-- Subtitle button will get updated in future
      <div class="flex items-center">
        <div class="text-primary-dark">
          <span class="text-primary-300">Sub title</span>
        </div>
      </div> -->
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
