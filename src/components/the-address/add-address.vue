<template>
  <div class="flex flex-col mb-5 space-y-4">
    <label class="text-lg font-medium text-secondary-200"
      >Personal details</label
    >

    <div class="relative border rounded-md">
      <input
        type="text"
        id="firstName"
        v-model="userDetails.firstName"
        @input="validateField('firstName')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
        readonly
      />
      <label
        for="firstName"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >First Name</label
      >
      
    </div>
    <p class="text-sm text-red-500">
      {{ errors.firstName }}
    </p>

    <div class="relative border rounded-md">
      <input
        type="text"
        id="lastName"
        v-model="userDetails.lastName"
        @input="validateField('lastName')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
        readonly
      />
      <label
        for="lastName"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Last Name</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.lastName }}
    </p>

    <div class="relative border rounded-md">
      <input
        type="tel"
        id="mobileNumber"
        maxlength="10"
        v-model="userDetails.mobileNo"
        @input="validateField('mobileNumber')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
        readonly
      />
      <label
        for="mobileNumber"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Mobile Number</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.mobileNumber }}
    </p>

    <label class="text-lg font-medium text-secondary-200"
      >Address details</label
    >

    <div class="relative border rounded-md">
      <input
        type="text"
        id="addressLine1"
        v-model="newAddress.addressLine1"
        @input="validateField('addressLine1')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        for="addressLine1"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Address Line 1</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.addressLine1 }}
    </p>

    <div class="relative border rounded-md">
      <input
        type="text"
        id="addressLine2"
        v-model="newAddress.addressLine2"
        @input="validateField('addressLine2')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        for="addressLine2"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Address Line 2</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.addressLine2 }}
    </p>
    <!-- <div class="relative border rounded-md">
      <select
        id="country"
        v-model="newAddress.countryId"
        @change="validateField('countryId')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
      >
        <option selected disabled>Choose a country</option>
        <option
          v-for="(country, i) in allCountries"
          :key="i"
          :value="country.id"
          class="text-primary-300"
        >
          {{ country.countryName }}
        </option>
      </select>
      <label
        for="country"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Country</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.countryId }}
    </p> -->

    <div class="relative border rounded-md">
      <select
        id="states"
        v-model="newAddress.stateId"
        @change="
          () => {
            validateField('stateId');
            fetchCity(newAddress.stateId);
          }
        "
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
      >
        <option selected disabled>Choose a state</option>
        <option
          v-for="(state, i) in allStates"
          :key="i"
          :value="state.id"
          class="text-primary-300"
        >
          {{ state.stateName }}
        </option>
      </select>
      <label
        for="states"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >State</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.stateId }}
    </p>

    <div class="relative border rounded-md">
      <select
        id="cities"
        v-model="newAddress.cityId"
        @change="validateField('cityId')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
      >
        <option selected disabled>Choose a city</option>
        <option
          v-for="(city, i) in allCities"
          :key="i"
          :value="city.id"
          class="text-primary-300"
        >
          {{ city.cityName }}
        </option>
      </select>
      <label
        for="cities"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >City</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.cityId }}
    </p>

    <div class="relative border rounded-md">
      <input
        type="text"
        id="pincode"
        v-model="newAddress.pincode"
        @input="validateField('pincode')"
        class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        for="pincode"
        class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-80 peer-focus:-translate-y-4 text-secondary-100"
        >Pincode</label
      >
      <p class="mt-2 text-primary-200"></p>
    </div>
    <p class="text-lg text-red-500">
      {{ errors.pincode }}
    </p>

    <button
      @click="addressToEdit ? updateAddress() : addAddress()"
      class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-300 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ addressToEdit ? "Update" : "Add address" }}
    </button>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import { useAddressStore } from "../../store/address";

