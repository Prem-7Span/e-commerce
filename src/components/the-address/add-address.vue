<template>
  <div class="flex flex-col mb-5 space-y-4">
    <label class="text-lg font-medium text-secondary-200">Personal details</label>
    <div class="relative border rounded-md">
      <input type="text" id="firstName" v-model="newAddress.firstName"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="firstName"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">First
        name</label>
    </div>

    <div class="relative border rounded-md">
      <input type="text" id="lastName" v-model="newAddress.lastName"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="lastName"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Last
        name</label>
    </div>

    <div class="relative border rounded-md">
      <input type="tel" id="mobileNumber" v-model="newAddress.mobileNumber"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="mobileNumber"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Mobile
        Number</label>
    </div>

    <label class="text-lg font-medium text-secondary-200">Address details</label>
    <div class="relative border rounded-md">
      <input type="text" id="addressLine1" v-model="newAddress.addressLine1"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="addressLine1"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Address
        Line 1</label>
    </div>

    <div class="relative border rounded-md">
      <input type="text" id="addressLine2" v-model="newAddress.addressLine2"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="addressLine2"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Address
        Line 2</label>
    </div>

    <div class="relative border rounded-md">
      <select id="country" v-model="newAddress.countryId"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer">
        <option selected disabled>Choose a country</option>
        <option v-for="(country, i) in allCountries" :key="i" :value="country.id" class="text-primary-300">{{ country.countryName }}</option>
      </select>
      <label for="country"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Country</label>
    </div>

    <div class="relative border rounded-md">
      <select id="states" v-model="newAddress.stateId"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer">
        <option selected disabled>Choose a state</option>
        <option v-for="(state, i) in allStates" :key="i" :value="state.id" class="text-primary-300">{{ state.stateName }}</option>
      </select>
      <label for="states"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">States</label>
    </div>

    <div class="relative border rounded-md">
      <select id="cities" v-model="newAddress.cityId"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer">
        <option selected disabled>Choose a city</option>
        <option v-for="(city, i) in allCities" :key="i" :value="city.id" class="text-primary-300">{{ city.cityName }}</option>
      </select>
      <label for="cities"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">Cities</label>
    </div>

    <div class="relative border rounded-md">
      <input type="tel" id="pincode" v-model="newAddress.pincode"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" " />
      <label for="pincode"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100">pincode
        Code</label>
    </div>

    <button @click="submitAddress"
      class="w-full flex justify-center bg-primary-300 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Add address
    </button>

    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useAddressStore } from '../../store/address';

export default {
  setup() {
    const addressStore = useAddressStore();
    let allCities = ref([]);
    let allStates = ref([]);
    let allCountries = ref([]);


    const newAddress = ref({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      addressLine1: '',
      addressLine2: '',
      countryId: '',
      stateId: '',
      cityId: '',
      pincode: ''
    });

    onMounted(async () => {
      await addressStore.fetchCountries();
      await addressStore.fetchStates();
      await addressStore.fetchCities();
      await addressStore.fetchAddresses();
      allCities.value = await addressStore.cities;
      allStates.value = await addressStore.states;
      allCountries.value = await addressStore.countries
    });

    const submitAddress = async () => {
      try {
        await addressStore.createAddress(newAddress.value);
        newAddress.value = {
          firstName: '',
          lastName: '',
          mobileNumber: '',
          addressLine1: '',
          addressLine2: '',
          countryId: '',
          stateId: '',
          cityId: '',
          pincode: ''
        };
      } catch (error) {
        console.error('Error submitting address:', error);
      }
    };

    return {
      addresses: addressStore.addresses,
      error: addressStore.error,
      newAddress,
      allCities,
      allCountries,
      allStates,
      submitAddress
    };
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
