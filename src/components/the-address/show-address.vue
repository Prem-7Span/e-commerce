<template>
  <div>


    <div v-if="addressStore.error" class="mt-5 px-2 text-red-500 rounded-md">
      <!-- Error: {{ addressStore.error.message }} -->
      please add to address 
    </div>

    <div v-for="address in addressStore.addresses" :key="address.id" class="mt-2 px-5 border rounded-md">
      <div class="justify-between flex">
        <div class="mt-5">
          <h2>{{ address.firstName }}</h2>
          <h2>{{ address.mobileNumber }}</h2>
          <h2>{{ address.addressLine1 }}</h2>
          <h2>{{ address.addressLine2 }}</h2>
        </div>
        <div><input type="radio"></div>
      </div>

      <div class="mt-4">
        <div>
          <h2>{{ address.city.cityName }}</h2>
        </div>
        <div>
          <h2>{{ address.country.countryName }}</h2>
        </div>
      </div>

      <div class="mt-4">
        <p>{{ address.pincode }}</p>
      </div>

      <div class="mt-4 mb-2 flex gap-4 justify-end">
        <button @click="deleteAddress(address.id)">
          <img src="/address/Vector.svg" alt="delete">
          <!-- delete the address -->
        </button>
        <img src="/address/EditVector.svg" alt="edit">
      </div>
    </div>
  </div>
</template>

<script>
import { useAddressStore } from '../../store/address.js';

export default {
  name: 'AddressComponent',
  setup() {
    const addressStore = useAddressStore();

    // Fetch addresses when the component is mounted
    addressStore.fetchAddresses();

    // Method to delete an address
    const deleteAddress = async (addressId) => {
      await addressStore.deleteAddress(addressId);
    };

    return {
      addressStore,
      deleteAddress,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
