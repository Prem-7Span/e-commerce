<template>
  <div>
    <div v-if="addressStore.error" class="px-2 mt-5 text-red-500 rounded-md">
      Please add an address
    </div>
    <div><p class="font-bold text-md">Select the address</p></div>
    <div
      v-for="address in addressStore.addresses"
      :key="address.id"
      class="px-5 mt-2 border rounded-md"
    >
      <div class="flex justify-between">
        <div class="mt-5">
          <h2>{{ address.firstName }}</h2>
          <h2>{{ address.mobileNumber }}</h2>
          <h2>{{ address.addressLine1 }}</h2>
          <h2>{{ address.addressLine2 }}</h2>
        </div>
        <div>
          <input
            type="radio"
            :value="address.id"
            v-model="selectedAddressId"
            @change="selectAddress(address.id)"
          />
        </div>
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

      <div class="flex justify-end gap-4 mt-4 mb-2">
        <button @click="deleteAddress(address.id)">
          <img src="/address/Vector.svg" alt="delete" />
        </button>
        <button @click="editData(address)">
          <img src="/address/EditVector.svg" alt="edit" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAddressStore } from "../../store/address.js";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddressComponent",
  emits: ["selectAddress"],
  setup(props, { emit }) {
    const addressStore = useAddressStore();
    const selectedAddressId = ref(null);

    // Fetch addresses when the component is mounted
    addressStore.fetchAddresses();

    // Method to delete an address
    const deleteAddress = async (addressId) => {
      await addressStore.deleteAddress(addressId);
    };

    // Method to emit the address data to the parent component
    const editData = (address) => {
      emit("editaddress", address);
    };

    const selectAddress = (addressId) => {
      selectedAddressId.value = addressId;
      emit("selectAddress", addressId); // Emit the selected address ID to the parent component
    };

    return {
      addressStore,
      deleteAddress,
      editData,
      selectedAddressId,
      selectAddress,
    };
  },
});
</script>
