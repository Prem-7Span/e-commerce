<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-8 mx-3 md:grid-cols-2">
    <div
      class="grid mb-4 grid-cols-1 grid-rows-1 gap-8 mt-5 md:grid-cols-1 md:grid-rows-1 md:w-auto md:gap-1"
    >
     <addAddress @addressSubmitted="AddressSubmitted" />
     <ShowAddress />
    </div>

    <div class="grid">
      <ordercard />
    </div>
  </div>
</template>

<script>
import ordercard from "../order-summary/order-card.vue";
import checkoutcard from "../card/checkout-card.vue";
import addAddress from "./add-address.vue";
import ShowAddress from "./show-address.vue";

export default {
  components: {
    ordercard,
    checkoutcard,
    addAddress,
    ShowAddress
  },
  methods:{
    AddressSubmitted(newAddress) {
      console.log('Address submitted:', newAddress);
    }
    }
};
</script>




