<template>
  <div class="max-w-3xl py-8 mx-5">
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error loading orders: {{ error }}</div>
    <div v-else class="space-y-4">
      <h1 class="text-xl font-bold">Your Orders</h1>
      <div
        v-for="order in orders"
        :key="order.id"
        class="flex justify-between bg-white rounded-lg shadow-md sm:flex-wrap"
      >
        <div class="flex items-start gap-2 p-2 md:p-4 md:gap-5">
          <div class="item-center">
            <!-- <img src="/default/order-img.png" alt="" /> -->
            <img
              :src="order.productImage.imageUrl"
              class="max-h-46 rounded-2xl md:w-32 max-w-24"
              :alt="order.productName"
            />
          </div>
          <div>
            <div class="flex items-end justify-between">
              <div>
                <router-link :to="{ name: 'details', params: { slug: order.productsulg  } }">

                <div class="flex gap-2 text-sm">
                  <p>Order id:</p>
                  <p>{{ order.id }}</p>
                  |
                  <p>{{ new Date(order.date).toLocaleDateString() }}</p>
                </div>
                </router-link>
                <div class="flex items-end justify-between">
                  <p
                    class="items-center mt-3 text-3xl font-bold md:text-lg md:mb-2 text-primary-300 line-clamp-2 max-w-72"
                  >
                    {{ order.productName }}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                class="grid grid-cols-2 grid-rows-1 md:flex md:items-center md:justify-between md:gap-2 md:mb-2"
              >
                <div class="flex gap-2">
                  <div class="text-sm text-primary-400">Size:</div>
                  <div class="text-sm font-semibold text-primary-300">
                    {{ order.productSize }}
                  </div>
                </div>
                <div class="flex gap-2">
                  <div class="text-sm text-gray-700 md:mr-2">Color:</div>
                  <div class="text-sm font-semibold text-primary-300">
                    {{ order.productColor }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-6 mt-1 md:mt-0 md:gap-7">
              <p class="font-medium text-primary-300">
                ₹{{ order.productPrice }}
              </p>
              <p
                class="flex text-sm line-through text-primary-300"
                v-if="order.productRegularPrice"
              >
                MRP ₹{{ order.productRegularPrice }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "@/store/orderStore";
import { onMounted, computed } from "vue";

export default {
  setup() {
    const orderStore = useOrderStore();

    onMounted(() => {
      orderStore.fetchOrders();
    });

    return {
      orders: computed(() => orderStore.orders),
      loading: computed(() => orderStore.loading),
      error: computed(() => orderStore.error),
    };
  },
};
</script>
