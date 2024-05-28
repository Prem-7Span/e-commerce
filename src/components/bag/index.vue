<template>
  <div>
    <div class="grid grid-cols-1 grid-rows-1 gap-8 mx-3 md:grid-cols-2">
      <div
        class="grid grid-cols-1 grid-rows-1 gap-8 mt-5 md:grid-cols-1 md:grid-rows-1 md:w-auto md:gap-8"
      >
        <div v-if="cartStore.loading" class="text-center">Loading...</div>
        <div v-else-if="cartStore.error" class="text-center text-red-500">
          {{ cartStore.error }}
        </div>
        <div v-else>
          <div v-for="item in cartStore.cartItems" :key="item.id">
            <CheckoutCard
              :productVariantId="item.productVariantId"
              :quantity="item.quantity"
              class="m-2"
            />
          </div>
        </div>
      </div>
      <div class="grid">
        <OrderCard
          @next="goToAddress"
          @placeOrder="goToPayment"
          :showNextButton="true"
        />
      </div>
    </div>
    <div class="mx-3 mt-5">
      <h1 class="text-lg font-bold">You might also like</h1>
      <div
        class="grid grid-cols-2 grid-rows-4 gap-5 mt-5 md:gap-8 md:grid-cols-4 md:grid-rows-1"
      >
        <ProductCard
          v-for="(product, index) in productData"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import { useCartStore } from "@/store/cart";
import { useProductStore } from "@/store/product";
import CheckoutCard from "@/components/card/checkout-card.vue";
import OrderCard from "../../components/order-summary/order-card.vue";
import ProductCard from "../../components/card/product-card.vue";

const cartStore = useCartStore();
const productStore = useProductStore();

const productData = ref([]);

onMounted(async () => {
  await cartStore.fetchCart();
  await productStore.fetchProductList();
  productData.value = productStore.productData.slice(0, 4);
});



const emit = defineEmits(["changeTab"]);

const goToAddress = () => {
  emit("changeTab", "TheAddress");
};

const goToPayment = () => {
  emit("changeTab", "ThePayment");
};
</script>
