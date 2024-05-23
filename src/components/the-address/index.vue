<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-8 mx-3 md:grid-cols-2">
    <div
      class="grid grid-cols-1 grid-rows-1 gap-8 mt-5 md:grid-cols-1 md:grid-rows-1 md:w-auto md:gap-8"
    >
      <div class="flex flex-col mb-5 space-y-4">
        <label class="text-lg font-medium text-secondary-200"
          >Personal details</label
        >
        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >First name</label
          >
        </div>

        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >Last name</label
          >
        </div>

        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >Mobile Number</label
          >
        </div>

        <label class="text-lg font-medium text-secondary-200"
          >Address details</label
        >
        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >Address Line 1</label
          >
        </div>

        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >Address Line 2</label
          >
        </div>

        <div class="relative border rounded-md">
          <select
            id="countries"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >State</label
          >
        </div>
        <div class="relative border rounded-md">
          <select
            id="countries"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >City</label
          >
        </div>

        <div class="relative border rounded-md">
          <input
            type="tel"
            id="mobileNumber"
            class="border-gray-300 pl-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 block px-2.5 pb-2.5 pt-4 w-full text-sm -transparent rounded-lg border-1 appearance-none focus:ring-0 peer"
            placeholder=" "
          />

          <label
            for="mobileNumber"
            class="absolute text-sm duration-300 transform -translate-y-4 scale-80 top-2 z-10 origin-[0] focus:ring-indigo-500 bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:left-3 peer-focus:scale-200 peer-focus:-translate-y-4 text-secondary-100"
            >Postal code</label
          >
        </div>

        <div class="mb-8">
          <button
            class="w-full p-2 text-center text-white rounded-md bg-primary-300"
          >
            Add Address
          </button>
        </div>
      </div>
    </div>

    <div class="grid">
      <ordercard />
    </div>
  </div>
</template>

<script>
import ordercard from "../order-summary/order-card.vue";
import checkoutcard from "../card/checkout-card.vue";

export default {
  components: {
    ordercard,
    checkoutcard,
  },
};
</script>
