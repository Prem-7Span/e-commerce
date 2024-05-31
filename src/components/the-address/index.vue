<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-8 mx-3 md:grid-cols-2">
    <div
      class="grid grid-cols-1 grid-rows-1 gap-8 mt-5 mb-4 md:grid-cols-1 md:grid-rows-1 md:w-auto md:gap-1"
    >
      <addAddress @addressSubmitted="AddressSubmitted" />
      <ShowAddress @selectAddress="onSelectAddress" />
    </div>

    <div class="grid">
      <ordercard :selectedAddressId="selectedAddressId" />
    </div>
  </div>
</template>

<script>
import ordercard from "../card/order-card.vue";
import checkoutcard from "../card/checkout-card.vue";
import addAddress from "./add-address.vue";
import ShowAddress from "./show-address.vue";

export default {
  components: {
    ordercard,
    checkoutcard,
    addAddress,
    ShowAddress,
  },
  data() {
    return {
      selectedAddressId: null,
    };
  },
  methods: {
    AddressSubmitted(newAddress) {
      console.log("Address submitted:", newAddress);
    },
    onSelectAddress(addressId) {
      this.selectedAddressId = addressId;
    },
  },
};
</script>
