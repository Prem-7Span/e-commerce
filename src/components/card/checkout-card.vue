<template>
  <div class="flex justify-between bg-white rounded-lg shadow-md sm:flex-wrap">
    <div class="flex items-start gap-2 p-2 md:p-4 md:gap-5">
      <div class="item-center">
        <img
          :src="productImage"
          class="max-h-46 rounded-2xl md:w-32 max-w-24"
          :alt="productName"
        />
      </div>
      <div>
        <div class="flex">
          <div>
            <h5
              class="items-center text-sm font-bold md:text-lg md:mb-2 text-primary-300 line-clamp-2 max-w-72"
            >
              {{ productName }}
            </h5>
          </div>
        </div>
        <div
          class="grid grid-cols-2 grid-rows-1 md:flex md:items-center md:justify-between md:gap-2 md:mb-2"
        >
          <div class="flex gap-2">
            <div class="text-sm md:mr-2 text-primary-400">Size:</div>
            <div class="text-sm font-semibold text-primary-300">
              {{ productSize }}
            </div>
          </div>
          <div class="flex gap-2">
            <div class="text-sm text-gray-700 md:mr-2">Color:</div>
            <div class="text-sm font-semibold text-primary-300">
              {{ productColor }}
            </div>
          </div>
          <div class="flex">
            <div class="flex mt-1 text-sm md:mr-2 md:mt-0 text-primary-400">
              Qty:
              <div>
                <div class="px-2">
                  <div class="flex items-center w-16 border rounded-lg">
                    <button
                      @click="decrement"
                      class="flex items-center justify-center w-5 h-5 text-gray-700 rounded-l-lg hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span class="w-8 text-center">{{ quantity }}</span>
                    <button
                      @click="increment"
                      class="flex items-center justify-center w-5 h-5 text-gray-700 rounded-r-lg hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-6 mt-1 md:mt-0 md:gap-7">
          <p class="font-medium text-primary-300">₹{{ productPrice }}</p>
          <p
            class="flex text-sm line-through text-primary-300"
            v-if="productRegularPrice"
          >
            MRP ₹{{ productRegularPrice }}
          </p>
        </div>
        <p class="text-sm text-secondary-300">inclusive of all taxes</p>
        <div class="flex items-center justify-center gap-3 mt-4 md:hidden">
          <img
            src="/product-checkout/deletecheckout.svg"
            alt="Delete icon"
            @click="removeFromCart"
          />
          <!-- <p
            class="text-sm cursor-pointer text-secondary-red text-end"
            @click="moveToWishlist"
          >
            Move to Wishlist
          </p> -->
        </div>
        <div class="items-center hidden gap-1 mt-3 md:flex">
          <div>
            <img
              class="mt-1"
              src="/product-checkout/return.svg"
              alt="Return icon"
            />
          </div>
          <div class="text-sm text-gray-700">
            <span class="text-lg text-primary-300">14 days</span> return
            available
          </div>
        </div>
      </div>
    </div>
    <div class="hidden mx-3 mt-3 bg-white rounded-lg md:block md:flex-col">
      <div class="flex">
        <img
          src="/product-checkout/deletecheckout.svg"
          alt="Delete icon"
          @click="removeFromCart"
        />
      </div>
      <!-- <div class="md:mt-32 text-secondary-red">
        <p class="text-center cursor-pointer" @click="moveToWishlist">
          Move to Wishlist
        </p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";

const props = defineProps({
  productVariantId: String,
  quantity: Number,
});

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

const cartItem = computed(() => {
  return cartStore.cartItems.find(
    (item) => item.productVariantId === props.productVariantId
  );
});

const productVariant = computed(() => cartItem.value?.productVarient);
const product = computed(() => productVariant.value?.products);

const productName = computed(() => product.value?.name || "N/A");
const productImage = computed(() => product.value?.images?.[0]?.imageUrl || "");
const productPrice = computed(() => productVariant.value?.price || "N/A");
const productRegularPrice = computed(
  () => productVariant.value?.regularPrice || ""
);
const productColor = computed(() => productVariant.value?.color || "N/A");
const productSize = computed(() => productVariant.value?.size || "N/A");
const checkoutId = computed(() => cartItem.value?.id || "N/A");

const quantity = ref(props.quantity);

const updateCartItemQuantity = (quantity) => {
  cartStore.updateCartItemQuantity(
    props.productVariantId,
    quantity,
    checkoutId.value
  );
};

const increment = () => {
  quantity.value++;
  updateCartItemQuantity(quantity.value);
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
    updateCartItemQuantity(quantity.value);
  }
};

const removeFromCart = () => {
  cartStore.removeCartItem(checkoutId.value);
};

const moveToWishlist = () => {
  const productData = cartItem.value;
  if (productData) {
    wishlistStore.addToWishlist(productData);
    cartStore.removeCartItem(checkoutId.value);
  }
};
</script>

