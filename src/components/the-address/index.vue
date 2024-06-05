<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-8 mx-3 md:grid-cols-2">
    <div class="grid grid-cols-1 grid-rows-1 gap-8 mt-5 mb-4 md:grid-cols-1 md:grid-rows-1 md:w-auto md:gap-1">
      <add-address @addressSubmitted="addressSubmitted" :addressToEdit="addressToEdit"  />
      <show-address @selectAddress="onSelectAddress" @editAddress="onEditAddress" />
    </div>

    <div class="grid">
      <order-card :selectedAddressId="selectedAddressId" />
    </div>
  </div>
</template>

<script>
import OrderCard from "../card/order-card.vue";
import AddAddress from "./add-address.vue";
import ShowAddress from "./show-address.vue";

export default {
  components: {
    OrderCard,
    AddAddress,
    ShowAddress,
  },
  data() {
    return {
      selectedAddressId: null,
      addressToEdit: null,
    };
  },
  methods: {
    addressSubmitted(newAddress) {
      console.log("Address submitted:", newAddress);
    },
    onSelectAddress(addressId) {
      this.selectedAddressId = addressId;
    },
    onEditAddress(address) {
      this.addressToEdit = address;
      console.log("Address to edit:", address);
    },
  },
};
</script>
