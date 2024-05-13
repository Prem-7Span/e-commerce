<template>
<div>


<div class="grid md:grid-cols-2 grid-rows-1 gap-8  grid-cols-1 mx-3">
<div class="  grid grid-cols-1 md:grid-cols-1 md:grid-rows-1 grid-rows-1 mt-5 md:w-auto gap-8 md:gap-8">
  <div v-for="(data,index) in 2">
<checkoutcard/>
  </div>
</div>

<div class="grid">
  <ordercard/>
</div>
</div>

<div class="mx-3 mt-5">
<h1 class="font-bold text-lg">You might also like</h1>
<div
class="grid grid-cols-2 grid-rows-4 gap-5 md:gap-8 md:grid-cols-4 md:grid-rows-1 mt-5"
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

<script>
import axios from "axios";
import ProductCard from "../../components/card/product-card.vue";
import ordercard from "../../components/order-summary/order-card.vue";
import checkoutcard from "../../components/checkout-card/index.vue"

export default {
  data() {
    return {
      productData: [],
    };
  },
  components: {
    ProductCard,
    ordercard,
    checkoutcard
  },
  mounted() {
    axios
      .get("https://api.8orbit.shop/api/v1/product")
      .then((response) => {
        console.log("Products fetched successfully:", response);
        this.productData = response.data.product;
        this.productData.splice(0, 10);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>

<style>
.vl {
  border-left: 2px solid whitesmoke;
  height: 400px;
}

</style>