export default {
  props: {
    addressToEdit: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const addressStore = useAddressStore();

    const newAddress = ref({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      countryId: "",
      stateId: "",
      cityId: "",
      pincode: "",
    });

    const errors = ref({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      countryId: "",
      stateId: "",
      cityId: "",
      pincode: "",
    });

    const userDetails = ref({
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      addresses: [],
    });

    const isLoading = ref(true);

    const save = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://api.8orbit.shop/api/v1/userDetails",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        userDetails.value = response.data;
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      } finally {
        isLoading.value = false;
      }
    };

    const allCountries = computed(() => addressStore.countries);
    const allStates = computed(() => addressStore.states);
    const allCities = computed(() => addressStore.cities);

    onMounted(async () => {
      await addressStore.fetchCountries();
      await addressStore.fetchStates();
      save();
    });

    watch(
      () => props.addressToEdit,
      (newVal) => {
        if (newVal) {
          fetchCity(newVal.state.id);

          // console.log('newid',newVal.city.id);
          newAddress.value = {
            firstName: newVal.firstName,
            lastName: newVal.lastName,
            mobileNumber: newVal.mobileNumber,
            addressLine1: newVal.addressLine1,
            addressLine2: newVal.addressLine2,
            countryId: newVal.country.id,
            stateId: newVal.state.id,
            cityId: newVal.city.id,
            pincode: newVal.pincode,
          };
          window.scrollTo(0, 0);
        } else {
          resetNewAddress();
        }
      }
    );

    const fetchCity = (id) => {
      addressStore.fetchCities(id);
    };

    const validateField = (field) => {
      switch (field) {
        case "firstName":
          errors.value.firstName = newAddress.value.firstName
            ? ""
            : "First Name is required";
          break;
        case "lastName":
          errors.value.lastName = newAddress.value.lastName
            ? ""
            : "Last Name is required";
          break;
        case "mobileNumber":
          errors.value.mobileNumber = newAddress.value.mobileNumber
            ? ""
            : "Mobile Number is required";
          break;
        case "addressLine1":
          errors.value.addressLine1 = newAddress.value.addressLine1
            ? ""
            : "Address Line 1 is required";
          break;
        case "addressLine2":
          errors.value.addressLine2 = newAddress.value.addressLine2
            ? ""
            : "Address Line 2 is required";
          break;
        case "countryId":
          errors.value.countryId = newAddress.value.countryId
            ? ""
            : "Country is required";
          break;
        case "stateId":
          errors.value.stateId = newAddress.value.stateId
            ? ""
            : "State is required";
          break;
        case "cityId":
          errors.value.cityId = newAddress.value.cityId
            ? ""
            : "City is required";
          break;
        case "pincode":
          errors.value.pincode = newAddress.value.pincode
            ? ""
            : "Pincode is required";
          break;
      }
    };

    const canSubmit = computed(() => {
      return (
        newAddress.value.firstName &&
        newAddress.value.lastName &&
        newAddress.value.mobileNumber &&
        newAddress.value.addressLine1 &&
        newAddress.value.addressLine2 &&
        newAddress.value.countryId &&
        newAddress.value.stateId &&
        newAddress.value.cityId &&
        newAddress.value.pincode &&
        !errors.value.firstName &&
        !errors.value.lastName &&
        !errors.value.mobileNumber &&
        !errors.value.addressLine1 &&
        !errors.value.addressLine2 &&
        !errors.value.countryId &&
        !errors.value.stateId &&
        !errors.value.cityId &&
        !errors.value.pincode
      );
    });

    const addAddress = async () => {
      try {
        await addressStore.createAddress(newAddress.value);
        await addressStore.fetchAddresses();
        resetNewAddress();
        emit("addressSubmitted", newAddress.value);
      } catch (error) {
        console.error("Error submitting address:", error);
      }
    };

    const updateAddress = async () => {
      try {
        await axios.put(
          `https://api.8orbit.shop/api/v1/address/${props.addressToEdit.id}`,
          newAddress.value,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        await addressStore.fetchAddresses();
        resetNewAddress();
        emit("addressUpdated", newAddress.value);
      } catch (error) {
        console.error("Error updating address:", error);
      }
    };

    const resetNewAddress = () => {
      newAddress.value = {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        addressLine1: "",
        addressLine2: "",
        countryId: "",
        stateId: "",
        cityId: "",
        pincode: "",
      };
    };

    const handleSubmit = () => {
      if (props.addressToEdit) {
        updateAddress();
      } else {
        addAddress();
      }
    };

    return {
      newAddress,
      allCities,
      fetchCity,
      allCountries,
      allStates,
      errors,
      validateField,
      canSubmit,
      save,
      userDetails,
      addAddress,
      updateAddress,
      handleSubmit,
    };
  },
};
</script>
